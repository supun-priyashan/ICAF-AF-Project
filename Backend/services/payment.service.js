const Payment = require('../models/payment.model')

const addPayment = async( req,res ) => {
    const payment = new Payment({
        name: req.body.name,
        type:req.body.type
    })
    try{
        await payment.save()
        res.status(201).json({message:"payment successful"})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const getPayments = async(req,res) => {
    try{
        const allPayments = await Payment.find()
        res.status(200).json(allPayments)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {addPayment, getPayments }