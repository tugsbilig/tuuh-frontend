import apiClient from '@/lib/apiClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { eventId } = req.query;
    const response = await apiClient.get(`/comments/${eventId}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
}