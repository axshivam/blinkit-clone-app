const express = require('express');

const router = express.Router();


router.use('/signup', require('./sigup'));

router.use('/login', require('./login'));

router.use('/address', require('./address')); 

router.use('/profile', require('./profile'));

module.exports = router;