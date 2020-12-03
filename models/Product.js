const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Review = require('./Review').Review

const ProductSchema = new Schema({
    prodcutName: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default: 0.0
    },
    dimensions: {
        type: Array,
        required: true,
    },
    rating:{
        type: Number,
        default: 0.0
    },
    description: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    favorites:{
        type: Number,
    },
    review:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }
})

module.exports = mongoose.model('Product', ProductSchema)