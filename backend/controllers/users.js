const express = require('express').Router();
const db = require('../models');

const { User } = db

// Routes
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByPk(userId);
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
//create a new User
router.post('/', async (req, res) => {
    const { firstName, lastName, email, password, screenName } = req.body;

    try {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
            screenName,
        });

        res.json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router