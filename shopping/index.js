const express = require('express');

require('dotenv').config();

const app = express();

const port = process.env.PORT | 4003;

// middlewares
app.use(express.json());

app.use('/', (req, res) => {
    return res.json({
        message: 'hello from the shopping service'
    });
});

app.listen(port, (err) => {
    if(err) {
        console.log(`Facing issue in starting server: ${err}`);
    } else {
        console.log(`shopping service is listening at port ${port}`);
    }
});