// routes/applicantInfo.js
import express from 'express';
import ApplicantInfo from '../models/ApplicantInfo.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get applicant info
router.get('/info', authenticate, async (req, res) => {
  try {
    const info = await ApplicantInfo.findOne({ userId: req.user.id });
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applicant info', error });
  }
});

// Update applicant info
router.put('/info', authenticate, async (req, res) => {
  const { /* fields */ } = req.body;
  try {
    const info = await ApplicantInfo.findOneAndUpdate(
      { userId: req.user.id },
      { /* fields */ },
      { new: true }
    );
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: 'Error updating applicant info', error });
  }
});

export default router;
