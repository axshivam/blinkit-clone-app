const express = require('express');

const router = express.Router();

const CustomerService = require('../services');

const auth = require('./middleware/auth');



router.post('/signup', async (req, res) => {
    const { name, email, username, password } = req.body;

    if(!name || !email || !username || !password ) {
        res.status(401).json({
            error: "Please fill all mantadory fields",
        }); 
    }

    const service = new CustomerService();

    const data = await service.Signup({name, email, username, password});

    res.status(200).json(data);
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if( !email || !password ) {
        res.status(401).json({
            error: "Please provide all mantadory fields",
        });
    }

    const service = new CustomerService();

    const data = await service.Login({email, password});

    res.json(data);
});


router.post('/address', auth, async(req, res) => {
    const { address_line_1, city, state, country, pinCode} = req.body;

    if(!address_line_1 || !city || !state || !country || !pinCode) {
        res.status(403).send('Please provide all mandatory fields');
    }

    const email = req.customer.email;

    const service = new CustomerService();

    const data = await service.AddAddress({ email, address_line_1, city, state, country, pinCode });

    
    res.status(201).json({
        data
    });
});

router.get('/profile', auth, async(req, res) => {

    const email = req.customer.email;

    const service = new CustomerService()
    const data = await service.Profile({ email });
    res.status(200).json({
        message: "you request response",
        data: data
    });
});


router.get('/health', (req, res) => {
    let current = new Date();
    res.status(200).json({
        responseCode: 200,
        message: 'Customer service is working well',
        time: current.toLocaleTimeString() + ' ' + current.toLocaleDateString(),
    });
});

module.exports = router;