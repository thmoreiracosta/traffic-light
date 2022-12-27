import './style.css';


export function TrafficLight({ color, on, name, onClick }) {
  return (
    <div
      className={`sinalization__luz ${on ? 'sinalization__luz-on' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  )
}

