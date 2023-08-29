const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
    phone: {
        type: String,
        required: true,
        maxLength: 10,
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
});

module.exports = mongoose.model("adminModel", adminSchema);
