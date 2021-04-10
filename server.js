const express = require('express');
const rowdy = require('rowdy-logger');
const userRouter = require('./routers/userRouter');
require('dotenv').config();


const app = express();

const port = process.env.PORT || 3001;


const rowdyReporter = rowdy.begin(app);

app.use(express.json());
app.use(require('cors')());


app.use('/user', userRouter);

app.listen(port, () => {
    console.log('starting server');
    rowdyReporter.print();
});


