import React from 'react';
import './Hourly.css';
import HourCard from './HourCard';

export default function Hourly(props) {
  const { hours, day, icons } = props;

  return (
    <div className='HourlyContainer'>
      <div className='DayHeader'>
        <h1>{day} Forecast</h1>
      </div>
      <div className='HourlyCards'>
          <HourCard hour="12 a.m." temperature={hours[0]} icon={icons[0]}></HourCard>
          <HourCard hour="3 a.m." temperature={hours[1]} icon={icons[1]}></HourCard>
          <HourCard hour="6 a.m." temperature={hours[2]} icon={icons[2]}></HourCard>
          <HourCard hour="9 a.m." temperature={hours[3]} icon={icons[3]}></HourCard>
          <HourCard hour="12 p.m." temperature={hours[4]} icon={icons[4]}></HourCard>
          <HourCard hour="3 p.m." temperature={hours[5]} icon={icons[5]}></HourCard>
          <HourCard hour="6 p.m." temperature={hours[6]} icon={icons[6]}></HourCard>
          <HourCard hour="9 p.m." temperature={hours[7]} icon={icons[7]}></HourCard>
      </div>
    </div>
  );
}
