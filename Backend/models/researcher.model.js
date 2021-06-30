const mongoose = require('mongoose');

const researcherSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true,trim: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true, trim: true },
    university: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    isResearcher: { type: Boolean, required:true, default: false}
})

const Researcher = mongoose.model('Researcher', researcherSchema);

module.exports = Researcher;
