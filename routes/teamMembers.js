const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const TeamMember = require('../models/TeamMember');

// @route   GET api/teamMembers
// @desc    Get all teamMembers
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const teamMembers = await TeamMember.find({ user: req.user.id });
    res.json(teamMembers);
  } catch (err) {
    console.error(err.message);
  }
});

// @route   POST api/teamMembers
// @desc    Add new TeamMember
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('team', 'Team is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    const { name, email, phone, role, team } = req.body;

    try {
      const newTeamMember = new TeamMember({
        name,
        email,
        phone,
        role,
        team,
        user: req.user.id
      });

      const teamMember = await newTeamMember.save();
      res.json(teamMember);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/teamMembers
// @desc    Udpate teamMember
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, phone, role, team } = req.body;

  // Build member object
  const memberFields = {};
  if (name) memberFields.name = name;
  if (email) memberFields.email = email;
  if (phone) memberFields.phone = phone;
  if (role) memberFields.role = role;
  if (team) memberFields.team = team;

  try {
    let teamMember = await TeamMember.findById(req.params.id);

    if (!teamMember) return res.status(404).json({ msg: 'Member not found' });

    // Make sure user owns member
    if (teamMember.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    teamMember = await TeamMember.findByIdAndUpdate(
      req.params.id,
      { $set: memberFields },
      { new: true }
    );

    res.json(teamMember);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/teamMembers
// @desc    Delete teamMember
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);

    if (!teamMember) return res.status(404).json({ msg: 'Member not found' });

    // Make sure user owns member
    if (teamMember.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    await TeamMember.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Member removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
