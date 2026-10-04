const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('User Home');
});

router.get('/login', (req, res) => {
    res.send('User Login');
});

router.get('/register', (req, res) => {
    res.send('User Register');
});

module.exports = router;