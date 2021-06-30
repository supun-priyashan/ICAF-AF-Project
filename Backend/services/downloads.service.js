const Download = require("../models/downloads.model");

const getDownloads = async (request, response) => {
    try {
        const downloads = await Download.find();
        response.status(200).json({ downloads: downloads });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

const addDownload = async (request, response) => {
    const download = new Download(request.body);

    await Download.save().
    then((data) => {
        response.status(200).send({Download: data}).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

module.exports = {
    getDownloads,
    addDownload
};
