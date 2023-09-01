const mongoose = require("mongoose");

const cartModelSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "cid",
    ref: " customer",
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "id",
    ref: " product",
  },
  vendor_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "id",
    ref: "vendor",
  },
  store_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "id",
    ref: "vendorStore",
  },
  price: {
    type:String
  },
  quantity: {
    type:Number
  },

  transdate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("  cartModel", cartModelSchema);
