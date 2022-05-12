const express = require("express");
const router = express.Router();

const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept",
    //3 - 1107pm 
    "Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers', 'X-Requested-With,content-type",
    "Access-Control-Allow-Credentials', true"
  );
  next();
});

router.post("/signup", controller.signup);
router.post("/signin", controller.signin);

module.exports = router;