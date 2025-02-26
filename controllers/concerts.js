const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// GET
router.get('/', (req, res) => {
    try {
        res.render('concerts/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/new', async (req, res) => {
    res.render('concerts/new.ejs');
});


module.exports = router;
