const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the blacklist token schema
const blacklistTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,  // Ensure each token can only be blacklisted once
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Automatically set the time when the token is added
    expires: 86400,  // 1 day (86400 seconds)
  },
});

// Create the BlacklistToken model
module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
