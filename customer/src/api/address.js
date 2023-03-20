const express = require('express');

const AddressService = require('../services/address-service');
const router = express.Router();

router.post('/', async(req, res) => {
    const { id, address_line_1, city, state, country, pinCode} = req.body;

    const service = new AddressService();

    const data = await service.AddAddress({ id, address_line_1, city, state, country, pinCode });

    
    res.status(201).json({
        data
    });
});

module.exports = router;