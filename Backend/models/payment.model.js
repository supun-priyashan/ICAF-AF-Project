const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        trim: true
    },
    price:{
        type: Number,
        require:true
    },
    type:{
        type: String,
        require:true,
        trim: true
    },
    date:{
        type:String,
        require: true,
        default: Date.now
    }
})

const Payment = mongoose.model("Payments", paymentSchema);

module.exports = Payment;
