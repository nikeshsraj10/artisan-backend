const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const Product = require('./Product').Product

const ProductOrderSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1.0
    }
})

module.exports = mongoose.model('ProductOrder', ProductOrderSchema)