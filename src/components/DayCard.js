import React from 'react';
import './DayCard.css';

export default function DayCard(props) {



  return (
  <div className='DayCard'>
      <h1>{props.day}</h1>
      <h3>{props.date}</h3>
      <img src={props.image}></img>
      <h3>{props.weather}</h3>
      <h3>{props.temperature} °C</h3>
  </div>
  );
}
