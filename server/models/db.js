const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/cooldb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('Connected')
})
