const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Address = require('./address').Address

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobile:{
        type: Array,
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Active',
        enum: ['Active', 'Suspended']
    }
})

module.exports = mongoose.model('User', UserSchema)