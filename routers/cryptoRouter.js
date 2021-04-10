const express = require('express');

const { getCryptos, getOneCrypto } = require('./../controllers/cryptoController');

const cryptoRouter = express.Router();

cryptoRouter.get('/', getCryptos);
cryptoRouter.get('/:id', getOneCrypto);

module.exports = cryptoRouter;