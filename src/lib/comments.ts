import axios from 'axios';

export const getComments = async (eventId: string) => {
    const res = await axios.get(`/api/comments/event/${eventId}`);
    return res.data;
};

export const postComment = async (eventId: string, content: string) => {
    const res = await axios.post('/api/comments', { eventId, content }, { withCredentials: true });
    return res.data;
};
