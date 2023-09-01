const mongoose = require("mongoose");

const vendorProductModelSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  pname: {
    type: String,
    required: true,
    maxLength: 50,
  },
  pimage: {
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
  vcatid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "vcatid",
    ref: "vendorCategory",
  },
  stock: {
    type: Number,
  },
  price: {
    type: Number,
  },
  est_price: {
    type: Number,
  },
  pdesc: {
    type: String,
  },
  best_seller: {
    type: String,
  },
  must_try: {
    type: String,
  },
  product_cat: {
    type: String,
  },
  variable_product: {
    type: Array,
    // default: false,
  },
  instock:{
    type:Boolean,
    default:true
  }
});

module.exports = mongoose.model("vendorProductModel", vendorProductModelSchema);
