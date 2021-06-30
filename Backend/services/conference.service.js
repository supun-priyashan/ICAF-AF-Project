const Conference = require("../models/conference.model");

const getConference = async (request, response) => {

    try {
        const conference = await Conference.findOne().sort({ field: -_id }).limit(1);
        response.status(200).json({ conference: conference });
    } catch (error) {
        response.status(401).json({ message: error.message });
    }
};

const addConference = async (request, response) => {
    const conf = new Conference(request.body);

    await conf.save().
        then((data) => {
            response.status(200).send({conference: data}).
            catch((err) => {
                response.status(500).send({error: err.message});
            });
    })
}

const putConference = async (request, response) => {
    const conf = new Conference(request.body);

    await conf.save().
    then((data) => {
        response.status(200).send({conference: data}).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

module.exports = {
    getConference,
    addConference,
    putConference
};
