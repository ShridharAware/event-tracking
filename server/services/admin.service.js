const { User } = require("../models");
const bcrypt = require("bcrypt");

const createAdmin = async (userData) => {
  try {
    const { name, email, password } = userData;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashPassword,
      role: "admin",
    });
    await user.save();
    return user;
  } catch (error) {
    return { error: error.message };
  }
};

const getUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    return { error: error.message };
  }
};

const updateUser = async (id, updateData) => {
  try {
    return await User.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      updateData,
      {
        new: true,
      }
    );
  } catch (error) {
    return { error: error.message };
  }
};

const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  createAdmin,
  getUsers,
  updateUser,
  deleteUser,
};
