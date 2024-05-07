const { Schema, model } = require('mongoose')

const productsSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    code: String,
    stock: Number,
    status: Boolean,
    category: String
})

const productsModel = model('products', productsSchema)

module.exports = {
    productsModel
}