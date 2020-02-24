const express = require('express');
const router = express.Router();

// @route   GET api/teamMembers
// @desc    Get all teamMembers
// @access  Private
router.get('/', (req, res) => {
  res.send('Register a user');
});

// @route   POST api/teamMembers
// @desc    Add new TeamMember
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   PUT api/teamMembers
// @desc    Udpate teamMember
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update teamMember');
});

module.exports = router;

// @route   DELETE api/teamMembers
// @desc    Delete teamMember
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete teamMember');
});

module.exports = router;
