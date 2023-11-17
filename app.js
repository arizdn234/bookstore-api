require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index.route')

app.use(express.json())
app.use(express.urlencoded())
app.use(router)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})