const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{ type: String },
    username: { type: String, required: true},
    password: { type: String, required: true},
    type: { type: String, required: true}
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

//admin model- Shakey
