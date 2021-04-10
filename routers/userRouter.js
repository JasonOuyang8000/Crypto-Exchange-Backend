const express = require('express');
const user = require('../models/user');
const { createUser, login } = require('./../controllers/userController');
const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.post('/login', login);


module.exports = userRouter;