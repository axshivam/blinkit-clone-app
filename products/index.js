const express = require('express');

require('dotenv').config();

const app = express();

const port = process.env.PORT | 4002;

// middlewares
app.use(express.json());

app.use('/api', require('./src/api/index'));

app.listen(port, (err) => {
    if(err) {
        console.log(`Facing issue in starting server: ${err}`);
    } else {
        console.log(`products service is listening at port ${port}`);
    }
});