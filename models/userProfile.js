// models/UserProfile.js
import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstname: { type: String },
  lastname: { type: String },
  dob: { type: Date },
  gender: { type: String },
  nationality: { type: String },
  phone: { type: String },
  address: { type: String },
  income: { type: String },
  employmentStatus: { type: String },
  job: { type: String },
  employer: { type: String },

});

export default mongoose.model('UserProfile', userProfileSchema);
