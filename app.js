var createError = require('http-errors')
var express = require('express')
var logger = require('morgan')
var bpmn = require('./controllers/run-bpmn-elements')
var bpmnExecute = require('./controllers/execute')

var app = express()

app.use(logger('dev'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

console.log(bpmnExecute)
bpmn()

module.exports = app
