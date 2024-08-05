import express from 'express';
import User from '../models/User.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get account balance
router.get('/balance', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ balance: user.balance });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching balance', error });
  }
});

export default router;
