const ctrl = require('../controllers/authController');
const express = require('express');
const router = express.Router();

router.route('/login').post(ctrl.login);

module.exports=router;



