const express = require('express')
const server = express()
const classesRoute = require('./classesRouter')
const instructorRoute = require('./instructorRouter')
const clientRoute = require('./clientRouter')
const signInRoute = require('./SignIn')
const signUpRoute = require('./SignUp')
const db = require('../data/config')


function restricted (req, res, next) {
    const token = req.headers.authorization
    if(!token) return res.json({message: "Please Login to continue"})
    next()
}

function getAllUsers () {
    return db('users')
}

function getAllInstructors () {
    return db('instructors')
}


server.use(express.json())
server.use('/classes', classesRoute)
server.use('/instructor_page', restricted, instructorRoute)
server.use('/client_page', restricted, clientRoute)
server.use('/sign_in', signInRoute)
server.use('/sign_up', signUpRoute)

server.get('/', (req, res) => {
    res.json({message: "API up"})
})

server.get('/users', async (req, res) => {
    const allUsers = await getAllUsers()
    res.json(allUsers)
})

server.get('/instructors', async (req, res) => {
    const allInstructors = await getAllInstructors()
    res.json(allInstructors)
})

module.exports = server;