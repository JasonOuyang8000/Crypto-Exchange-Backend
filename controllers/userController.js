const { user } = require('./../models');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
        const { name, email, password, balance } = req.body;
        
        if (password.length < 5 ) {
            throw new Error('Password needs to be at least 5 characters long');
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const createdUser = await user.create({
            name,
            email,
            password: hashedPassword,
            balance
        });

        res.status(201).json({
            message: 'ok',
            user: createdUser
        });

    }
    catch(error) {
        res.status(400).json({
            error: error.message
        });
    };
};



module.exports = userController;