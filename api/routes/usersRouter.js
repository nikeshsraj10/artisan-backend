const router = require('express').Router()
const UserController = require('../../controllers/User').UserController
router.get('/', async (req,res) => {
    try{
        const users = await UserController.getUsers()
        return res.status(200).json(users)
    }catch(err){
        console.error(err)
        return res.status(500).json(err)
    }
})

router.get('/:userId', async (req, res) => {
    try{
        const user = await UserController.getUserById(req.params.userId)
        return res.status(200).json(user)
    }catch(err){
        console.error(err)
        return res.status(500).json(err)
    }
})

router.post('/create', async (req,res) => {
    try{
        const user = await UserController.addUser(req.body)
        return res.status(200).json(user)
    }catch(err){
        console.error(err)
        return res.status(500).json(err)
    }
})

module.exports = router