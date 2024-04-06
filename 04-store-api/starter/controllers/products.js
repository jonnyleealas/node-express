const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const search = 'ik'
    const products = await Product.find({}).sort('name price')
    res.status(200).json({ products, nbHits: products.length})
}

const getAllProducts = async (req, res) => {
    const {featured, company, name, price, rating, sort, field} = req.query
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
        queryObject.rating = {$regex: ratingt, $options: 'i'}
    }
    console.log(queryObject)
    let result = Product.find(queryObject)
    if(sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    if(field){
        const fieldList = field.split(',').join(' ')
        result = result.select(fieldList)
    }

    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}