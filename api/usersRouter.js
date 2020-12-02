const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET USERS')
})


module.exports = router