const router = require('express').Router()
const UserController = require('../../controllers/User').UserController

router.get('/', UserController.getUsers)

router.get('/:userId', UserController.getUserById)

router.post('/create', UserController.addUser)

module.exports = router