// models/User.js
const userSchema = new mongoose.Schema({
    // Other fields
    balance: { type: Number, default: 0 },
  });
  