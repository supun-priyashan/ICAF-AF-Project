const Download = require("../models/downloads.model");

const getDownloads = async (request, response) => {
    try {
        const downloads = await Download.find();
        response.status(200).json({ downloads: downloads });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

//TODO: Add a create function for downloads

module.exports = { getDownloads };
