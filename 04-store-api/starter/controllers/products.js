const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const search = 'ik'
    const products = await Product.find({ 
        company: { $regex: search, $options: 'i' }
    })
    res.status(200).json({ products, nbHits: products.length})
}

const getAllProducts = async (req, res) => {
    const {featured, company, name, price, rating} = req.query
    const queryObject = {}
    console.log(queryObject, 'hello')
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = {$regex: company, $options: 'i'}
    }
    if(name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }
    if(price){
        queryObject.price = {$regex: price, $options: 'i'}
    }
    if(rating){
        queryObject.rating = {$regex: rating, $options: 'i'}
    }
    console.log(queryObject)
    const products = await Product.find(queryObject)
    console.log(products)
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}