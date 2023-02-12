const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["*"],
      allowedHeaders: ["*"],
    }
  });



io.on('connection', async (socket) => {


      

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });


  socket.on('takeoff', async (message) => {
    console.log(message),   
    await sdk.control.connect()   ,
    await sdk.control.takeOff()      
  
  });


    socket.on('land', async (message) => {
        console.log(message),    
    await sdk.control.land()  
    
  });

  socket.on('connect', async (message) => {
    await sdk.control.connect()   
  });


});

app.listen(888, () => {
  console.log('Socket.io server running on port 888');
});
