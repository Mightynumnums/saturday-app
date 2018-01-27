const express = require('express')
const router = express.Router()
const studentRoute = require('./studentRoute')

router.use('/students', studentRoute)

module.exports = router
