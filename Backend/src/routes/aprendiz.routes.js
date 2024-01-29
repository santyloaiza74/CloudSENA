const router = require('express').Router()
const aprendizController = require('../controllers/aprendiz.controller')
const aprendizSchema = require('../database/models/aprendiz.model')
const controller = new aprendizController

router.get('/', async (req, res) => {
    const aprendizs = await controller.index()
    res.json({ aprendizs })
})

router.post('/', async (req, res) => {
    const {nombre,documento,ficha} = req.body
    const aprendiz = new aprendizSchema({
        nombre:nombre,
        documento:documento,
        ficha:ficha
    })
    await controller.create(aprendiz)
    res.status(201).json({ aprendiz })
})
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const aprendiz = await controller.getById(id)
    res.json({ aprendiz })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { nombre,documento,ficha } = req.body
    const values = {}
    if (nombre) values.nombre = nombre
    if (documento) values.documento = documento
    if (ficha) values.ficha = ficha
    try {
        const aprendiz = await controller.update(id, values)
        res.status(200).json({ aprendiz })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const aprendiz = await controller.remove(id)
        res.status(200).json({ aprendiz })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})
module.exports = router