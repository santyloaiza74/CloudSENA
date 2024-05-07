const router = require('express').Router()
const proyectoController = require('../controllers/proyecto.controller')
const proyectoSchema = require('../database/models/proyecto.model')
const multer = require('multer')
const fs = require('node:fs')
const path = require('path')
const controller = new proyectoController
const publicDir = path.resolve(__dirname, '../../public');
const nodemailer = require('nodemailer')
const crypto = require('crypto')

// Configuración del transporte SMTP

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.ADDRESS_EMAIL,
        pass: process.env.PASSWORD_EMAIL
    }
});

// Función para enviar correo electrónico
const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: process.env.ADDRESS_EMAIL,
            to,
            subject,
            text
        });
        console.log('Correo enviado con éxito');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
};
//Genrar codigo de confirmacion

const generateConfirmationCode = () => {
    return crypto.randomBytes(20).toString('hex');
};

const storage = multer.diskStorage({
    destination: './public',
    filename: (req, file, cb) => {
        const originalFilename = file.originalname
        const extension = path.extname(originalFilename)
        const filename = `${Date.now()}${extension}`
        cb(null, filename)
    }
})

const limits = {
    files: 5,
    fileSize: 150 * 1024 * 1024
}

const upload = multer({ storage, limits })

router.get('/', async (req, res) => {
    const proyectos = await controller.index()
    res.json({ proyectos })
})

router.post('/', upload.array('files', 5), async (req, res) => {
    const { projectName, autores, ficha, fecha, descripcion } = req.body;
    const img = [];
    const doc = [];
    const video = [];

    req.files.forEach(file => {
        const ext = path.extname(file.originalname);
        const filePath = path.join(publicDir, ext === '.jpg' || ext === '.jpeg' || ext === '.png' ? '/Img' :
            (ext === '.mp4' ? '/Video' : '/Doc'), file.filename);

        fs.renameSync(path.join(publicDir, file.filename), filePath);

        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
            img.push(`http://localhost:3300/Img/${file.filename}`);
        } else if (ext === '.mp4') {
            video.push(`http://localhost:3300/Video/${file.filename}`);
        } else if (ext === '.pdf' || ext === '.docx') {
            doc.push(`http://localhost:3300/Doc/${file.filename}`);
        }
    });

    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No se subieron archivos.');
    }

    const existingProject = await proyectoSchema.findOne({ nombre: projectName.toUpperCase() });
    if (existingProject) {
        await deleteFiles([...img, ...video, ...doc]);
        return res.status(400).json({ message: "El nombre ya se encuentra registrado" });
    } else {
        // Formatear la fecha a DD/MM/AAAA
        const fecha1 = new Date(fecha);
        const formattedDate = `${fecha1.getDate()}/${fecha1.getMonth() + 1}/${fecha1.getFullYear()}`;

        const proyecto = new proyectoSchema({
            nombre: projectName.toUpperCase(),
            autores,
            ficha: [ficha],
            fecha: formattedDate, // Guardar la fecha formateada
            descripcion,
            documentacion: doc,
            imagenes: img,
            video
        });

        await controller.create(proyecto);
        img.length = 0;
        video.length = 0;
        doc.length = 0;
        res.status(201).json({ proyecto, message: "Archivos subidos exitosamente." });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const proyecto = await controller.getById(id)
    res.json({ proyecto })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { projectName, autores, ficha, fecha, descripcion } = req.body
    const values = {}
    const nombredup = await proyectoSchema.findOne({ nombre: projectName.toUpperCase() });
    if (nombredup) {
        return res.status(400).json({ message: "El nombre ya se encuentra registrado" })
    }
    if (projectName) values.projectName = projectName.toUpperCase()
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

router.post('/:id/send-code', async (req, res) => {
    const { id } = req.params;

    try {
        const proyecto = await controller.getById(id);
        if (!proyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }

        // Generar código de confirmación
        const confirmationCode = generateConfirmationCode();
        await proyectoSchema.updateOne({ _id: id }, { confirmationCode });

        // Enviar correo de confirmación
        const email = 'martin.ortizg10@gmail.com'; // Correo del destinatario
        const subject = 'Confirmación de eliminación de proyecto'; // Asunto del correo
        const text = `Para eliminar el proyecto, utiliza el siguiente código: ${confirmationCode}`; // Cuerpo del correo
        await sendEmail(email, subject, text);

        return res.status(200).json({ message: 'Código de confirmación enviado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar el código de confirmación' });
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const confirmationCode = req.query.confirmationCode;

    try {
        const proyecto = await controller.getById(id);
        if (!proyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }

        // Verificar si el código de confirmación coincide
        if (confirmationCode === proyecto.confirmationCode) {
            await controller.remove(id);
            return res.status(200).json({ message: 'Proyecto eliminado exitosamente' });
        } else {
            return res.status(400).json({ message: 'Código de confirmación incorrecto' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proyecto' });
    }
});
module.exports = router