import { Router } from "express";
import { sample_products, sample_tags } from "../data.js";

const router = Router();

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

export default router;


/*
No frontend:

sample_products.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
*/