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

router.get('/:concertId', async (req, res) => {
    try {
        const currentUser = await User.findbyId(req.session.user._id);
        const concert = currentUser.concerts.id(req.params.concertId);
        res.render('concerts/show.ejs', {
            concert: concert,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
})
router.get('/:concertId/edit', async (req, res) => {
    try {
        const currentUser = await User.findbyId(req.session.user._id);
        const concert = currentUser.concerts.id(req.params.concertId);
        res.render('concerts/edit.ejs', {
            concert: concert,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


// POST
router.post('/', async (req, res) => {
    try {
    const currentUser = await User.findbyId(req.session.user._id);
    currentUser.concerts.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/concerts`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// DELETE
router.delete('/:concertId', async (req, res) => {
    try {
    const currentUser = await User.findbyId(req.session.user._id);
    currentUser.applications.id(req.params.applicationId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/applications`);
} catch (error) {
    console.log(error);
    res.redirect('/');
    }
});

module.exports = router;
