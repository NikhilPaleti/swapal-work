const express = require("express");
const config = require('../.private_config');
const Razorpay = require("razorpay");
const cors = require("cors");


const { PORT, RZPAY_SECRET, RZPAY_ID} = config;
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors);

app.post("\order", async (req,res) => {
    try {
        const razorpay = new  Razorpay({
            key_id: RZPAY_ID,
            key_secret: RZPAY_SECRET
        });
    
        const options = req.body;
        const order = await razorpay.orders.create(options);
    
        if(!order) {
            return res.status(500).send("Error");
        }
    
        res.json(order);
    }
    catch (err){
        console.log(err);
        res.status(500).send("Error");
    }
    

});

app.listen(PORT, () => {
    console.log("listening on port", PORT);
})