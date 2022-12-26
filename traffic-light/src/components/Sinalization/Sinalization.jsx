import { useState } from "react";
import { TrafficLight } from "../TrafficLight/TrafficLight";
import './style.css';

export function Sinalization({ colors = [] }) {
  const [colorAtual, setColorAtual] = useState("");
  return (
    <div className="sinalization">
      {colors.map(({color, name}) => (
        <TrafficLight 
          key={color}
          color={color}
          name={name}
          on={color === colorAtual}
          onClick={() => setColorAtual(color)}
        />
      ))}
    </div>
  )
}











