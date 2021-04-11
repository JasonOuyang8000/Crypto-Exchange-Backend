const express = require('express');

const { getCryptos, getOneCryptoById, get } = require('./../controllers/cryptoController');

const cryptoRouter = express.Router();

cryptoRouter.get('/', getCryptos);
cryptoRouter.get('/:id', getOneCryptoById);


module.exports = cryptoRouter;