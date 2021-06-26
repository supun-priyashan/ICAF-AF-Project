const mongoose = require("mongoose");

const DownloadSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    url: { type: String, required: true}
});

const Downloads = mongoose.model("downloads", DownloadSchema);

module.exports = Downloads;