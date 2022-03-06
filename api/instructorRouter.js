const express = require('express')
const router = express.Router()
const model = require('./instructorModel')
const mid = require('./middleware/middleware')

router.get('/:instructor_id', async (req, res) => {
    const classes = await model.getInstructorClasses(req.params.instructor_id)
    res.json(classes)
})

router.post('/:instructor_id', mid.checkNewClass, async (req, res) => {
    const newClass = await model.createClass(req.body, req.params.instructor_id)
    console.log("post",req.body.class_id)
    res.json(newClass)
})



module.exports = router;