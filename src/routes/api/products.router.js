const { Router } = require('express')
const { ProductsManagerFS, ProductsManagerMongo } = require('../../daos/productsMongo.manager.js')

const productsManager = new ProductsManagerMongo();
const productsRouter = Router()

productsRouter.get('/', async(req, res) => {
    const products = await productsManager.getProducts();
    res.send({status: 'success', products})
})

productsRouter.post('/', async (req, res) => {
    const { body } = req
    const result = await productsManager.createProduct({ body });
    res.send({status: 'success', data: result})
})

productsRouter.get('/:pid', async (req, res) => {
    const { pid } = req.params
    const productFound = await productsManager.findOne({_id: pid})
    res.send({status: 'success', payload: productFound})
})
productsRouter.put('/:pid', (req, res) => {
    res.send('update Product')
})
productsRouter.delete('/:pid', (req, res) => {
    res.send('delete Product')
})


export default productsRouter