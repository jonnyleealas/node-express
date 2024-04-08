const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const search = 'ik'
    const products = await Product.find({price:{$gt:300}}).select('name price').limit(4)
    res.status(200).json({ products, nbHits: products.length})
}

const getAllProducts = async (req, res) => {
    console.log(req.query, 'query')
    const {featured, company, name, price, rating, sort, field, numericFilters} = req.query
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
    if(numericFilters){
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'eq',
            '<':'lt',
            '<=':'lte',
        }
        const regEx = /\b(<|>|>=|<=|=)\b/g
        let filters = numericFilters.replace(regEx,(match)=> `-${operatorMap[match]}-`)
        console.log(filters)
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

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}