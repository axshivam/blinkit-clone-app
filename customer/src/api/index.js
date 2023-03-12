const express = require('express');

const router = express.Router();


router.use('/signup', require('./sigup'));

router.use('/login', require('./login'));

module.exports = router;