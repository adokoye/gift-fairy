const router = require('express').Router();
// const sequelize = require('../config/connection.js');

router.get('/', (req, res) =>
{
    res.render('main', {layout: "form"});
});

module.exports = router;