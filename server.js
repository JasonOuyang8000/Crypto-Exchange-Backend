const express = require('express');
const rowdy = require('rowdy-logger');
const userRouter = require('./routers/userRouter');
const cryptoRouter = require('./routers/cryptoRouter');
const { findUser } = require('./middlewears/findUser');
require('dotenv').config();


const app = express();

const port = process.env.PORT || 3001;


const rowdyReporter = rowdy.begin(app);

app.use(express.json());
app.use(require('cors')());




app.use(findUser);

app.use('/users', userRouter);
app.use('/cryptos', cryptoRouter);

app.listen(port, () => {
    console.log('starting server');
    rowdyReporter.print();
});


