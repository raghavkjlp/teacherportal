const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all teachers (with optional filters for parents)
router.get('/teachers', async (req, res) => {
  try {
    const { city, state, nearArea, subject, tuitionMode } = req.query;
    
    let query = { role: 'teacher' };
    if (city) query.city = new RegExp(city, 'i');
    if (state) query.state = new RegExp(state, 'i');
    if (nearArea) query.nearArea = new RegExp(nearArea, 'i');
    if (subject) query.specializationSubjects = new RegExp(subject, 'i');
    if (tuitionMode && tuitionMode !== 'both') {
      // If parent wants 'home', show teachers who are 'home' or 'both'
      query.tuitionMode = { $in: [tuitionMode, 'both'] };
    }

    const teachers = await User.find(query).select('-password');
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Admin only: Get all users
router.get('/all', async (req, res) => {
  try {
    // In a real app, add middleware to check if req.user.role === 'admin'
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Admin only: Verify a user
router.put('/:id/verify', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isVerified: true }, { returnDocument: 'after' });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
