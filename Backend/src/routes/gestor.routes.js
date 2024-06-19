const router = require('express').Router();
const GestorController = require('../controllers/gestor.controller');
const rolSchema=require('../database/models/roles.model')
const controller = new GestorController();

router.get('/', async (req, res) => {
    const gestors = await controller.index();
    res.json({ gestors });
});

router.post('/', async (req, res) => {
    const { nombre, documento, celular, correo, contraseña} = req.body;
    const roles = await rolSchema.findOne({name: "gestor"});
    const roleid = [roles._id]

    const gestor = {
        nombre,
        documento,
        celular,
        correo,
        contraseña,
        rol: roleid
    };

    try {
        const newGestor = await controller.create(gestor);
        res.status(201).json({ gestor: newGestor });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const gestor = await controller.getById(id);
    res.json({ gestor });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, documento, celular, correo } = req.body;
    const values = {};
    if (nombre) values.nombre = nombre;
    if (documento) values.documento = documento;
    if (celular) values.celular = celular;
    if (correo) values.correo = correo;
    try {
        const gestor = await controller.update(id, values);
        res.status(200).json({ gestor });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const gestor = await controller.remove(id);
        res.status(200).json({ gestor });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
