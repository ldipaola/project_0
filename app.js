const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { engine } = require('express-handlebars')

const app = express()
const port = process.env.PORT || 5000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './server/views')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

const htmlRoutes = require('./server/routes/htmlRoutes')
const userRoutes = require('./server/routes/userRoutes')
app.use('/', htmlRoutes)
// app.use('/user', userRoutes)

app.listen(port, () => console.log(`Listening on port ${port}`))
