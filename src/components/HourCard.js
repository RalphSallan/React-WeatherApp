import React from 'react';
import './HourCard.css';

export default function Hour(props) {
  return (
    <div className="HourCard">
      <div><img src={props.icon}></img></div>
      <div><h2>{props.temperature} °C</h2></div>
      <div><h3>{props.hour}</h3></div>
    </div>
    
  );
}
