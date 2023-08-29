const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        maxLength: 10,
    },
    otp: {
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
    // Pancarddoc: {
    //     type: String,
    //     // type: mongoose.Schema.Types.BinData,                        //document upload ..

    // },
    // Pannumber: {
    //     type: String,
    // },
    // Legalname: {
    //     type: String,
    // },
    // Gstnumber: {
    //     type: String,
    // },
    // Turnover: {
    //     type: Number,
    // },
    // Gstdoc: {
    //     type: String,
    //     // type: mongoose.Schema.Types.BinData,                     //document upload ..

    // },
});

module.exports = mongoose.model("vendor", vendorSchema);