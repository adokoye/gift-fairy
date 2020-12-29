const { Wishitem } = require('../models'); 

const withItemData = 
[
    {
        id: '1',
        item_name: "Shoes",
        user_id: "1",
        brand_name: "Reebok",
        category: "Shoes"
    },
    {
        id: '4',
        item_name: "Shoes",
        user_id: "1",
        brand_name: "Asics",
        category: "Shoes"
    },
    {
        id: '2',
        item_name: "Shirt",
        user_id: "2",
        brand_name: "Addidas",
        category: "Pants"
    },
    {
        id: '3',
        item_name: "Pants",
        user_id: "3",
        brand_name: "Nike",
        category: "Shoes"
    }
];

const seedWishListItem = () => Wishitem.bulkCreate(withItemData); 

module.exports = seedWishListItem; 