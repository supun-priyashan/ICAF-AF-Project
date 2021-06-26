const mongoose = require("mongoose");

const ConferenceSchema = new mongoose.Schema({
    conferenceName: { type: String, required: true, trim: true },
    conferenceDescription: { type: String, required: true, trim: true},
    venue: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    mail: {type: String, required:true},
    agenda: [
        {
            id: { type: String, required: true, trim: true },
            startDate: { type: Date, required: true },
            endDate: { type: Date, required: true },
            topic: { type: String, required: true, trim: true },
            content: { type: String, required: true, trim: true },
        }
    ]
});

const Conference = mongoose.model("conference", ConferenceSchema);

module.exports = Conference;