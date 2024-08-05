// routes/userProfile.js
import express from 'express';
import userProfile from '../models/userProfile.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get user profile
router.get('/profile', authenticate, async (req, res) => {
  try {
    const profile = await userProfile.findOne({ userId: req.user.id });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
});

// Update user profile
router.put('/profile', authenticate, async (req, res) => {
  const { name, phone, address } = req.body;
  try {
    const profile = await userProfile.findOneAndUpdate(
      { userId: req.user.id },
      { name, phone, address },
      { new: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
});

export default router;
