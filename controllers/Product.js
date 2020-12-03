const ProductService = require('../services/Product').ProductService

class Product {
    static async getProducts(){
        try{
            return ProductService.getProducts()
        }catch(err){
            throw err
        }
    }

    static async getProductById(params){
        if(params.productId === '')
            throw new Error('Product Id cannot be null')
        return ProductService.getProductById(params.productId)
    }

    static async addProduct(product){
        return ProductService.addProduct(product)
    }
}

module.exports = {
    ProductController: Product
}