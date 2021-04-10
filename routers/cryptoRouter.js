const express = require('express');

const { getCryptos } = require('./../controllers/cryptoController');

const cryptoRouter = express.Router();

cryptoRouter.get('/', getCryptos);

module.exports = cryptoRouter;