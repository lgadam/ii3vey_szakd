const { tokenVerify } = require("./tokenVerify");

const router = require("express").Router();

router.put("/:id", tokenVerify)
module.exports = router