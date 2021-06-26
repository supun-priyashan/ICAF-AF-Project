const mongoose = require('mongoose');

const researcherSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true,trim: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true, trim: true },
    university: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true }
})

const Researcher = mongoose.model('Researcher', researcherSchema);

module.exports = Researcher;
