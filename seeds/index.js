seedUsers = require('./user-seed.js');
// seedWishlist = require('./wishlist-seed.js');
seedWishitem = require('./wishItem-seed.js');

const sequelize = require('../config/connection.js');

const seedAll = async () =>
{
    await sequelize.sync({ force: true });
    console.log('/n----- DATABASE SYNCED -----/n');

    await seedUsers();
    console.log('/n----- USERS SEEDED ------/n');

    // await seedWishlist();
    // console.log('/n----- WISHLISTS SEEDED -----/n');

    await seedWishitem();
    console.log('/n----- WISHITEMS SEEDED -----/n');

    process.exit(0);
}

seedAll();