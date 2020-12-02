const ProductService = require('../services/Product').ProductService

class Product {
    static async getProducts(){
        try{
            return ProductService.getProducts()
        }catch(err){
            throw new Error(err)
        }
    }

    static async getProductById(params){
        if(params.productId === '')
            throw new Error('Product Id cannot be null')
        return ProductService.getProductById(params.productId)
    }
}

module.exports = {
    ProductController: Product
}