const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    role_name: {
        type: String,
        required: true,
        maxLength: 50,
    },
});

module.exports = mongoose.model("role", roleSchema);
