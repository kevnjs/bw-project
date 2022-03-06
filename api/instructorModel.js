const db = require('../data/config')

function getInstructorClasses (id) {
    return db('classes')
    .where('instructor_id', id)
}

function getClassById (id) {
    return db('classes')
    .where('class_id', id)
}

function createClass (newClass, instructor_id) {
    return db('classes')
    .insert({
        ...newClass,
        instructor_id: instructor_id
    })
    .then(console.log(newClass))
    .then(([id]) => getClassById(id))
}

function addNewInstructor (instructor_name) {
    return db('instructors')
    .insert({instructor_name: instructor_name})
    .then(([id]) => id)
}

module.exports = {
    getInstructorClasses,
    createClass,
    addNewInstructor
}