const express = require('express')
const router = express.Router()
const model = require('./classesModel')


router.get('/', async (req, res) => {
   const classes = await model.getClasses()
   res.json(classes)
})

module.exports = router;