

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg: 'products testing static'})
}

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'products testing route'})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}