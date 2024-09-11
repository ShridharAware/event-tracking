const mongoose = require("../config/dbConfig");
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

const Member = mongoose.models.member || mongoose.model("member", memberSchema);
module.exports = Member;
