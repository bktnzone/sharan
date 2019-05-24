const express = require("express");
const routers = require("./routes");
const router = express.Router(); // eslint-disable-line new-cap

const handleSuccess = (req, res, next) => {
  if (req.err) {
    next(req.err);
  } else {
    if (req.data) {
      return res.json({ token: req.token, data: req.data });
      next();
    }
    return next();
  }
};

router.get("/health-check", (req, res) => res.send("OK"));

console.log(routers);
//router.use('/auth', routers.authRoute);
router.use("/users", routers.regRoute);
router.use("/regs", routers.regRoute);
router.use("/auth", routers.authRoute);



router.use(handleSuccess);
module.exports = router;
