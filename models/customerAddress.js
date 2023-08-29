const mongoose = require("mongoose");

const customerAddressSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
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
    complete_address: {
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
    transdate: {
        type: Date,
        default: Date.now(),
    },
    cid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        foreignKey: "cid",
        ref: "customer",
    },
});

module.exports = mongoose.model("customerAddress", customerAddressSchema);
