const express = require('express');

const router = express.Router();

router.get('/health', (req, res) => {
    let current = new Date;

    res.status(200).json({
        responseCode: 200,
        message: 'Product service working well',
        time: current.toLocaleTimeString() + ' ' + current.toLocaleDateString(),
    });
});


module.exports = router;