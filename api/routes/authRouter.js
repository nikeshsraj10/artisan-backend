const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Server responding')
})

router.post('/login', (req, res) => {
  res.send('Login')  
})

router.post('/signup', (req, res) => {
    res.send('Signup')  
})

router.post('/logout', (req, res) => {
    res.send('Logout')  
})

module.exports = router