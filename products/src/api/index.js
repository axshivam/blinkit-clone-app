const express = require('express');

const router = express.Router();

const ProductService = require('../services');

router.post('/product/create', async(req, res) => {
    const { name, desc, banner, type, unit, price, available, supplier } = req.body;

    const service = new ProductService();

    const data = await service.createProduct({ name, desc, banner, type, unit, price, available, supplier });

    res.status(201).json({
        statusCode: data.statusCode,
        message: data.message,
        error: data.error,
    });
});

router.get('/category/:type', async (req, res) => {
    const type = req.params.type;

    console.log(type);
    const service = new ProductService();

    const data = await service.getProductsByType({ type });

    res.status(200).json({
        statusCode: data.statusCode,
        message: data.message,
        error: data.error
    });
});

router.get('/product/:id', async (req, res) => {
    const id = req.params.id;

    const service = new ProductService();

    const data = await service.getProductById({ id });

    res.status(200).json({
        statusCode: data.statusCode,
        message: data.message,
        error: data.error,
    });
});


router.get('/health', (req, res) => {
    let current = new Date;

    res.status(200).json({
        responseCode: 200,
        message: 'Product service working well',
        time: current.toLocaleTimeString() + ' ' + current.toLocaleDateString(),
    });
});


module.exports = router;