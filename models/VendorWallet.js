const mongoose = require("mongoose");

const vendorWalletSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  vid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "vid",
    ref: "vendor",
  },
  walletamount: {
    type: String,
    required: true,
  },
  transdate: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("vendorWallet", vendorWalletSchema);
