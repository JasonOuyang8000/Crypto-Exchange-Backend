const express = require('express');
const user = require('./../models/user');
const { createUser, login, verifyUser, userTransaction, getCryptosFromUser } = require('./../controllers/userController');
const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.post('/login', login);
userRouter.get('/verify', verifyUser);
userRouter.put('/cryptos', userTransaction);
userRouter.get('/cryptos', getCryptosFromUser);

module.exports = userRouter;