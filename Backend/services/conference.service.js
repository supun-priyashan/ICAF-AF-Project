const Conference = require("../models/conference.model");

const getConference = async (request, response) => {

    try {
        const conference = await Conference.find();
        response.status(200).json({ conference: conference });
    } catch (error) {
        response.status(401).json({ message: error.message });
    }
};

module.exports = { getConference };