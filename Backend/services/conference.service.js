const Conference = require("../models/conference.model");

const getConference = async (request, response) => {

    try {
        const conference = await Conference.find();
        response.status(200).json({ conference: conference });
    } catch (error) {
        response.status(401).json({ message: error.message });
    }
};

const addConference = async (request, response) => {
    const conf = new Conference(request.body);

    console.log(conf);

    await conf.save().
    then((data) => {
        response.status(200).send({
            conf: data,
            success: true
        }).
        catch((err) => {
            console.log(err.message);
            response.status(500).send({error: err.message});
        });
    })
}

const approveConference = async (request, response) => {
    console.log(request.body);
    if(request.body.approve){
        Conference.findByIdAndUpdate(request.body.id, {
            isApproved: true
        }, (error, data) => {
            if (error) {
                console.log(error)
                return response.json({ success: false, error })
            } else {
                response.json({success: true})
                console.log('Conference updated successfully !')
            }
        })
    }else{
        Conference.findByIdAndDelete(request.body.id, function (err, docs) {
            if (err){
                return response.json({ success:false,error: err})
            }
            else{
                return response.json({ success:true})
            }
        });
    }
}

module.exports = {
    getConference,
    addConference,
    approveConference
};
