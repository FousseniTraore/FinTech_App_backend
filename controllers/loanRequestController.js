import express from 'express';
import LoanRequest from '../models/LoanRequest.js';
import { authenticate } from '../middleware/authMiddleware.js'; // Ensure user is authenticated

const router = express.Router();

// Submit a loan request
router.post('/request', authenticate, async (req, res) => {
  const { amount, purpose } = req.body;
  const userId = req.user.id; // Get the user ID from auth middleware

  try {
    const loanRequest = new LoanRequest({ userId, amount, purpose });
    await loanRequest.save();
    res.status(201).json({ message: 'Loan request submitted successfully', data: loanRequest });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting loan request', error });
  }
});

export default router;
