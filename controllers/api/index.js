const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// const wishlistRoutes = require('./wishlist-routes.js');
const wishitemRoutes = require('./wishitem-routes.js');

router.use('/users', userRoutes);
// router.use('/list', wishlistRoutes);
router.use('/items', wishitemRoutes);

module.exports = router; 