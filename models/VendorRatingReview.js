const mongoose = require("mongoose");

const vendorRatingReviewSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  sid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "id",
    ref: "vendorStore",
  },
  cname: {
    type: String,
    required: true,
  },
  rating:{
    type:String,
    required:true
  },
  review:{
    type:String,
    required:true
  },
  transdate: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("vendorRatingReview", vendorRatingReviewSchema);
