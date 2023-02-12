import * as React  from 'react';
import './App.css'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import axios from 'axios'
import { GiDeliveryDrone } from "react-icons/gi";


const server = "http://localhost:888"


const connect = async () => {
await axios.get(`${server}/connect`)
}

function valuetext (value) {
  return value;
}

function App() {
  return (
   <>
     <div className='main'>
     <div className='main__inner'>

          <div className='main__inner__heading'>          
                
                {/* <h1 className='title'>Drone Control</h1> */}

                <Button onClick={connect} size="large" className='takeOffButton' variant="contained">Connect</Button>

          </div>

           <div className='main__slider'>

    <p>Speed</p>

    <Slider
          aria-label="Speed"
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
        />
    </div>
    <div className='main__inner__buttons'>
   
        <Button onClick={connect} size="large" className='takeOffButton' variant="contained">Take Off</Button>
        <Button  className='landButton'  variant="contained">Land</Button>
 
    </div>


    <div className='main__inner__buttons_middle'>
        <Button style={{color: "white"}} className='button' variant="contained">Up</Button>
        <Button  className='button'  variant="contained">Left</Button>
        <Button  className='button'  variant="contained">Forward</Button>
 
    </div>
    <div className='main__inner__buttons_middle'>
        <Button style={{color: "white"}} className='button' variant="contained">Down</Button>
        <Button  className='button'  variant="contained">Right</Button>
        <Button  className='button'  variant="contained">Backwards</Button>
 
    </div>
    <div className='main__inner__buttons'>
        <Button  size="large" className='clockwise' variant="contained">Clockwise</Button>
        <Button  className='counterclock'  variant="contained">Counter Clock</Button>
 
    </div>
      <div className='drone_logo'>

      <GiDeliveryDrone />

      </div>
   

     </div>



  
   
     </div>
   </>
  );
}

export default App;
