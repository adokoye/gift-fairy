const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
// const formRoutes = require('./form-routes.js');
const apiRoutes = require('./api/');


router.use('/', homeRoutes);
// router.use('/form', formRoutes);
router.use('/api', apiRoutes);

router.use((req, res) =>
{
    res.status(404).end();
    // console.log('not found');
    // console.log(req);
});

module.exports = router;