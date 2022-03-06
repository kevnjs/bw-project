const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const JWT_SECRET = process.env.JWT_SCRT || 'secret123'
const mid = require('./middleware/middleware')
const clients = require('./clientModel')


function generateToken (user) {
    const payload = {
      subject: user.id,
      username: user.username,
    }
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d'})
}

router.post('/', mid.checkSignIn, async (req, res) => {
    let { username } = req.body
    const user = await clients.getUserByName(username)
    const token = generateToken(user)
    res.status(200).json({ message: `Welcome, ${user[0].username}`, token: token})
})

module.exports = router;