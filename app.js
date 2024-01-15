'use strict'
const express = require('express')
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
const app = express()
app.use('/', indexRouter)
app.use('/users', userRouter)
module.exports =app