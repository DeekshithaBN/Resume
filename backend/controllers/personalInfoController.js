const PersonalInfo = require('../models/PersonalInfo1');


// Controller function for creating personal information for a user
async function createPersonalInfo(req, res) {
  try {
    const userId = req.params.userId;
    const { firstName, lastName } = req.body;

    const personalInfo = await PersonalInfo.create({
      user: userId,
      firstName,
      lastName,
    });

    res.status(201).json(personalInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create personal information' });
  }
}

module.exports = {
  createPersonalInfo
};
