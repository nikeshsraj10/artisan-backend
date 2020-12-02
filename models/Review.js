const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    review: {
        type: String,
    },
})

module.exports = mongoose.model('Review', ReviewSchema)