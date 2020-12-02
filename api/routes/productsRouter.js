const router = require('express').Router()
const ProductController = require('../../controllers/Product').ProductController

// @desc get all products
// @route GET 
router.get('/', async (req, res) => {
    try{
        /* @TODO: Get products here */
        const products = await ProductController.getProducts(req.params)
        return res.status(200).json(products)    
    }catch(err){
        console.error(err);
        return res.status(500).json(err)
    }
})

router.get('/:productId', async (req, res) => {
    try{
        /* @TODO: Get products here */
        const product = await ProductController.getProductById(req.params)
        return res.status(200).json(product)    
    }catch(err){
        console.error(err);
        return res.status(500).json(err)
    }
})

// @desc Create the product
// @route POST /create

router.post('/create', async (req, res) => {
    try{
        console.log(req.body)
    }catch(err){
        console.err(err)
        return res.status(500).json(err)
    }
})

module.exports = router