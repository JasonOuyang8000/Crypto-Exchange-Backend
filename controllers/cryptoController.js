const axios = require('axios');

const cryptoController = {};

cryptoController.getCryptos = async (req, res, next) => {
    try {
        const response = await axios.get('https://api.coinranking.com/v2/coins', {
            headers: {
                "x-access-token": process.env.COINRANKING_API
            }
        });

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

cryptoController.getOneCrypto = async (req, res, next) => {
    try {
        

        const response = await axios.get(`https://api.coinranking.com/v2/coin/${req.params.id}`, {
            headers: {
                "x-access-token": process.env.COINRANKING_API
            }
        });
    
        res.json({
            message: 'ok',
            crypto: response.data
        });

    }
    catch(error) {
        res.status(400).json({
            error: '400 error'
        });
    }
};

module.exports = cryptoController;