import apiClient from '@/lib/apiClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await apiClient.post('/comments', req.body);
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create comment' });
    }
  } else {
    res.status(405).end();
  }
}