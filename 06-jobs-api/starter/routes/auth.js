const express = require('express')
const router = express.Router()

const {login, register, getAllUsers} = require('../controllers/auth')

router.route('/register').get(getAllUsers).post(register)
router.post('/login', login)

module.exports = router