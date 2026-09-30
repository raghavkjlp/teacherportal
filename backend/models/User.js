const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  role: { type: String, enum: ['teacher', 'parent', 'admin'], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  tuitionMode: { type: String, enum: ['home', 'online', 'both'] },
  nearArea: { type: String },
  educationLevel: { type: String }, // Teacher only
  specializationSubjects: [{ type: String }], // Teacher only
  photo: { type: String }, // Teacher only (Base64)
  title: { type: String }, // Teacher only (Mr, Mrs, etc.)
  requiredSubjects: [{ type: String }], // Parent only
  cgpa: { type: String }, // Parent/Student only
  isVerified: { type: Boolean, default: false }, // Admin verification
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
