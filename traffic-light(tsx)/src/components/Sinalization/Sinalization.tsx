import { useState } from 'react';
import { TrafficLight, TrafficLightProps } from '../TrafficLight/TrafficLight';
import './style.css';

export function Sinalization() {
  const [colorAtual, setColorAtual] = useState("");

  return (
    <div className="sinalization">     
        <TrafficLight 
        key={color}
        
          
        />      
    </div>
  )
}