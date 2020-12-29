const router = require('express').Router();
const { User, Wishitem } = require('../models');

// const sequelize = require('../config/connection.js');

router.get('/', (req, res) =>
{
    res.render('main', {layout: "index", loggedin: req.session.loggedin, id: req.session.user_id});
});

router.get('/register', (req, res) =>
{
    if(req.session.loggedin)
    {
        res.render('main', {layout: 'index', loggedin: req.session.loggedin, id: req.session.user_id});
    }
    else
    {
        res.render('main', {layout: "form", loggedin: req.session.loggedin});
    }
});

router.get('/login', (req, res) =>
{
    if(req.session.loggedin)
    {
        res.render('main', {layout: 'index', loggedin: req.session.loggedin, id: req.session.user_id});
    }
    else
    {
        res.render('main', {layout: 'loginform', loggedin: req.session.loggedin});
    }
});

router.get('/list', (req, res) =>
{
    User.findOne(
    {
        where:
        {
            id: req.session.user_id
        },
        include:
        {
            model: Wishitem,
            attributes:['id', 'brand_name', 'item_name']
        }
    })
    .then(dbUserData =>
    {
        if (!dbUserData) 
        {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        // serialize the data
        const data = dbUserData.get({ plain: true });
        console.log(data);

        // pass data to template
        res.render('main', {layout: 'fullwishlist', data});
    })
    .catch(err =>
    {
        console.log(err);
        res.render('main', {layout: 'index', loggedin: req.session.loggedin, id: req.session.user_id});
    });
});

router.get('/list/:id', (req, res) =>
{
    User.findOne(
    {
        where:
        {
            id: req.params.id
        },
        include:
        {
            model: Wishitem,
            attributes:['id', 'brand_name', 'item_name']
        }
    })
    .then(dbUserData =>
    {
        if (!dbUserData) 
        {
            res.render('main', {layout: 'index', loggedin: req.session.loggedin, id: req.session.user_id});
            return;
        }

        // serialize the data
        const data = dbUserData.get({ plain: true });
        // console.log(data);
        // console.log(data.full_name);

        // pass data to template
        res.render('main', {layout: 'staticwishlist', data, loggedin: req.session.loggedin});
    })
    .catch(err =>
    {
        console.log(err);
        res.render('main', {layout: 'index', loggedin: req.session.loggedin, id: req.session.user_id});
    });
});

module.exports = router;