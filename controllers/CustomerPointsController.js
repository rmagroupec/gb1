const { model } = require("mongoose");
const CustomerPoints = require("../models/CustomerPoints");

// create admin
const createCustomerPoints = async (req, res) => {
  try {
    const { cid, points,mcatid, transection_type,  transdate } = req.body;
    const response = await CustomerPoints.create({ cid, points,mcatid, transection_type,  transdate });
    res.status(200).json({
      success: true,
      data: response,
      message: "Points created successfully",
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
const getCustomerPoints = async (req, res) => {
  try {
    const admins = await CustomerPoints.find({});
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
const getCustomerPointsById = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await CustomerPoints.find({ cid: id });

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

const deleteCustomerPoints = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await CustomerPoints.findByIdAndDelete(id);
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

const updateCustomerPoints = async (req, res) => {
  try {
    const { id, cid, points,mcatid, transection_type,  transdate } = req.body;
    const admin = await CustomerPoints.findByIdAndUpdate(
      { _id: id },
      { cid, points,mcatid, transection_type,  transdate },
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
      message: `wallet updated successfully`,
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
  createCustomerPoints,
  getCustomerPoints,
  getCustomerPointsById,
  deleteCustomerPoints,
  updateCustomerPoints,
};
