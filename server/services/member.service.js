const mongoose = require("mongoose");
const { Member } = require("../models/");

const createMember = async (memberData) => {
  try {
    const member = new Member(memberData);
    await member.save();
    return member;
  } catch (error) {
    return { message: error.message };
  }
};

const getMembers = async () => {
  try {
    return await Member.find();
  } catch (error) {
    return { message: error.message };
  }
};

const updateMemeber = async (id, updateData) => {
  try {
    return await Member.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      updateData,
      {
        new: true,
      }
    );
  } catch (error) {
    return { message: error.message };
  }
};

const deleteMember = async (id) => {
  try {
    return await Member.findByIdAndDelete(id);
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = {
  createMember,
  getMembers,
  updateMemeber,
  deleteMember,
};
