const router = require("express").Router();
const User = require("../models/User");
const dotenv = require("dotenv");
const crypto_js = require("crypto-js");
//regisztráció
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: crypto_js.AES.encrypt(req.body.password,process.env.PASSWD_SECRT).toString(),
    });
    try{
        const savedUser = await newUser.save(); // save method használata az adatbázisba mentéshez.
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;