require('dotenv').config()

const connectDB = require('./db/connect')
// schema
const Product = require('./models/product')
// products
const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        // use schema(Product) create add these products(jsonProducts)
        await Product.create(jsonProducts)
        console.log('product succeful')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()