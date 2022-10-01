const jwt = require("jsonwebtoken");

const tokenVerify = (req,ews,next) => {
    const authHeader = req.headers.token;
    if(authHeader){
        jwt.verify(token, process.env.JWT_SECRT, (err,user)=>{
            if(err) return res.status(403).json("A token nem hiteles");
            req.user = user;
            next();
        })
    } else{
        return res.status(401).json("Nincs hitelesítve a fiókod még");
    }
};

module.exports = {tokenVerify};