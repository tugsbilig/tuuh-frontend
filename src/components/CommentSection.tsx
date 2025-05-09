// components/CommentSection.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CommentType {
  _id: string;
  user?: {  
    username?: string;
  };
  text: string;
  timestamp: string;
}
interface CommentSectionProps {
  eventId: number;
}

const CommentSection: React.FC<CommentSectionProps> = ({ eventId }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  useEffect(() => {
    // Check if user is logged in (you might have a different way to check)
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    
    
    if (token && storedUsername) {
      setIsLoggedIn(true);
     
    }
    
    const fetchComments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/comments/${eventId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // Include cookies if your backend uses them
        });
        setComments(response.data);
      } catch (err) {
        console.error('Error fetching comments:', err);
      }
    };
    
    
    
    fetchComments();
  }, [eventId]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
  
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      // Redirect to login or show error
      return;
    }
  
    try {
      const response = await axios.post(
        `http://localhost:5000/api/comments`,
        {
          text: newComment,
          eventId
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true // Add this for consistency
        }
      );
  
      setComments([response.data, ...comments]);
      setNewComment('');
    } catch (err) {
      console.error('Error posting comment:', err);
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        // Handle unauthorized (token expired or invalid)
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        // Optionally redirect to login
      }
    }
  };
  return (
    <div className="mt-12 border-t border-gray-700 pt-8">
      <h2 className="text-2xl font-bold mb-6">Сэтгэгдлүүд</h2>

      {isLoggedIn ? (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-1">
              Сэтгэгдэл
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white min-h-[120px]"
              placeholder="Сэтгэгдэлээ бичих..."
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors"
          >
            Илгээх
          </button>
        </form>
      ) : (
        <p className="mb-8 text-gray-400">Сэтгэгдэл бичихэд нэвтэрнэ үү</p>
      )}

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-400">Сэтгэгдэл байхгүй байна</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="p-4 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-yellow-400">
                    {comment.user?.username || "Anonymous"}
                </h4>
                <span className="text-xs text-gray-400">
                  {new Date(comment.timestamp).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-300">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;