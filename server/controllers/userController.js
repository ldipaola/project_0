require('../models/db')
const User = require('../models/user')

/**
 * /api/users/
 * GET All Users
 */

exports.listUser = async (req, res) => {
  let { limit = 10, page = 1, category, q } = req.query

  const limitRecords = parseInt(limit)
  const skip = (page - 1) * limit

  let query = {}
  if (q) {
    query = { $text: { $search: q } }
  }
  if (category) query.category = category

  try {
    const movies = await Movie.find(query).limit(limitRecords).skip(skip)
    res.json({ page: page, limit: limitRecords, movies })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
exports.listUsers = async (req, res) => {
  let { limit = 10, page = 1, category, q } = req.query

  const limitRecords = parseInt(limit)
  const skip = (page - 1) * limit

  let query = {}
  if (q) {
    query = { $text: { $search: q } }
  }
  if (category) query.category = category

  try {
    const movies = await Movie.find(query).limit(limitRecords).skip(skip)
    res.json({ page: page, limit: limitRecords, movies })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

/**
 * /api/user/
 * POST Single User
 */
exports.insertSingleUser = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

  try {
    await newUser.save()
    res.json(newUser)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

/**
 * /api/user/:id
 * PATCH Single User
 */
exports.updateSingleUser = async (req, res) => {
  let paramID = req.params.id
  let name = req.body.name

  try {
    const updateUser = await User.updateOne({ _id: paramID }, { name: name })
    res.json(updateUser)
  } catch (error) {
    res.status(400).json({ message: err })
  }
}

/**
 * /api/user/:id
 * DELETE Single User
 */
exports.deleteSingleUser = async (req, res) => {
  let paramID = req.params.id

  try {
    const data = await User.deleteOne({ _id: paramID })
    res.json(data)
  } catch (error) {
    res.status(400).json({ message: err })
  }
}
