import './style.css';


export function TrafficLight({ color, on, onClick }) {
  return (
    <div
      className={`sinalization__luz ${on ? 'sinalization__luz-on' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  )
}

