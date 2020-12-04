const User = require('../models/User')
const bcrypt = require('bcryptjs')

class UserService{
    static getUsers(){
        return User.find()
    }

    static async getUserById(userId){
        const user = await User.find({_id: userId}).exclude('password')      
        return user 
    }

    static async addUser(user){
        const password = user.password
        const salt = await bcrypt.genSalt(16)
        const hashedPW = await bcrypt.hash(password, salt)
        user.password = hashedPW
        const newUser = await User.create(user)
        delete newUser['password']       
        return newUser 
    } 
}

module.exports = {
    UserService: UserService
}