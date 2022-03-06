const classes = require('../classesModel')
const clients = require('../clientModel')
const instructors = require('../instructorModel')
const bcryptjs = require('bcryptjs')


async function checkBody (req, res, next) {
try {
    const checkClass = await clients.getClientClassById(req.body.client_class_id)

    if(checkClass.length < 1) return res.json({message: "Record not found"})
    if("class_id" in req.body || "client_class_id" in req.body)
    return next()
    else res.json({message: "Please provide the correct info"})
}
catch {
    res.status(500).json({message: "An error occurred"})
}
}

async function checkNewClass (req, res, next) {
    try {
        const { body } = req;
        if(!("class_name" in body) 
        || !("class_info" in body)
        || !("class_duration" in body)
        || !("instructor_id" in body))
        return res.json({message: "Please include all necessary fields"})
        next()
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
}

async function checkSignUp (req, res, next) {
    try {
        const { body } = req;
        if(!("username" in body)
        || !("password" in body)
        || !("full_name" in body)
        || !("client_id" in body)
        || !("instructor_id" in body)
        || !("role" in body))
        return res.json({message: "Please fill in all fields"})
        next()
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
}

async function checkSignIn (req, res, next) {
    try {
        let { username, password} = req.body
        if(!("username" in req.body) || !("password" in req.body))
        return res.json({message: "Username and Password required"})

        const checkUser = await clients.getUserByName(username)
        console.log(checkUser)
        if(checkUser.length < 1) return res.json({message: "username does not exist"})
        if(!bcryptjs.compareSync(password, checkUser[0].password))
        return res.json({message: "invalid credentials"})
        next()
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
}

module.exports = {
    checkBody,
    checkNewClass,
    checkSignUp,
    checkSignIn
}