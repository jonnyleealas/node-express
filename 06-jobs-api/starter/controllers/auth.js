const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const {BadRequestError} = require('../errors/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async ( req, res) => {
    const user = await User.create({...req.body})
    const token = jwt.sign({userId:user._id, name:user.name}, process.env.JSON_WEB_TOKEN, {expiresIn:'30d'})
    console.log(user)
    res.status(StatusCodes.CREATED).json({user:{name:user.name}, token})
}

const login = async (req, res) => {
    res.send(req.body)
}

module.exports = {
    register,
    login,
}