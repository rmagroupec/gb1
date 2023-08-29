const { model } = require("mongoose");
const adminModel = require("../models/adminModel");

// create admin
const createAdmin = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const response = await adminModel.create({ name, email, phone });
    res.status(200).json({
      success: true,
      data: response,
      message: "created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      // data: "internal server error",
      message: err.message,
    });
  }
};

// get admin
const getAdmin = async (req, res) => {
  try {
    const admins = await adminModel.find({});
    res.status(200).json({
      success: true,
      data: admins,
      message: "get successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: [],
      message: "something went wrong",
    });
  }
};

// get admin By Id
const getAdminById = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await adminModel.findById({ _id: id });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "No data found",
      });
    }
    res.status(200).json({
      success: true,
      data: admin,
      message: "get successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: {},
      message: "something went wrong",
    });
  }
};

// delete admin

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await adminModel.findByIdAndDelete(id);
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "No data found",
      });
    }
    res.json({
      success: true,
      message: "deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "somthing went wrong",
    });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { id, name, email, phone, status } = req.body;
    const admin = await adminModel.findByIdAndUpdate(
      { _id: id },
      { name, email, phone, status },
      { new: true }
    );

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: admin,
      message: ` admin ${id} data updated successfully`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

module.exports = {
  createAdmin,
  getAdmin,
  getAdminById,
  deleteAdmin,
  updateAdmin,
};
