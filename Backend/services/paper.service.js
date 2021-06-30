const Paper = require('../models/paper.model')

const addPaper = async (request, response) => {
    const Paper = new Paper(request.body);

    await Paper.save().
    then((data) => {
        response.status(200).send({Paper: data}).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

module.exports = {
    addPaper
};