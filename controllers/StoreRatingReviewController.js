const { model } = require("mongoose");
const VendorRatingReviewModel = require("../models/VendorRatingReview");

// create admin
const createRatingReview = async (req, res) => {
  try {
    const { cname, rating, review,sid, transdate } = req.body;
    const response = await VendorRatingReviewModel.create({ cname, rating, review, sid, transdate });
    res.status(200).json({
      success: true,
      data: response,
      message: "rating review submitted successfully",
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
const getRatingReview = async (req, res) => {
  try {
    const admins = await VendorRatingReviewModel.find({});
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
const getRatingReviewById = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await VendorRatingReviewModel.find({ sid: id });

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

const deleteRatingReview = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await VendorRatingReviewModel.findByIdAndDelete(id);
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

const updateRatingReviewModel = async (req, res) => {
  try {
    const { id, cname, rating, review, sid, transdate } = req.body;
    const admin = await VendorRatingReviewModel.findByIdAndUpdate(
      { _id: id },
      { cname, rating, review, sid, transdate },
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
      message: ` rating review ${id} data updated successfully`,
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
  createRatingReview,
  getRatingReview,
  getRatingReviewById,
  deleteRatingReview,
  updateRatingReviewModel,
};
