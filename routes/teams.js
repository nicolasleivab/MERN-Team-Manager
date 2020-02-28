const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Team = require('../models/Team');

// @route   GET api/teams
// @desc    Get all team
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const teams = await Team.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(teams);
  } catch (err) {
    console.error(err.message);
  }
});

// @route   POST api/teams
// @desc    Add new Team
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    const { name } = req.body;

    try {
      const newTeam = new Team({
        name,
        user: req.user.id
      });

      const team = await newTeam.save();
      res.json(team);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/teams
// @desc    Udpate team
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name } = req.body;

  // Build team object
  const teamFields = {};
  if (name) teamFields.name = name;

  try {
    let team = await Team.findById(req.params.id);

    if (!team) return res.status(404).json({ msg: 'Team not found' });

    // Make sure user owns team
    if (team.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    team = await Team.findByIdAndUpdate(
      req.params.id,
      { $set: teamFields },
      { new: true }
    );

    res.json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/teams
// @desc    Delete team
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) return res.status(404).json({ msg: 'Team not found' });

    // Make sure user owns team
    if (team.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    await Team.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Team removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
