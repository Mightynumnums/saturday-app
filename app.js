const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const routes = require('./routes/index')
const db = require('./db/database')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(volleyball);

app.use('/', routes)

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('something broke!')
})

db.sync()
  .then(function(){
    app.listen(3000, function(){
      console.log("Server is listening on port 3000!")
    })
  })
