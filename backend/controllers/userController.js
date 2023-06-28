const User = require('../models/User');

// Controller function for creating a skill for a user
async function createUser(req, res) {
  
  try {
    const { username, password} = req.body;

    const newUser = await User.create({
        username,
        password
      });
    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
}

module.exports = {
createUser,
};
