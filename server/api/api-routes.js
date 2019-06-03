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

router.use('/auth', routers.authRoute);
router.get("/health-check", (req, res) => res.send("OK"));

//router.use("/users", routers.regRoute);
router.use("/regs", routers.regRoute);
router.use("/events", routers.eventRoute);
router.use("/auth", routers.authRoute);
router.use("/buildings", routers.bldgRoute);
router.use("/venues", routers.venueRoute);
router.use("/food-reqs", routers.foodReqRoute);
router.use("/rooms", routers.roomRoute);
router.use(handleSuccess);
module.exports = router;
