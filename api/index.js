const express = require('express')
const router = express.Router()

router.use('/', require('./routes/authRouter'))
router.use('/users', require('./routes/usersRouter'))
router.use('/orders', require('./routes/ordersRouter'))
router.use('/products', require('./routes/productsRouter'))

module.exports = router