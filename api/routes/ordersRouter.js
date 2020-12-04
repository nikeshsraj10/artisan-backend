const router = require('express').Router()
const Order = require('../../models/Order')
const OrderController = require('../../controllers/Order').OrderController

router.get('/:userId', OrderController.getOrder)
router.post('/create', OrderController.addOrder) 

module.exports = router