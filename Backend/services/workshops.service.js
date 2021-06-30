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

module.exports = {
    addWorkshop
};