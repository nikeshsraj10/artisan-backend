const UserService = require('../services/User').UserService
class User{
    static getUsers(){
        try{
            return UserService.getUsers()
        }catch(err){
            console.error(err)
            throw err
        }
    }

    static getUserById(userId){
        try{
            return UserService.getUserById(userId)
        }catch(err){
            console.error(err)
            throw err
        }
    }

    static addUser(user){
        try{
            return UserService.addUser(user)
        }catch(err){
            console.error(err)
            throw err
        }
    }
}

module.exports = {
    UserController: User
}