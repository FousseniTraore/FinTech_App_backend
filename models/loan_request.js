// models/LoanRequest.js
import mongoose from 'mongoose';

const loanRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  purpose: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Approved, Rejected
});

export default mongoose.model('LoanRequest', loanRequestSchema);
