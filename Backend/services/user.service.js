const Admin = require('../models/admins.model');
const Attendee = require('../models/attendee.model');
const Presenter = require('../models/presenter.model')
const Researcher = require('../models/researcher.model')

const createAdmins = async (req, res) => {
    const admin = new Admin({
        name: 'admin',
        username: 'admin',
        password: 'admin123',
        isAdmin: true,
        isEditor: false,
        isReviewer: false
    });

    const editor = new Admin({
        name: 'editor',
        username: 'editor',
        password: 'editor123',
        isAdmin: false,
        isEditor: true,
        isReviewer: false
    });

    const reviewer = new Admin({
        name: 'reviewer',
        username: 'reviewer',
        password: 'reviewer123',
        isAdmin: false,
        isEditor: false,
        isReviewer: true
    });

    let adminData, editorData, reviewerData;

    await admin.save().then((data) => {
        adminData = data;
    }).
        catch((err) => adminData = err.message);

    await editor.save().then((data) =>{
        editorData = data;
    }).
        catch((err) => editorData = err.message)

    await reviewer.save().then((data) =>{
        reviewerData = data;
    }).
        catch((err) => reviewerData = err.message);

    const dataToSend = {
        admin: adminData,
        editor: editorData,
        reviewer: reviewerData
    }

    res.status(200).send(dataToSend);
}

const createUser = async (req, res) => {
    const user = req.body;

    if(user && user.isResearcher){
        const researcher = new Researcher(user);

        await researcher.save().then((data) => res.status(200).
        send({
            success:true,
            user: data
        })).catch((err) => res.status(500).send(err.message))

    }else if(user && user.isPresenter){
        const presenter = new Presenter(user);

        await presenter.save().then((data) => res.status(200).
        send({
            success:true,
            user:data
        })).catch((err) => res.status(500).send(err.message))
    }else{
        const attendee = new Attendee(user);

        await attendee.save().then((data) => res.status(200).
        send({
            success:true,
            user:data
        })).catch((err) => res.status(500).send(err.message))
    }
}

const login = async (req, res) => {
    console.log(req.body);
    await Admin.findOne({ username: req.body.username }).then((data) => {
        if(req.body.password === data.password){
            res.status(200).send({
                success: true,
                message: 'Login success',
                user: data
            })
        } else{
            res.status(500).send({
                success: false,
                message: 'Invalid password'
            })
        }
    }).catch(async () =>{
       await Attendee.findOne({ username: req.body.username }).then((data) => {
           if(req.body.password === data.password){
               res.status(200).send({
                   success: true,
                   message: 'Login success',
                   user: data
               })
           } else{
               res.status(500).send({
                   success: false,
                   message: 'Invalid password'
               })
           }
       }).catch(async () => {
           await Presenter.findOne({ username: req.body.username }).then((data) => {
               if(req.body.password === data.password){
                   res.status(200).send({
                       success: true,
                       message: 'Login success',
                       user: data
                   })
               } else{
                   res.status(500).send({
                       success: false,
                       message: 'Invalid password'
                   })
               }
           }).catch(async ()=>{
               await Researcher.findOne({ username: req.body.username }).then((data) => {
                   if(req.body.password === data.password){
                       res.status(200).send({
                           success: true,
                           message: 'Login success',
                           user: data
                       })
                   } else{
                       res.status(500).send({
                           success: false,
                           message: 'Invalid password'
                       })
                   }
               }).catch((err) => {
                   res.status(500).send({
                       success: false,
                       message: 'Invalid User',
                       error: err.message
                   })
               })
           })
       })
    })
}

module.exports = {
    login,
    createUser,
    createAdmins
}
