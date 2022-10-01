const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//regisztráció
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASSWD_SECRT).toString(),
    });
    try{
        const savedUser = await newUser.save(); // save method használata az adatbázisba mentéshez.
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err);
    }
});
//bejelentkezés
router.post("/login", async (req,res) =>{
    try{
        const user = await User.findOne({ username: req.body.username });
        if(!user) return res.status(401).json("Helytelen adatok");
        const HashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASSWD_SECRT
        );
        const OriginalPwd = HashedPassword.toString(CryptoJS.enc.Utf8);
        if(OriginalPwd !== req.body.password) return res.status(401).json("Helytelen adatok");

        const accessToken = jwt.sign(
        {
            id:user._id,
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SECRT,
        {expiresIn:"3d"});
        
        const { password, ...others} = user._doc;

        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err);    
    }
     
})

module.exports = router;