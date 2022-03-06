const express = require('express')
const router = express.Router()
const model = require('./clientModel')
const mid = require('./middleware/middleware')
router.get('/:client_id', async (req, res) => {
    const client_classes = await model.getClientClasses(req.params.client_id)
    res.json(client_classes)
})

router.post('/:client_id', async (req, res) => {
    const newClass = await model.addClasses(req.body.class_id, req.params.client_id)
    res.json(newClass)
})

router.delete('/:client_id', mid.checkBody, async (req, res) => {
    const classToRemove = await model.getClientClassById(req.body.client_class_id)
    const removeClass = await model.removeClass(req.body.client_class_id, req.params.client_id)
    res.json(classToRemove)
})

module.exports = router;