const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "pid",
    ref: " vendorProductModel",
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  transdate: {
    type: Date,
    default: Date.now(),
  },
  cart_id: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "id",
    ref: "cartModel",
  },
  cid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "cid",
    ref: " customer",
  },
});

module.exports = mongoose.model(" cartProduct", cartProductSchema);
