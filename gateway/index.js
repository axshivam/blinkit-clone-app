const express = require('express');

const cors = require('cors');

const proxy = require('express-http-proxy');

require('dotenv').config();

const app = express();

const port = process.env.PORT | 4000;




// middlewares
app.use(cors());
app.use(express.json());

app.use('/customer', proxy('http://localhost:4001/'));
app.use('/shopping', proxy('http://localhost:4003/'));
app.use('/', proxy('http://localhost:4002/'));


app.listen(port, (err) => {
    if(err) {
        console.log(`Facing issue in starting server: ${err}`);
    } else {
        console.log(`gateway service is listening at port ${port}`);
    }
});
