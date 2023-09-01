const { model } = require("mongoose");
const VendorWallet = require("../models/VendorWallet");

// create admin
const createVendorWallet = async (req, res) => {
  try {
    const { vid, walletamount,  transdate } = req.body;
    const response = await VendorWallet.create({ vid, walletamount, transdate });
    res.status(200).json({
      success: true,
      data: response,
      message: "wallet created successfully",
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
const getVendorWallet = async (req, res) => {
  try {
    const admins = await VendorWallet.find({});
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
const getVendorWalletById = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await VendorWallet.find({ vid: id });

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

const deleteVendorWallet = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await VendorWallet.findByIdAndDelete(id);
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

const updateVendorWallet = async (req, res) => {
  try {
    const { id, vid, walletamount,  transdate } = req.body;
    const admin = await VendorWallet.findByIdAndUpdate(
      { _id: id },
      { vid, walletamount,  transdate },
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
  createVendorWallet,
  getVendorWallet,
  getVendorWalletById,
  deleteVendorWallet,
  updateVendorWallet,
};
