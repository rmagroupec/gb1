const mongoose = require("mongoose");

const vendorBankDetailsSchema = new mongoose.Schema({
    vid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        foreignKey: "vid",
        ref: "vendor",
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    bankname: {
        type: String,
        required: true,
    },
    accountholdername: {
        type: String,
        required: true,
    },
    accountnumber: {
        type: String,
        required: true,
    },
    
    ifsccode: {
        type: String,
        required: true,
    },
    branchname: {
        type: String,
    },
    upiid: {
        type: String,
    },
});

module.exports = mongoose.model("vendorBankDetails", vendorBankDetailsSchema);