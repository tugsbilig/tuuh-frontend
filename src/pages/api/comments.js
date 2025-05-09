// frontend/src/api/comments.js

// Helper functions to work with localStorage
const getCommentsFromStorage = (postId) => {
    const allComments = JSON.parse(localStorage.getItem('comments') || '{}');
    return allComments[postId] || [];
  };
  
  const saveCommentsToStorage = (postId, comments) => {
    const allComments = JSON.parse(localStorage.getItem('comments') || '{}');
    allComments[postId] = comments;
    localStorage.setItem('comments', JSON.stringify(allComments));
  };
  
  export const fetchComments = async (postId) => {
    return getCommentsFromStorage(postId);
  };
  
  export const addComment = async (postId, comment) => {
    const comments = getCommentsFromStorage(postId);
    const newComment = {
      ...comment,
      id: Date.now().toString(), // simple ID generation
      createdAt: new Date().toISOString(),
    };
    const updatedComments = [...comments, newComment];
    saveCommentsToStorage(postId, updatedComments);
    return newComment;
  };
  
  export const deleteComment = async (postId, commentId) => {
    const comments = getCommentsFromStorage(postId);
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    saveCommentsToStorage(postId, updatedComments);
    return commentId;
  };