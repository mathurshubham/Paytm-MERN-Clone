const express = require('express');
const { default: mongoose } = require('mongoose');
const { authMiddleware } = require('../middleware');
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) =>{
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authMiddleware, async(req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to} = req.body;

    // Fetch the accounts within the transaction

    const account = await Account.findOne({ userId: req.userId}).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({userId: to}).session(session);

})

module.exports = router;