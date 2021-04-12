
const { user, crypto, userCrypto } = require('../models');
const bcrypt = require('bcryptjs');
const axios = require('axios');
require('dotenv').config();

// Check All ull
(async ()=> {
    try {
        const createUser = await user.create();
        console.log(createUser);
    }   
    catch(error) {
        console.log('All null validation', error.errors.filter(e => {
            return e['validatorKey'] === 'is_null';
        }).length === 4);

    }

})();

// Check All Empty
(async ()=> {
    try {

        const createUser = await user.create({
            name: '',
            email: '',
            password: '',
            balance: '',
        });
      
    }   
    catch(error) {
        console.log('All Empty Validation', error.errors.filter(e => {
            return e['validatorKey'] === 'notEmpty';
        }).length === 4);
    }

})();

// Check All Empty
(async ()=> {
    try {

        const createUser = await user.create({
            name: '',
            email: '',
            password: '',
            balance: '',
        });
      
    }   
    catch(error) {
        console.log('All Empty Validation', error.errors.filter(e => {
            return e['validatorKey'] === 'notEmpty';
        }).length === 4);
    }

})();


//  Add cryptos
// (async() => {
//     try {
//         const response = await axios.get('https://api.coinranking.com/v2/coins', {
//             headers: {
//                 "x-access-token": process.env.COINRANKING_API
//             }
//         });
//        const {data} = response.data;
       
//        data.coins.forEach(c => {
//             const { uuid: crypto_id, iconUrl: image, symbol, name} = c;
//             crypto.create({
//                 crypto_id,
//                 image,
//                 symbol,
//                 name
//             });
//         });
//     }
//     catch(error) {
//         console.log(error);
//     }
// })();

(async() => {
    try {
        const btc = await crypto.findOne({ 
            where: {
            crypto_id: 'Qwsogvtv82FCd'
        }});

        // Get all association through eager loading.
        const userOne = await user.findOne({
            include: {
                all: true
            },
            where: {
                id: 14
            }
        });

        await userOne.addCrypto(btc);
        // const userCryptos = await userOne.getCryptos();
        const userCryptos = await userOne.getUserCryptos();

        console.log(userCryptos.amount);
        // const newCrypto = await userOne.setUserCryptos();
        
    }
    catch(error) {
        console.log(error);
    }
})();