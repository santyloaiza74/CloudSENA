const router = require('express').Router()
const proyectoController = require('../controllers/proyecto.controller')
const proyectoSchema = require('../database/models/proyecto.model')
const controller = new proyectoController

router.get('/', async (req, res) => {
    const proyectos = await controller.index()
    res.json({ proyectos })
})

router.post('/', async (req, res) => {
    const {nombre,autores,idficha,fecha} = req.body
    const proyecto = new proyectoSchema({
        nombre:nombre,
        autores:autores,
        idficha:idficha,
        fecha:fecha
    })
    await controller.create(proyecto)
    res.status(201).json({ proyecto })
})
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const proyecto = await controller.getById(id)
    res.json({ proyecto })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const {nombre,autores,idficha,fecha} = req.body
    const values = {}
    if (nombre) values.nombre = nombre
    if (autores) values.autores = autores
    if (idficha) values.idficha = idficha
    if(fecha) values.fecha=fecha
    try {
        const proyecto = await controller.update(id, values)
        res.status(200).json({ proyecto })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const proyecto = await controller.remove(id)
        res.status(200).json({ proyecto })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})
module.exports = router