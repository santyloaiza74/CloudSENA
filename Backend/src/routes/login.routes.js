const router = require('express').Router()
const LoginController = require('../controllers/login.controller')
const loginSchema = require('../database/models/login.model')
const bcrypt=require('bcrypt')
const controller = new LoginController

router.get('/', async (req, res) => {
    const users = await controller.index()
    res.json({ users })
})

router.post('/register', async (req, res) => {
    const { username, password, nombre,documento,ficha} = req.body
    const passwordhash=await bcrypt.hash(password,8)
    const user = new loginSchema({
        username: username,
        password: passwordhash,
        nombre: nombre,
        documento: documento,
        ficha: ficha
    })
    await controller.create(user)
    res.status(201).json({ user })
})
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await controller.getById(id)
    res.json({ user })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { username, password, status, date } = req.body
    const values = {}
    if (username) values.username = username
    if (password) values.password = password
    if (status) values.status = status
    if (date) values.date = date
    try {
        const user = await controller.update(id, values)
        res.status(200).json({ user })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await controller.remove(id)
        res.status(200).json({ user })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})
router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body
        const { accessToken } = await controller.validateUser(username, password)
        res.header('authorization', accessToken).json({ message: 'Usuario autenticado', token: accessToken })
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
})
module.exports = router