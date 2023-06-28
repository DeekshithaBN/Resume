
const Skill = require('../models/Skill');

// Controller function for creating a skill for a user
async function createSkill(req, res) {
  try {
    const userId = req.params.userId;
    const { name } = req.body;

    const skill = await Skill.create({
      user: userId,
      name,
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create skill' });
  }
}

module.exports = {
  createSkill,
};
