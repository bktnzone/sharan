const ctrl = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.route('/').get(ctrl.getAllUsers);
router.route('/:id').get(ctrl.getAllUsers);
       // .post(ctrl.addUser);
  //  router.route('/user     s/:id')
       // .get(ctrl.getById)
      //  .delete(ctrl.deleteUser)
       // .put(ctrl.updateUser);
   // router.route('/users/:id/apply')
        //  .get(ctrl.sampleCall);


module.exports=router;



