const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add a contact email"],
    },
    phone: {
        type: String,
        required: [true, "Please add a contact phone"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);