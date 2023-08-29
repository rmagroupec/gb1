const mongoose = require("mongoose");

const cartModelSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  cid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "cid",
    ref: " customer",
  },
  transdate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("  cartModel", cartModelSchema);
