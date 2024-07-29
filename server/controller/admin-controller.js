const User = require("../models/user-model");

// adminForm send all user info
const adminForm = async (req, res) => {
  try {
    const allUser = await User.find();
    console.log("User admin data", allUser);
    res.status(200).json({ message: allUser });
  } catch (error) {
    console.log("admin error", error);
    res.status(400).json({ message: error.message });
  }
};

// deleteUser delete user by id
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    console.log("User admin data", deleteUser);
    res.status(200).json({ message: deleteUser });
  } catch (error) {
    console.log("admin error", error);
    res.status(400).json({ message: error.message });
  }
};

// userIdDetails get user by id
const userIdDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    console.log("User id detail", user);

    res.status(200).json({ message: user });
  } catch (error) {
    console.log("admin detailes", error);
    res.status(400).json({ message: error.message });
  }
};

// editUser edit user by id
const editUser = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("body", req.body);
    const editesUser = await User.updateOne({ _id: id }, { $set: req.body });
    console.log("User admin edited data", editesUser);
    res.status(200).json({ message: editesUser });
  } catch (error) {
    console.log("admin edit error", error);
    res.status(400).json({ message: error.message });
  }
};
module.exports = { adminForm, deleteUser, userIdDetails, editUser };
