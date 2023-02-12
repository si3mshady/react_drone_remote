import * as React  from 'react';
import './App.css'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import axios from 'axios'
import { GiDeliveryDrone } from "react-icons/gi";


const server = "http://localhost:888"



function App() {

  const [speed, setSpeed] = React.useState(30)
  const [distance, setDistance] = React.useState(50)

  const connect = async () => {
    await axios.get(`${server}/connect`)
    }
    
    const takeoff = async () => {
      await axios.get(`${server}/takeoff`)
      }
    
    const land = async () => {
    
        await axios.get(`${server}/land`)
        }
    
    const up = async () => {
    
      await axios.post(`${server}/up`,{distance:  distance})
    
    }

    const down = async () => {
    
      await axios.post(`${server}/down`,{distance:  distance})
    
    }


    const left = async () => {
    
      await axios.post(`${server}/left`,{distance:  distance})
    
    }
        
    const right = async () => {
    
      await axios.post(`${server}/right`,{distance:  distance})
    
    }
        
    const forward = async () => {
    
      await axios.post(`${server}/forward`,{distance:  distance})
    
    }

    const backward = async () => {
    
      await axios.post(`${server}/backward`,{distance:  distance})
    
    }
        
      
        
    const flipleft = async () => {
    
      await axios.get(`${server}/flipleft`)
    
    }
        
      
          
    const flipright = async () => {
    
      await axios.get(`${server}/flipright`)
    
    }
        
      
    const velocity = async () => {
    
      await axios.post(`${server}/speed`,{velocity:speed})
    
    }
        
      
        
      
      


  async function handleSpeed  (value) {
    console.log(`New speed ${value}`)
    setSpeed(value)
    await velocity()
   
      return value;
      
    }

    async function handleDistance  (value) {
      console.log(`New distance ${distance}`)
      setDistance(value)
      
        return value;
        
      }
      
    
  return (
   <>
     <div className='main'>
     <div className='main__inner'>

          <div className='main__inner__heading'>          
                
                <h2 className='title'>Drone Control</h2>

                <Button onClick={connect} size="large" className='takeOffButton' variant="contained">Connect</Button>

          </div>

           <div className='main__slider'>

    <p>Speed</p>

    <Slider
          onChange={handleSpeed}
          aria-label="Speed"
          getAriaValueText={handleSpeed}
          valueLabelDisplay="auto"
          step={2}
          marks
          min={0}
          max={100}
          defaultValue={speed}
        />

<p>Distance</p>


<Slider
          aria-label="Distance"
          getAriaValueText={handleDistance}
          valueLabelDisplay="auto"
          step={2}
          marks
          min={0}
          max={100}
          defaultValue={distance}
          // onChange={(e) => {handleDistance(e)}}
        />

    </div>



    <div className='main__inner__buttons'>
   
        <Button onClick={takeoff} size="large" className='takeOffButton' variant="contained">Take Off</Button>
        <Button onClick={land}  className='landButton'  variant="contained">Land</Button>
 
    </div>


    <div className='main__inner__buttons_middle'>
        <Button  onClick={up} className='button' variant="contained">Up</Button>
        <Button  onClick={left} className='button'  variant="contained">Left</Button>
        <Button  onClick={forward}  className='button'  variant="contained">Forward</Button>
 
    </div>
    <div className='main__inner__buttons_middle'>
        <Button  onClick={down} className='button' variant="contained">Down</Button>
        <Button  onClick={right} className='button'  variant="contained">Right</Button>
        <Button onClick={backward}   className='button'  variant="contained">Backwards</Button>
 
    </div>
    <div className='main__inner__buttons'>
        <Button onClick={flipleft} size="large" className='clockwise' variant="contained">Flip Left</Button>
        <Button onClick={flipright} className='counterclock'  variant="contained">Flip Right</Button>
 
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
