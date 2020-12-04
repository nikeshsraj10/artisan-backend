const Order = require('../models/Order')

class OrderService{
    static async getOrders(userId){
        const orders = await  Order.find({user: userId}).populate('user', '-password')
        return orders
    }

    static async addOrder(order){
        const {_id} = await Order.create(order)
        const newOrder = await Order.findOne({_id}).populate({
            path: 'orderedProduct.product',
            model: 'Product'
        }).populate('user', '-password')
        return newOrder
    }
}

module.exports = OrderService