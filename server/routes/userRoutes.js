const express = require('express')
const router = express.Router()
const movieController = require('../controllers/userController')

/*
 * APP Routes
 */
router.get('/api/user/', movieController.listMovies)
router.get('/api/users/', movieController.listMovies)
router.post('/api/user/', movieController.insertSingleMovie)
router.patch('/api/user/:id', movieController.updateSingleMovie)
router.delete('/api/user/:id', movieController.deleteSingleMovie)

module.exports = router
