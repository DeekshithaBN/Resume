const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const personalInfoController = require('../controllers/personalInfoController');
const skillController = require('../controllers/skillController');

// User routes
router.post('/users', userController.createUser);
// Add more user routes as needed

// Personal Info routes
router.post('/users/:userId/personal-info', personalInfoController.createPersonalInfo);
// Add more personal info routes as needed

// Skill routes
router.post('/users/:userId/skills', skillController.createSkill);
// Add more skill routes as needed

module.exports = router;
