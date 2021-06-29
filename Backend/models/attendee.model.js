
const mongoose = require("mongoose");

const AttendeeSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true,trim: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true, trim: true },
    isPaid: { type: Boolean, required: true, default: false },
});

const Attendee = mongoose.model("attendees", AttendeeSchema);

module.exports = Attendee;