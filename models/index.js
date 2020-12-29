const User = require('./User.js');
const Wishitem = require('./Wishitem.js');

// create associations
User.hasMany(Wishitem,
{
    foreignKey: 'user_id'
});

Wishitem.belongsTo(User,
{
    foreignKey: 'user_id'
});

module.exports = { User, Wishitem };