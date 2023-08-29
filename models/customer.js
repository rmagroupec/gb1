const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: String,
        required: false,
        maxLength: 50,
    },
    email: {
        type: String,
        required: false,
        // unique: true,
    },
    otp: {
        type: String,
        required: false,
        // unique: true,
    },
    phone: {
        type: String,
        required: true,
        maxLength: 10,
    },
    photo_url: {
        type: String,
    },
    transdate: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    mob_notification: {
        type: String,
    },
    // otp: {
    //     type: String,
    // },
    role: {
        type: String,
        enum: ["admin", "deliveryboy", "vendor", "customer"],
        default: "customer",
    },
});

module.exports = mongoose.model("customer", customerSchema);
