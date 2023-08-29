const mongoose = require("mongoose");

const vendorStoreSchema = new mongoose.Schema({
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
  storename: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  streetNumber: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  CountryCode: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  storeimage: {
    type: String,
    // type: mongoose.Schema.Types.BinData,                        //document upload ..
  },
  storeopeningtime: {
    type: String,
  },
  storeclosingtime: {
    type: String,
  },
  sunday: {
    type: Boolean,
    default: false,
  },
  monday: {
    type: Boolean,
    default: false,
  },
  tuesday: {
    type: Boolean,
    default: false,
  },
  wednesday: {
    type: Boolean,
    default: false,
  },
  thursday: {
    type: Boolean,
    default: false,
  },
  friday: {
    type: Boolean,
    default: false,
  },
  saturday: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: true,
  },
  storeOwner: {
    type: String,
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("vendorStore", vendorStoreSchema);
