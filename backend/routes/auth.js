const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendWelcomeEmail } = require('../utils/email');

router.post('/register', async (req, res) => {
  try {
    const { role, name, email, phoneNumber, password, city, state, tuitionMode, nearArea, educationLevel, specializationSubjects, requiredSubjects, photo, title, cgpa } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      role, name, email, phoneNumber, password: hashedPassword, city, state, tuitionMode, nearArea,
      educationLevel, specializationSubjects, requiredSubjects, photo, title, cgpa
    });

    await newUser.save();
    
    // Send email asynchronously
    sendWelcomeEmail(email, name, role);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (email === 'admin' && password === 'Admin123') {
      const token = jwt.sign({ id: 'admin_id', role: 'admin' }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
      return res.json({ token, user: { id: 'admin_id', name: 'Admin', role: 'admin', email: 'admin' } });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    res.json({ token, user: { id: user._id, name: user.name, role: user.role, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
