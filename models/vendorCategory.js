const mongoose = require("mongoose");

const vendorCategorySchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  catimage: {
    type: String,
  },
  transdate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },

  vid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "vid",
    ref: "vendor",
  },
  storeid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "storeid",
    ref: "vendorStore",
  },
});

module.exports = mongoose.model(" vendorCategory", vendorCategorySchema);
