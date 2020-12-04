const UserService = require('../services/User').UserService
class User{

    static async getUsers(req,res){
        try{
            const users = await UserService.getUsers()
            return res.status(200).json(users)
        }catch(err){
            console.error(err)
            return res.status(500).json(err)
        }
    }

    static async getUserById(req, res){
        try{
            const user = await UserService.getUserById(req.params.userId)
            return res.status(200).json(user)
        }catch(err){
            console.error(err)
            return res.status(500).json(err)
        }
    }

    static async addUser(req,res){
        try{
            const {email, firstName, lastName, password} = req.body
            if(!email || !firstName || !lastName || !password){
                return res.status(400).json({"msg": "Please fill all the fields"})
            }
            const user = await UserService.addUser(req.body)
            return res.status(200).json(user)
        }catch(err){
            console.error(err)
            return res.status(500).json(err)
        }
    }
}

module.exports = {
    UserController: User
}