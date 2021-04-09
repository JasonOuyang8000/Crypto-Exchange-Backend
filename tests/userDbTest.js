
const { user } = require('../models');
const bcrypt = require('bcryptjs');
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

//  Checks password length
(async ()=> {
    try {
        console.log( bcrypt.hashSync('12345', 5).length)
        const createUser = await user.create({
            name: 'test',
            email: 'test@mail.com',
            password: '1234',
            balance: 5000,
        });
        console.log(createUser);
   
      
    }   
    catch(error){
     
        console.log("Less than 5 throws error",error.errors[0]['validatorKey'] === 'len');

    }

})();

(async ()=> {
    try {

        const createUser = await user.create({
            name: 'test',
            email: 'test@mail.com',
            password: '1234132131231231231221312asdsadasdsadsadsadsas',
            balance: 5000,
        });

   
      
    }   
    catch(error){

        console.log("Greater than 20 throws error",error.errors[0]['validatorKey'] === 'len' );

    }

})();

//  Checks email 
(async ()=> {
    try {

        const createUser = await user.create({
            name: 'tew',
            email: 'ted=',
            password: '123413213',
            balance: 5000,
        });

   
      
    }   
    catch(error){
    
        console.log("Throws error if not valid email",error.errors[0]['validatorKey'] === 'isEmail' );

    }

})();

//  Checks  balance
(async ()=> {
    try {

        const createUser = await user.create({
            name: 'ted',
            email: 'ted@gmail.com',
            password: '123413213',
            balance: 4000,
        });

   
      
    }   
    catch(error){
    
        console.log("Throws error if didn't reach min",error.errors[0]['validatorKey']  === 'min');

    }

})();

(async ()=> {
    try {

        const createUser = await user.create({
            name: 'ted',
            email: 'ted@gmail.com',
            password: '123413213',
            balance: 400000,
        });

   
      
    }   
    catch(error){
    
        console.log("Throws error if passed max",error.errors[0]['validatorKey']  === 'max');

    }

})();

