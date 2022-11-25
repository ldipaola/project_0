const express = require('express')
const router = express.Router()

/*
 * APP Routes
 */
router.get('/', (req, res) => {
  res.render('home')
})

router.get('/about', (req, res) => {
  res.render('about')
})

module.exports = router
