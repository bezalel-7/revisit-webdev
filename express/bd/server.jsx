const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/Cars')
  .then(() => console.log('connected to database'))
  .catch((err) => console.log(err))

app.listen(3000, () => {
  console.log('server started at port 3000')
})

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send('<h1>hello ji</h1>')
})

app.post('/api/cars/', (request, response) => {
  const { name, car } = request.body
  console.log(name, car)
  response.send(`Hello ${name}, you have a ${car}`)
})
