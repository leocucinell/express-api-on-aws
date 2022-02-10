const express = require('express');
const router = express.Router();
const ctrl = require('../controllers'); //methods relating to the products

//methods, all start with: /users
router.get('/:id', ctrl.users.getUser);
router.put('/update/:id', ctrl.users.updateUser);
router.post('/new', ctrl.users.createUser);
router.delete('/delete/:id', ctrl.users.deleteUser);
router.post('/signin', ctrl.users.logUserIn);

//exports
module.exports = router