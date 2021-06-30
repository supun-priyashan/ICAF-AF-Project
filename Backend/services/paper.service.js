const Paper = require('../models/paper.model')

const addPaper = async (request, response) => {
    const paper = new Paper(request.body);

    await paper.save().
    then((data) => {
        response.status(200).send({Paper: data}).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

const getPapers = async (request, response) => {
    try {
        const papers = await Paper.find();
        response.status(200).json({ papers: papers });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

module.exports = {
    addPaper,
    getPapers
};
