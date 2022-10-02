const User = require("../models/User");
const { verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//Update

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWD_SECRT
      ).toString();
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Delete

router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
  try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Felhasználó kitörölve");
  }catch(err){
    res.status(500).json(err);
  }
});

//Find id

router.get("/find/:id", verifyTokenAndAdmin, async (req,res)=>{
  try{
    const user = await User.findById(req.params.id);
    const { password, ...others} = user._doc;

    res.status(200).json({others});
  }catch(err){
    res.status(500).json(err);
  }
});

//Find all id

router.get("/", verifyTokenAndAdmin, async (req,res)=>{
  try{
    const query = req.query.new; //legújabb 3 felhasználó megtalálása find() -> minden felhasználót megtalál
    const users = query ? await User.find().sort({ _id: -1}).limit(3) : await User.find(req.params.id); 
    res.status(200).json(users);
  }catch(err){
    res.status(500).json(err);
  }
});


module.exports = router;