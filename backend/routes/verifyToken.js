const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRT, (err, user) => {
        if (err) res.status(403).json("A token nem valós");
        req.user = user;
        next();
      });
    }else {
      return res.status(401).json("A felhasználó nincs hitelesítve");
    }
  };
  
  const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      }else {
        res.status(403).json("Nincs jogosultság a következő műveletekhez");
      }
    });
  };
  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      }else {
        res.status(403).json("Nincs jogosultság a következő műveletekhez");
      }
    });
  };

module.exports = {verifyTokenAndAdmin,verifyToken,verifyTokenAndAuthorization};