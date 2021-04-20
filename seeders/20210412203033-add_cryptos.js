'use strict';
const axios = require('axios');
require('dotenv').config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const response = await axios.get('https://api.coinranking.com/v2/coins?limit=100', {
                  headers: {
                      "x-access-token": process.env.COINRANKING_API
                  }
              });

      const {data} = response.data;

      const coins = data.coins.map(c => {
        const { uuid: crypto_id, iconUrl: image, symbol, name} = c;

        return ({
          crypto_id,
          image,
          symbol,
          name,
          createdAt: new Date(),
          updatedAt: new Date() 
        });
      });

    await queryInterface.bulkInsert('cryptos', coins , {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('cryptos', null, {});
  }
};
