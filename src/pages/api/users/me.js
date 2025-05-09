import { getSession } from 'next-auth/react';
import User from '../../../models/User';
import dbConnect from '../../../lib/dbConnect';
import { uploadToCloudinary } from '../../../lib/cloudinary';
import multer from 'multer';

// Configure multer for file upload handling
const upload = multer({ storage: multer.memoryStorage() });

// Helper to run middleware
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  await dbConnect();

  try {
    switch (req.method) {
      case 'GET':
        // Handle GET request - Fetch user data
        const user = await User.findById(session.user.id).select('-password');
        
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);

      case 'PATCH':
        // Handle PATCH request - Update user data
        await runMiddleware(req, res, upload.single('profilePicture'));

        const updates = {};
        
        // Handle username update
        if (req.body.username) {
          updates.username = req.body.username;
        }

        // Handle profile picture upload if present
        if (req.file) {
          const result = await uploadToCloudinary(req.file.buffer.toString('base64'), {
            folder: 'profile-pictures',
            resource_type: 'image'
          });
          updates.profilePicture = result.secure_url;
        }

        const updatedUser = await User.findByIdAndUpdate(
          session.user.id,
          updates,
          { new: true }
        ).select('-password');

        return res.status(200).json(updatedUser);

      default:
        res.setHeader('Allow', ['GET', 'PATCH']);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream for file upload
  },
};