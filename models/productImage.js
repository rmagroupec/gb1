const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  pimage_name: {
    type: String,
  },
  pimage_path: {
    type: String,
  },
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "pid",
    ref: "vendorProductModel",
  },
});

module.exports = mongoose.model(" productImage", productImageSchema);
