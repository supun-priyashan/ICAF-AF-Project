const Attendee = require("../models/attendee.model");

const addAttendee = async (request, response) => {
    const conf = new Attendee(request.body);

    await conf.save().
    then((data) => {
        response.status(200).send({attendee: data}).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    })
}

module.exports = {
    addAttendee
};
