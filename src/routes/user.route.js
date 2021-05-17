const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// get all users
router.get('/', userController.getUserList);

// get user by ID
router.get('/:userId',userController.getUserByID);

// create new user
router.post('/', userController.createNewUser);

// update user
router.put('/:userId', userController.updateUser);

// delete uer
router.delete('/:userId',userController.deleteUser);

module.exports = router;