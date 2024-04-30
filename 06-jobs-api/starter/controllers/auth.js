const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors/index')




const register = async ( req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT()
    console.log(user)
    res.status(StatusCodes.CREATED).json({user:{name:user.name}, token})
}

const getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.status(200).json({ users })
}
const login = async (req, res) => {
    const {email, password} = req.body
    
    if(!email || !password) {
        throw new BadRequestError("Please provide email and password")
    }

    const user = await User.findOne({email})

    if(!user) {
        throw new UnauthenticatedError("Invalid Crendentials")
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user:{name:user.name}, token})
}

module.exports = {
    register,
    getAllUsers,
    login,
}