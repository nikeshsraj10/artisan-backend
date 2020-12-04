const ProductService = require('../services/Product').ProductService

class Product{

    static async getProducts(req, res){
        try{
            const products = await ProductService.getProducts()
            return res.status(200).json(products)    
        }catch(err){
            console.error(err);
            return res.status(500).json(err)
        }
    }

    static async getProductById(req, res){
        try{
            const product = await ProductService.getProductById(req.params.productId)
            return res.status(200).json(product)    
        }catch(err){
            console.error(err);
            return res.status(500).json(err)
        }
    }
    
    static async addProduct(req, res){
        try{
            const { productName, category, dimensions, description } = req.body
            if(!productName || !category || category.length === 0 || !dimensions || dimensions.length === 0 || !description){
                return res.status(400).json({"msg": "Please fill all the fields"})
            }
            const result = await ProductService.addProduct(req.body)
            return res.status(200).json(result)  
        }catch(err){
            console.error(err)
            return res.status(500).json(err)
        }
    }
}

module.exports = {
    ProductController: Product
}