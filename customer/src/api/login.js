const express = require('express');

const LoginService = require('../services/login-service');

const router = express.Router();


router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if( !email || !password ) {
        res.status(401).json({
            error: "Please provide all mantadory fields",
        });
    }

    const service = new LoginService();

    const data = await service.Login({email, password});

    res.json(data);
});


module.exports = router;