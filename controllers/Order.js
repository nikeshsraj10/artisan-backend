const OrderService = require('../services/Order')

class Order {
    static async getOrder(req, res){
        try{
            if(req.params && req.params.userId){
                const orders = await OrderService.getOrders(req.params.userId)
                // console.log(orders)
                return res.status(200).json(orders)
            }else{
                return res.status(400).json({"msg": "orderId is null or not passed"})
            }
        }catch(err){
            console.error(err)
            return res.status(500).json(err)
        }
    }

    static async addOrder(req,res){
        try{
            const order = await OrderService.addOrder(req.body)
            console.log(JSON.stringify(order))
            return res.status(200).json(order)
        }catch(err){
            console.error(err)
            return res.status(500).json(err)
        }
    }
}

module.exports = {
    OrderController: Order
}