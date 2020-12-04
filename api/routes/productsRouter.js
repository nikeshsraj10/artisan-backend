const router = require('express').Router()
const ProductController = require('../../controllers/Product').ProductController

// @desc get all products
// @route GET 
router.get('/', ProductController.getProducts)

// @desc Get Product given productId
// @route GET /:productId
router.get('/:productId', ProductController.getProductById)

// @desc Create the product
// @route POST /create
router.post('/create', ProductController.addProduct)

module.exports = router