const db = require('../data/config')

function getClasses () {
    return db('classes')
}

function getClassById (id) {
    return db('classes')
    .where('class_id', id)
}

module.exports = {
    getClasses,
    getClassById
}