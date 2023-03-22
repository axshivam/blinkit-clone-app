const express = require('express');

const LoginService = require('../services/login-service');

const router = express.Router();

router.get('/:email', async(req, res) => {

    const email = req.params.email;

    const service = new LoginService()
    const data = await service.Profile({ email });
    res.status(200).json({
        message: "you request response",
        data: data
    });
});


module.exports = router;