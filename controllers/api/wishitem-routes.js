const router = require('express').Router();
const { Wishitem } = require('../../models');

router.get('/', (req, res) =>
{
    Wishitem.findAll(
    {
        attributes: ['itemName']
    })
    .then(dbItemData => res.json(dbItemData))
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) =>
{
    Wishitem.findOne(
    {
        where:
        {
            id: req.params.id
        },
        attributes: ['itemName']
    })
    .then(dbItemData => res.json(dbItemData))
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) =>
{
    Wishitem.create(
    {
        user_id: req.body.user_id,
        brand_name: req.body.brand_name,
        item_name: req.body.item_name
    })
    .then(dbItemData => 
    {
        res.json({'id': dbItemData['dataValues']['id']});
        console.log(dbItemData['dataValues']['id']);
    })
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) =>
{
    Wishitem.update(
    {
        itemName: req.body.itemName
    },
    {
        where:
        {
            id: req.params.id
        }
    })
    .then(dbItemData => 
    {
        if (!dbItemData) 
        {
            res.status(404).json({ message: 'No item found with this id' });
            return;
        }
        res.json(dbItemData);
    })
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) =>
{
    Wishitem.destroy(
    {
        where:
        {
            id: req.params.id
        }
    })
    .then(dbItemData => 
    {
        if (!dbItemData) 
        {
            res.status(404).json({ message: 'No item found with this id' });
            return;
        }
        res.json(dbItemData);
    })
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;