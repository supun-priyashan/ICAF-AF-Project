const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    topic: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: "Researcher" },
    isApproved: { type: Boolean, required: true, default: false },
    isPaid: { type: Boolean, required: true, default: false }
})

const Paper = mongoose.model('Paper', paperSchema);

module.exports = Paper;
