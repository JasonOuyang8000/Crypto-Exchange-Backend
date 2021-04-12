const { user, crypto } = require('./../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const e = require('express');

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
        const { username, email, password, balance } = req.body;
        
        if (password.length < 5 ) {
            throw new Error('Password needs to be at least 5 characters long');
        }
        
        const hashedPassword = bcrypt.hashSync(password, 10);

        const createdUser = await user.create({
            username,
            email,
            password: hashedPassword,
            balance
        });

        const userToken = jwt.sign({ id: createdUser.id }, process.env.SECRET);

        res.status(201).json({
            message: 'ok',
            userToken
        });
    }

    catch(error) {
        const errorMessage = error.errors ? error.errors[0].message : error.message;
        res.status(400).json({
            error: errorMessage
        });
    };
};

userController.login = async (req, res, next) => {
    try {   
        const { username, password } = req.body; 

        const findUser = await user.findOne({
            where: {
                username
            }
        });
        
        if (findUser === null) throw new Error('Username Not Found!!');

        if (bcrypt.compareSync(password, findUser.password)) {
            const userToken = jwt.sign({ id: findUser.id }, process.env.SECRET);
            res.json({
                message: 'ok',
                userToken
            });
        } 
        else {
            res.status(401).json({
                error: 'Password is incorrect!'
            });
        }
    }
    catch(error) {  
        res.status(400).json({
            error: error.message
        });
    }
};

userController.verifyUser = async (req, res, next) => {
    try {
        const { usertoken } = req.headers;
        const { id } = jwt.verify(usertoken, process.env.SECRET);
        
        const userFind = await user.findOne({
            where: {
                id
            }
        });

        if (userFind !== null) {
            res.json({
                message: 'ok'
            });
        }
        else {
            res.status(401).json({
                error: 'User does not exist anymore!'
            });
        }
    }
    catch(error) {
       res.status(401).json({
           error: 'Your  User Token has been tampered!'
       });
    }
}

userController.userTransaction = async (req, res, next) => {
    try {
        const { usertoken } = req.headers;
        const { id } = jwt.verify(usertoken, process.env.SECRET);
        const { cryptoId, dollarAmount, coinAmount, type } = req.body;

        const userFind = await user.findOne({
            where: id
        });

        const cryptoFind = await crypto.findOne({
            where: {
                crypto_id: cryptoId
            }
        });

        // console.log(cryptoFind, userFind);
        
        if ( type === 'buy') {
            if (userFind.balance < dollarAmount) res.status(401).json({ error: 'Not Enough Money'});

            await userFind.addCrypto(cryptoFind);
            
            const [userCrypto] = await userFind.getUserCryptos({
                where: {
                    userId: userFind.id,
                    cryptoId: cryptoFind.id
                }
            });

           userFind.balance -= dollarAmount;
           userFind.save();
           
           if (userCrypto.amount) {
              userCrypto.increment('amount', {by: coinAmount});
           }
           else {
              userCrypto.amount = coinAmount;
              userCrypto.save();
           }

            res.json({
                message: 'ok'
            });

        }

        else {
            
        }

    }
    catch(error) {
        res.status(400).json({
            error: 'Something Wrong Happpened'
        })
    }
};





module.exports = userController;