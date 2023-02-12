const express = require('express')
const app = express()
const port = 888
const sdk = require('tellojs')

const cors = require('cors')

app.use(cors())



app.get('/', (req, res) => {

  res.send('Hello World!')


})


app.get('/connect', async (req, res) => {
  console.log('connection triggered')
  await sdk.control.connect() 
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})