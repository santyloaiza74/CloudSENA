const router = require('express').Router()
const proyectoController = require('../controllers/proyecto.controller')
const proyectoSchema = require('../database/models/proyecto.model')
const multer = require('multer')
const fs = require('node:fs')
const path = require('path')
const controller = new proyectoController

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const projectName = req.body.projectName; // Obtenemos el nombre del proyecto del cuerpo de la solicitud
        const projectPath = path.join(__dirname, '../../public', projectName);
        fs.mkdirSync(projectPath, { recursive: true });
        cb(null, projectPath);
    },
    filename: (req, file, cb) => {
        const originalFilename = file.originalname;
        const extension = path.extname(originalFilename);
        const filename = `${Date.now()}${extension}`;
        cb(null, filename);
    }
});

const uploads = multer({ storage })

router.get('/', async (req, res) => {
    const proyectos = await controller.index()
    res.json({ proyectos })
})
router.post('/upload', uploads.array('files', 5), (req, res) => {
    // Verificar si se subieron archivos
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No se subieron archivos.');
    }

    // Procesar los archivos subidos
    req.files.forEach(file => {
        console.log('Archivo subido:', file.filename);
        // Aquí puedes guardar el archivo en la base de datos, en el sistema de archivos, etc.
    });

    // Responder al cliente con un mensaje de éxito
    res.status(200).send('Archivos subidos exitosamente.');
});

router.post('/', async (req, res) => {
    const { nombre, autores, ficha, fecha,ruta } = req.body
    const proyecto = new proyectoSchema({
        nombre: nombre,
        autores: autores,
        ficha: [ficha],
        fecha: fecha,
        ruta:ruta
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
    const { nombre, autores, idficha, fecha } = req.body
    const values = {}
    if (nombre) values.nombre = nombre
    if (autores) values.autores = autores
    if (idficha) values.idficha = idficha
    if (fecha) values.fecha = fecha
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