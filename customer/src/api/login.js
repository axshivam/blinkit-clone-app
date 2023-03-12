const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {
    res.json({
        message: 'you are in the sign up page',
    });
});


module.exports = router;