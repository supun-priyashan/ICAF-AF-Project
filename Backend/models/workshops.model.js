const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
    topic: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    presenters: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: "Presenter"},
    proposal: { type: String, required: true, trim: true },
    isApproved: { type: Boolean, required: true, trim: true, default: false }
});

const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;
