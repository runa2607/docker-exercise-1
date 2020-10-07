const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const num = Math.floor(Math.random() * 10)
  res.send(`My lucky number is ${num}`)
})

app.listen(8081, () => {
  console.log('App listening on port 8081..')
})

