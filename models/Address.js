const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
    streetLine1: String,
    streetLine2: String,
    city: String,
    state: String,
    zipCode: String,
})

module.exports = mongoose.model('Address', AddressSchema)