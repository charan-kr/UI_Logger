const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  log: {
    type: Object,
    default: {},
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const Log = (module.exports = mongoose.model("logs", LogSchema));
