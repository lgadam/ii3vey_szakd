const router = require("express").Router();

router.get("/usertest", (req,res)=>{
    res.send("user teszt sikeres");
});

module.exports = router