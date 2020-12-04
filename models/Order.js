const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductOrder = require('./ProductOrder').ProductOrder

const OrderSchema = new Schema({
    orderedProduct: [{
        type: Object,
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: {
            type: Number,
            default: 1
        },
        required: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    totalPrice:{
        type: Number,
        required: true,
        default: 0.0
    },
    status:{
        type: String,
        required: true,
        default: 'Order Placed',
        enum: ['Order Placed', 'Order Shipped', 'Out for Delivery', 'Delivered']
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Order', OrderSchema)