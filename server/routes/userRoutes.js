const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/*
 * APP Routes
 */
router.get('/api/user/', userController.listUser)
router.get('/api/users/', userController.listUsers)
router.post('/api/user/', userController.insertSingleUser)
router.patch('/api/user/:id', userController.updateSingleUser)
router.delete('/api/user/:id', userController.deleteSingleUser)

module.exports = router
