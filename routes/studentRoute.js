const express = require('express');
const router = express.Router()
const Student = require('../db/models/studentModel')

router.get('/', function (req, res, next) {
  Student.findAll()
  .then(function(students) {
    res.status(200).json(students)
  })
  .catch(next)
})

router.post('/', function(req, res, next) {
  Student.create(req.body)
  .then(function(student) {
    res.status(201).json(student)
  })
  .catch(next)
})

router.put('/:id', function(req, res, next) {
  Student.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  .then(function(values) {
    console.log(values[1])
    res.send('user updated')
  })
  .catch(next)
})

module.exports = router;
