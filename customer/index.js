const express = require('express');

require('dotenv').config();

const app = express();

const port = process.env.PORT | 4001;

// middlewares
app.use(express.json());

app.use('/api', require('./src/api/index'));

app.get('/', (req, res) => {
    return res.json({
        message: 'hello from the customer service'
    });
});

app.listen(port, (err) => {
    if(err) {
        console.log(`Facing issue in starting server: ${err}`);
    } else {
        console.log(`customer service is listening at port ${port}`);
    }
});