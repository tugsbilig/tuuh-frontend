import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../backend/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;
    const { db } = await connectToDatabase();

    // Check if user exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password (you should use bcrypt)
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await db.collection('users').insertOne({
      email,
      password, // In production, store only hashedPassword
      createdAt: new Date(),
    });

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}