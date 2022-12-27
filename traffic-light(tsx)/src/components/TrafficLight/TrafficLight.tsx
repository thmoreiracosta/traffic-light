import { HTMLAttributes, MouseEvent } from 'react';
import './style.css'

export interface TrafficLightProps extends HTMLAttributes<MouseEvent> {
  colors: {
    color: string;
    on: boolean; 
    name: string;   
    onClick(): void;
  }[]
}
export function TrafficLight(props: TrafficLightProps) {
  return (
    <div
      className={`sinalization__luz ${props.colors.on ? 'sinalization__luz-on' : ''}`}
      style={{ backgroundColor: props.colors.color }}
      onClick={props.colors.onClick}           
    />
  )
}