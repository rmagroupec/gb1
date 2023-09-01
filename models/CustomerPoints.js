const mongoose = require("mongoose");

const customerPointschema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  cid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "id",
    ref: "customer",
  },
  mcatid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "id",
    ref: "mainCategoryModel",
  },
  points: {
    type: String,
    required: true,
  },
  transection_type: {
    type: String,
    required: true,
  },
  transdate: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("customerPoiints", customerPointschema);
