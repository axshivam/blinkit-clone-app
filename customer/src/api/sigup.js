const express = require('express');

const SignupService = require('../services/signup-service');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, username, password } = req.body;

    if(!name || !email || !username || !password ) {
        res.status(401).json({
            error: "Please fill all mantadory fields",
        }); 
    }

    const service = new SignupService();

    const data = await service.Signup({name, email, username, password});

    res.status(200).json(data);
});


module.exports = router;