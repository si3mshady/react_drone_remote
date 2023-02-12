const express = require('express')
const app = express()
const port = 888
const sdk = require('tellojs')

const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.post('/speed', async  (req, res) => {
 
  try {

    const velocity = console.log(req.body.velocity)
    console.log('speed pressed')
    await sdk.set.speed(velocity)   
    
  } catch (error) {
    console.log(error)
  }
})



app.get('/connect', async (req, res) => {
  console.log('connection triggered')
  await sdk.control.connect() 
})


app.get('/takeoff', async(req, res) => {
  console.log('take off triggered')
  await sdk.control.takeOff()     
})


app.get('/land', async (req, res) => {
  try {
    console.log('land triggered')
    // await sdk.control.emergency()    
    await sdk.control.stop()   
    await sdk.control.land()   
  } catch (error) {
    console.log(error)
    
  }

})


app.post('/up', async  (req, res) => {
 
  try {

    const distance = console.log(req.body.distance)
    console.log('Up pressed')
    await sdk.control.move.up(distance)  
    
  } catch (error) {
    console.log(error)
  }
})



app.post('/down', async  (req, res) => {
 
  try {

    const distance = console.log(req.body.distance)
    console.log('down pressed')
    await sdk.control.move.down(distance)  
    
  } catch (error) {
    console.log(error)
  }
})


app.post('/left', async  (req, res) => {
 
  try {

    const distance = console.log(req.body.distance)
    console.log('left pressed')
    await sdk.control.move.left(distance)  
  } catch (error) {
    console.log(error)
  }
})

app.post('/right', async  (req, res) => {
 
  try {

    const distance = console.log(req.body.distance)
    console.log('right pressed')
    await sdk.control.move.right(distance)  
  } catch (error) {
    console.log(error)
  }
})


app.post('/forward', async  (req, res) => {
 
  try {

    const distance = console.log(req.body.distance)
    console.log('forward pressed')
    await sdk.control.move.front(distance)  
  } catch (error) {
    console.log(error)
  }
})


app.post('/backward', async  (req, res) => {
 
  try {

    const distance = console.log(req.body.distance)
    console.log('backward pressed')
    await sdk.control.move.back(distance)  
  } catch (error) {
    console.log(error)
  }
})

app.get('/flipleft', async  (req, res) => {
 
  try {

    
    console.log('flip left')
    await sdk.control.flip.left()  
  } catch (error) {
    console.log(error)
  }
})

app.get('/flipright', async  (req, res) => {
 
  try {

    
    console.log('flip right')
    await sdk.control.flip.left()  
  } catch (error) {
    console.log(error)
  }
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})