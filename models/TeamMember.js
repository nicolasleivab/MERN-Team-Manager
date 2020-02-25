const mongoose = require('mongoose');

const TeamMemberSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  role: {
    type: String,
    default: 'Developer'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('teamMember', TeamMemberSchema);
