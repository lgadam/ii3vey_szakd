const router = require("express").Router();

router.get("/usertest", (req,res)=>{
    res.send("user teszt sikeres");
});

router.post("/userposttest", (req,res)=>{
    const username = req.body.username
    console.log(username);
    res.send("felhasználóneved: "+username)
});
module.exports = router