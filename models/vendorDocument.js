const mongoose = require("mongoose");

const vendorDocumentSchema = new mongoose.Schema({
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
    fssailicensenumber: {
        type: String,
    },
    fssaiexpirydate: {
        type: String,
    },
   
    
    fssaistatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    Pannumber: {
        type: String,
    },
    Panlegalname: {
        type: String,
    },
    Panaddress: {
        type: String,
    },
    panstatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
        Gstnumber: {
        type: String,
    },
    gststatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    
    druglicensenumber: {
        type: String,
    },
    drugstatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
});

module.exports = mongoose.model("vendorDocument", vendorDocumentSchema);