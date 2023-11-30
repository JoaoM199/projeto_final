const express = require("express")
const router = express.Router();
const { sample_products, sample_tags } = require('../data.js')

router.get('/', (req, res) => {
    res.send(sample_products);
})

router.get('/tags', (req,res) => {
    res.send(sample_tags);
})

router.get('/search/:searchTerm', (req, res) => {
    const {searchTerm} = req.params;
    const products = sample_products.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(products)
});

router.get('/tag/:tag', (req, res) => {
    const {tag} = req.params
    const products = sample_products.filter(item => item.tags?.includes(tag)
    );
    res.send(products)
})

router.get('/:productID', (req, res) => {
    const { tag } = req.params;
    const products = sample_products.filter(item => item.tags?.includes(tag));
    res.send(products)
});

module.exports = router