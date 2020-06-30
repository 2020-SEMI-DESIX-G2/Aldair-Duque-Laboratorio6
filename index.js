'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan');

const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.use(require('./routes/index'));
app.use('/api/estudiantes',require('./routes/estudiantes'));

app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}`)
})