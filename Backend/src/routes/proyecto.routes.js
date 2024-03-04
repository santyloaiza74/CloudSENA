const router = require('express').Router()
const proyectoController = require('../controllers/proyecto.controller')
const proyectoSchema = require('../database/models/proyecto.model')
const multer = require('multer')
const fs = require('node:fs')
const path = require('path')
const controller = new proyectoController
const publicDir = path.resolve(__dirname, '../../public');

const storage = multer.diskStorage({
    destination:'./public',
    filename: (req, file, cb) => {
        const originalFilename = file.originalname;
        const extension = path.extname(originalFilename);
        const filename = `${Date.now()}${extension}`;
        cb(null, filename);
    }
});


const upload = multer({ storage })

// router.post('/upload', upload.array('files', 5), (req, res) => {
//     console.log(req.files)
//     // Obtener los nombres de los archivos en la carpeta pública
//     const files = fs.readdirSync('/public/');

//     // Recorrer cada archivo
//     req.files.forEach(file => {
//         // Obtener la extensión del archivo
//         const ext = path.extname(file.originalname);

//         // Mover el archivo a la carpeta según su extensión
//         if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
//             fs.renameSync(path.join(publicDir, file.filename), path.join(publicDir, '/Img', file.filename));
//             qwe.push(`http://localhost:3300/Img/${file.filename}`)
//         } else if (ext === '.mp4') {
//             fs.renameSync(path.join(publicDir, file.filename), path.join(publicDir, '/Video', file.filename));
//             asd.push(`http://localhost:3300/Video/${file.filename}`)
//         } else if (ext === '.pdf' || ext === '.docx') {
//             fs.renameSync(path.join(publicDir, file.filename), path.join(publicDir, '/Doc', file.filename));
//             zxc.push(`http://localhost:3300/Doc/${file.filename}`)
//         }
//     });

//     // Verificar si se subieron archivos
//     if (!req.files || req.files.length === 0) {
//         return res.status(400).send('No se subieron archivos.');
//     }

//     // Procesar los archivos subidos (opcional)
//     req.files.forEach(file => {
//         console.log('Archivo subido:', file.filename);
//         // Aquí puedes guardar el archivo en la base de datos, en el sistema de archivos, etc.
//     });

//     // Responder al cliente con un mensaje de éxito
//     res.status(200).send('Archivos subidos exitosamente.');
//     console.log(qwe,asd,zxc)
// });

router.get('/', async (req, res) => {
    const proyectos = await controller.index()
    res.json({ proyectos })
})

router.post('/', upload.array('files', 5), async (req, res) => {
    const qwe=[]
    const asd=[]
    const zxc=[]
    let a=''
    let b=''
    let c=''
    const files = fs.readdirSync('/public/');

    // Recorrer cada archivo
    req.files.forEach(file => {
        // Obtener la extensión del archivo
        const ext = path.extname(file.originalname);

        // Mover el archivo a la carpeta según su extensión
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
            fs.renameSync(path.join(publicDir, file.filename), path.join(publicDir, '/Img', file.filename));
            a=`http://localhost:3300/Img/${file.filename}`
            qwe.push(a)
        } else if (ext === '.mp4') {
            fs.renameSync(path.join(publicDir, file.filename), path.join(publicDir, '/Video', file.filename));
            b=`http://localhost:3300/Video/${file.filename}`
            asd.push(b)
        } else if (ext === '.pdf' || ext === '.docx') {
            fs.renameSync(path.join(publicDir, file.filename), path.join(publicDir, '/Doc', file.filename));
            c=`http://localhost:3300/Doc/${file.filename}`
            zxc.push(c)
        }
    });

    //Verificar si se subieron archivos
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No se subieron archivos.');
    }

    // // Responder al cliente con un mensaje de éxito
    // res.status(200).send('Archivos subidos exitosamente.');
    console.log(qwe,asd,zxc)
    const { nombre, autores, ficha, fecha, descripcion } = req.body
    const proyecto = new proyectoSchema({
        nombre: nombre,
        autores: autores,
        ficha: [ficha],
        fecha: fecha,
        descripcion: descripcion,
        documentacion: zxc,
        imagenes: qwe,
        video: asd
    })
    await controller.create(proyecto)
    qwe.length = 0
    asd.length = 0
    zxc.length = 0
    res.status(201).json({ proyecto,message: "Archivos subidos exitosamente."  })
})
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const proyecto = await controller.getById(id)
    res.json({ proyecto})
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { nombre, autores, ficha, fecha, descripcion } = req.body
    const values = {}
    if (nombre) values.nombre = nombre
    if (autores) values.autores = autores
    if (ficha) values.idficha = ficha
    if (fecha) values.fecha = fecha
    if (descripcion) values.descripcion = descripcion
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