const mongoose = require("mongoose");

const productTagSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  ptagname: {
    type: String,
  },
  ptagvalue: {
    type: String,
  },
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "pid",
    ref: "vendorProductModel",
  },
});

module.exports = mongoose.model("  productTag", productTagSchema);
