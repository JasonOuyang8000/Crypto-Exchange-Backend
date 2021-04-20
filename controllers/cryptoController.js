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
            response = await axios.get('https://api.coinranking.com/v2/coins?limit=100', {
                headers: {
                    "x-access-token": process.env.COINRANKING_API
                }
            });
    
        }

     
     
        res.json({
            message: 'ok',
            cryptos: response.data.data.coins
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


        const { coin } = response.data.data;
   
        res.json({
            message: 'ok',
            coin
        });

    }
    catch(error) {
        res.status(400).json({
            error: '400 error'
        });
    }
};

cryptoController.getCryptoHistory = async (req, res) => {

    try {
        const { id } = req.params;
        const { timePeriod } = req.query;
      
        const response = await axios.get(`https://api.coinranking.com/v2/coin/${id}/history?timePeriod=${timePeriod}`,{
            headers: {
                "x-access-token": process.env.COINRANKING_API
            }
        });

        const { change, history } = response.data.data;

        const formattedHistory = history.map(({price, timestamp})=> {
            const newTimeStamp = timestamp * 1000; 
            const newDate = new Date(newTimeStamp);

            return {
                price,
                timestamp: newDate.toLocaleString()
            }
        });
        
    
        
        res.json({
            change,
            history,
            formattedHistory
        });
    }
    catch(error) {
        res.status(400).json({
            error: '400 error'
        });
    }
    

};

module.exports = cryptoController;