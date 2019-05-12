const express = require("express")
const router = express.Router()

const users = require("./users");
const notes = require("./notes");

router.use( "/users", users)
router.use( "/notes", notes)

module.exports = router;
