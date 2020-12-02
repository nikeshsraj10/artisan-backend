
const Product = require('../models/Product')

class ProductService{
    static getProducts(){
        return Product.find()
    }

    static getProductById(productId){
        return Product.findById({product: productId})
    }
}

module.exports = {
    ProductService: ProductService
}