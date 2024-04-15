const jwt = require('jsonwebtoken')
const {UnAuthenticated} = require('../errors/index')

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    console.log('authHeader', authHeader)
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Unauthenticated('not autherized no token found')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('decoded',decoded)
        const { id, username } = decoded
        req.user = { id, username }
        next()

    } catch (error) {
        throw new UnAuthenticated('Not autherized to access this route')
    }
}

module.exports = authenticationMiddleware