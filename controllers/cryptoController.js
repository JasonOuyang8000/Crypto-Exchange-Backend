const axios = require('axios');
const e = require('express');

const cryptoController = {};

cryptoController.getCryptos = async (req, res, next) => {
    try {
        let response = null;

        if (req.query.hasOwnProperty('q')) {
            response = await axios.get(`https://api.coinranking.com/v2/search-suggestions?query=${req.query.q}`, {
                headers: {
                    "x-access-token": process.env.COINRANKING_API
                }
            });
        }
        else {
            response = await axios.get('https://api.coinranking.com/v2/coins', {
                headers: {
                    "x-access-token": process.env.COINRANKING_API
                }
            });
    
        }
     
        res.json({
            message: 'ok',
            cryptos: response.data
        });

    }
    catch(error) {
        res.status(400).json({
            error:  '400 Error'
        });
    }
};

cryptoController.getOneCryptoById = async (req, res, next) => {
    try {
        

        const response = await axios.get(`https://api.coinranking.com/v2/coin/${req.params.id}`, {
            headers: {
                "x-access-token": process.env.COINRANKING_API
            }
        });
    
        res.json({
            message: 'ok'
        });

    }
    catch(error) {
        res.status(400).json({
            error: '400 error'
        });
    }
};

module.exports = cryptoController;