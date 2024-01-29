const router = require('express').Router()
const fichaController = require('../controllers/ficha.controller')
const fichaSchema = require('../database/models/ficha.model')
const controller = new fichaController

router.get('/', async (req, res) => {
    const fichas = await controller.index()
    res.json({ fichas })
})

router.post('/', async (req, res) => {
    const {nombre,fecha_fin,fecha_inicio} = req.body
    const ficha = new fichaSchema({
        nombre:nombre,
        fecha_inicio:fecha_inicio,
        fecha_fin:fecha_fin
    })
    await controller.create(ficha)
    res.status(201).json({ ficha })
})
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const ficha = await controller.getById(id)
    res.json({ ficha })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const {nombre,fecha_fin,fecha_inicio} = req.body
    const values = {}
    if (nombre) values.nombre = nombre
    if (fecha_fin) values.fecha_fin = fecha_fin
    if (fecha_inicio) values.fecha_inicio = fecha_inicio
    try {
        const ficha = await controller.update(id, values)
        res.status(200).json({ ficha })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const ficha = await controller.remove(id)
        res.status(200).json({ ficha })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})
module.exports = router