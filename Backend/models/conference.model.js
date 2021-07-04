const mongoose = require("mongoose");

const ConferenceSchema = new mongoose.Schema({
    conferenceName: { type: String, required: true, trim: true },
    conferenceDescription: { type: String, required: true, trim: true},
    venue: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    mail: {type: String, required:true},
    isApproved: {type:Boolean, default: false},
},{ timestamps: { createdAt: 'created_at' } });

const Conference = mongoose.model("conference", ConferenceSchema);

module.exports = Conference;
