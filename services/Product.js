
const Product = require('../models/Product')

class ProductService{
    static getProducts(){
        return Product.find()
    }

    static getProductById(productId){
        return Product.find({_id: productId})
    }

    static addProduct(product){
        return Product.create(product)
    }
}

module.exports = {
    ProductService: ProductService
}