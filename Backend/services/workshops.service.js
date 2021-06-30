const Workshop = require('../models/Workshops.model')

const addWorkshop = async (request, response) => {
    const Workshop = new Workshop(request.body);

    await Workshop.save().
    then((data) => {
        response.status(200).send({Workshop: data}).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

const getWorkshops = async (request, response) => {
    try {
        const workshops = await Workshop.find();
        response.status(200).json({ workshops: workshops });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

module.exports = {
    addWorkshop,
    getWorkshops
};
