const express = require('express');

const { getCryptos, getOneCryptoById, getCryptoHistory } = require('./../controllers/cryptoController');

const cryptoRouter = express.Router();

cryptoRouter.get('/', getCryptos);
cryptoRouter.get('/:id', getOneCryptoById);
cryptoRouter.get('/:id/history', getCryptoHistory);


module.exports = cryptoRouter;