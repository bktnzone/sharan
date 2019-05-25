const ctrl = require('../controllers/buildingController');
const express = require('express');
const router = express.Router();

router.route('/')
     .get(ctrl.getList)
     .post(ctrl.add);
router.route('/:id')
     .get(ctrl.getById)
     .put(ctrl.update)
     .delete(ctrl.delete);

module.exports=router;



