const db = require('../data/config')
const model = require('./classesModel')

function getClientClasses (client_id) {
    return db('client_classes as cc')
    .select('cl.*', 'cc.client_id', 'cc.client_class_id', 'i.instructor_name')
    .leftJoin('classes as cl', 'cl.class_id', 'cc.class_id')
    .leftJoin('instructors as i', 'i.instructor_id', 'cl.instructor_id')
    .where('cc.client_id', client_id)
}

function getClientClassById (client_class_id) {
    return db('client_classes')
    .where('client_class_id', client_class_id)
}

async function addClasses (class_id, client_id) {
    const newClass = await model.getClassById(class_id)
    return db('client_classes as cc')
    .insert({
        class_id: class_id,
        client_id: client_id,
    })
    .then(([id]) => console.log(id))
}

async function removeClass (client_class_id, client_id) {
    return db('client_classes as cc')
    .where('cc.client_class_id', client_class_id)
    .andWhere('cc.client_id', client_id)
    .del()
}

function addClient (client_name) {
    return db('clients')
    .insert({client_name: client_name})
    .then(([id]) => id)
}

function getUserByName (username) {
    return db('users')
    .where({username: username})
}

module.exports = {
    getClientClasses,
    getClientClassById,
    addClasses,
    removeClass,
    addClient,
    getUserByName
}