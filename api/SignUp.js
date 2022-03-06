const express = require('express')
const router = express.Router()
const db = require('../data/config')
const bcrypt = require('bcryptjs')
const instructor = require('./instructorModel')
const client = require('./clientModel')
const mid = require('./middleware/middleware')

function getUserById (user_id) {
    return db('users')
    .where('user_id', user_id)
}

function addUser (newUser) {
    return db('users')
    .insert(newUser)
    .then(([id]) => getUserById(id))
}

//===========================================

router.post('/', mid.checkSignUp, async (req, res) => {
    let {username, password, full_name, client_id, instructor_id, role} = req.body;
    const hash = bcrypt.hashSync(password, 8)
    password = hash

    if(role === "instructor") {
    const newInstructor = await instructor.addNewInstructor(full_name)
    instructor_id = newInstructor
    }
    else if(role === "client") {
    const newClient = await client.addClient(full_name)
    client_id = newClient
    }

    const newUser = await addUser({username, password, client_id, instructor_id})
    res.json(newUser)
})

module.exports = router;