const ctrl = require('../controllers/roomController');
const express = require('express');
const router = express.Router();

router.route('/')
     .get(ctrl.getAll)
router.route('/allotments')
     .get(ctrl.getAllotments)
     .post(ctrl.saveAllotment);
router.route('/:id(\\d+)')
     .get(ctrl.getAll)
     .post(ctrl.update)
     .delete(ctrl.delete);

module.exports=router;



