const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({featured: true})
    res.status(200).json({ products, nbHits: products.length})
}

const getAllProducts = async (req, res) => {
    const {featured, company, name, price} = req.query
    const queryObject = {}
    console.log(queryObject, 'hello')
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = company
    }
    if(name) {
        queryObject.name = name
    }
    if(price){
        queryObject.price = price
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