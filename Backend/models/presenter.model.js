const mongoose = require('mongoose');

const presenterSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true,trim: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true, trim: true },
    university: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true }
})

const Presenter = mongoose.model('Presenter', presenterSchema);

module.exports = Presenter;
