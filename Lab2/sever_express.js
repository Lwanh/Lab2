const express = require('express')
const app = express()
const port = 3001

app.get('/home', (req, res) => {
  res.send(`Welcome Home!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})