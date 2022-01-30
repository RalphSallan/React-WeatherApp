import React, { Component } from 'react';
import DayCard from './DayCard';
import Hourly from './Hourly';
import './Home.css';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         forecast: [],
         visible_day: 0
      }
    }

    // executes when component is mounted and only then
    componentDidMount() {
        var url = 'https://api.weatherapi.com/v1/forecast.json?key='+process.env.REACT_APP_WEATHER_API_KEY+'&q=Toronto&days=4&aqi=no&alerts=no';
        axios.get(url)
        .then(response => {
            //console.log(response.data);
            this.setState({forecast: [response.data]})
        })
        .catch(error => {
            console.log(error);
        })
    }

    change_visible_day(day) {
        console.log(day);
        this.setState({visible_day: day});
    }

    render() {

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const d = new Date();
        let day0 = weekday[d.getDay()];
        let day1 = weekday[(d.getDay()+1)%7];
        let day2 = weekday[(d.getDay()+2)%7];

        var daylist = [day0, day1, day2];
        
        const { forecast } = this.state;

        var date0 = forecast.length ? forecast[0].forecast.forecastday[0].date : null;
        var date1 = forecast.length ? forecast[0].forecast.forecastday[1].date : null;
        var date2 = forecast.length ? forecast[0].forecast.forecastday[2].date : null;

        var weather0 = forecast.length ? forecast[0].forecast.forecastday[0].day.condition.text : null;
        var weather1 = forecast.length ? forecast[0].forecast.forecastday[1].day.condition.text : null;
        var weather2 = forecast.length ? forecast[0].forecast.forecastday[2].day.condition.text : null;

        var temperature0 = forecast.length ? forecast[0].forecast.forecastday[0].day.avgtemp_c : null;
        var temperature1 = forecast.length ? forecast[0].forecast.forecastday[1].day.avgtemp_c : null;
        var temperature2 = forecast.length ? forecast[0].forecast.forecastday[2].day.avgtemp_c : null;

        var image0 = forecast.length ? forecast[0].forecast.forecastday[0].day.condition.icon : null;
        var image1 = forecast.length ? forecast[0].forecast.forecastday[1].day.condition.icon : null;
        var image2 = forecast.length ? forecast[0].forecast.forecastday[2].day.condition.icon : null;

        var hours00 = forecast.length ? forecast[0].forecast.forecastday[0].hour[0].temp_c : null;
        var hours01 = forecast.length ? forecast[0].forecast.forecastday[0].hour[3].temp_c : null;
        var hours02 = forecast.length ? forecast[0].forecast.forecastday[0].hour[6].temp_c : null;
        var hours03 = forecast.length ? forecast[0].forecast.forecastday[0].hour[9].temp_c : null;
        var hours04 = forecast.length ? forecast[0].forecast.forecastday[0].hour[12].temp_c : null;
        var hours05 = forecast.length ? forecast[0].forecast.forecastday[0].hour[15].temp_c : null;
        var hours06 = forecast.length ? forecast[0].forecast.forecastday[0].hour[18].temp_c : null;
        var hours07 = forecast.length ? forecast[0].forecast.forecastday[0].hour[21].temp_c : null;

        var hours0 = [hours00, hours01, hours02, hours03, hours04, hours05, hours06, hours07];

        var hours10 = forecast.length ? forecast[0].forecast.forecastday[1].hour[0].temp_c : null;
        var hours11 = forecast.length ? forecast[0].forecast.forecastday[1].hour[3].temp_c : null;
        var hours12 = forecast.length ? forecast[0].forecast.forecastday[1].hour[6].temp_c : null;
        var hours13 = forecast.length ? forecast[0].forecast.forecastday[1].hour[9].temp_c : null;
        var hours14 = forecast.length ? forecast[0].forecast.forecastday[1].hour[12].temp_c : null;
        var hours15 = forecast.length ? forecast[0].forecast.forecastday[1].hour[15].temp_c : null;
        var hours16 = forecast.length ? forecast[0].forecast.forecastday[1].hour[18].temp_c : null;
        var hours17 = forecast.length ? forecast[0].forecast.forecastday[1].hour[21].temp_c : null;

        var hours1 = [hours10, hours11, hours12, hours13, hours14, hours15, hours16, hours17];

        var hours20 = forecast.length ? forecast[0].forecast.forecastday[2].hour[0].temp_c : null;
        var hours21 = forecast.length ? forecast[0].forecast.forecastday[2].hour[3].temp_c : null;
        var hours22 = forecast.length ? forecast[0].forecast.forecastday[2].hour[6].temp_c : null;
        var hours23 = forecast.length ? forecast[0].forecast.forecastday[2].hour[9].temp_c : null;
        var hours24 = forecast.length ? forecast[0].forecast.forecastday[2].hour[12].temp_c : null;
        var hours25 = forecast.length ? forecast[0].forecast.forecastday[2].hour[15].temp_c : null;
        var hours26 = forecast.length ? forecast[0].forecast.forecastday[2].hour[18].temp_c : null;
        var hours27 = forecast.length ? forecast[0].forecast.forecastday[2].hour[21].temp_c : null;

        var hours2 = [hours20, hours21, hours22, hours23, hours24, hours25, hours26, hours27];

        var hourslist = [hours0, hours1, hours2];

        var icon00 = forecast.length ? forecast[0].forecast.forecastday[0].hour[0].condition.icon : null;
        var icon01 = forecast.length ? forecast[0].forecast.forecastday[0].hour[1].condition.icon : null;
        var icon02 = forecast.length ? forecast[0].forecast.forecastday[0].hour[2].condition.icon : null;
        var icon03 = forecast.length ? forecast[0].forecast.forecastday[0].hour[3].condition.icon : null;
        var icon04 = forecast.length ? forecast[0].forecast.forecastday[0].hour[4].condition.icon : null;
        var icon05 = forecast.length ? forecast[0].forecast.forecastday[0].hour[5].condition.icon : null;
        var icon06 = forecast.length ? forecast[0].forecast.forecastday[0].hour[6].condition.icon : null;
        var icon07 = forecast.length ? forecast[0].forecast.forecastday[0].hour[7].condition.icon : null;

        var icon10 = forecast.length ? forecast[0].forecast.forecastday[1].hour[0].condition.icon : null;
        var icon11 = forecast.length ? forecast[0].forecast.forecastday[1].hour[1].condition.icon : null;
        var icon12 = forecast.length ? forecast[0].forecast.forecastday[1].hour[2].condition.icon : null;
        var icon13 = forecast.length ? forecast[0].forecast.forecastday[1].hour[3].condition.icon : null;
        var icon14 = forecast.length ? forecast[0].forecast.forecastday[1].hour[4].condition.icon : null;
        var icon15 = forecast.length ? forecast[0].forecast.forecastday[1].hour[5].condition.icon : null;
        var icon16 = forecast.length ? forecast[0].forecast.forecastday[1].hour[6].condition.icon : null;
        var icon17 = forecast.length ? forecast[0].forecast.forecastday[1].hour[7].condition.icon : null;

        var icon20 = forecast.length ? forecast[0].forecast.forecastday[2].hour[0].condition.icon : null;
        var icon21 = forecast.length ? forecast[0].forecast.forecastday[2].hour[1].condition.icon : null;
        var icon22 = forecast.length ? forecast[0].forecast.forecastday[2].hour[2].condition.icon : null;
        var icon23 = forecast.length ? forecast[0].forecast.forecastday[2].hour[3].condition.icon : null;
        var icon24 = forecast.length ? forecast[0].forecast.forecastday[2].hour[4].condition.icon : null;
        var icon25 = forecast.length ? forecast[0].forecast.forecastday[2].hour[5].condition.icon : null;
        var icon26 = forecast.length ? forecast[0].forecast.forecastday[2].hour[6].condition.icon : null;
        var icon27 = forecast.length ? forecast[0].forecast.forecastday[2].hour[7].condition.icon : null;
        
        var icon0 = [icon00, icon01, icon02, icon03, icon04, icon05, icon06, icon07];
        var icon1 = [icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17];
        var icon2 = [icon20, icon21, icon22, icon23, icon24, icon25, icon26, icon27];

        var iconlist = [icon0, icon1, icon2];

        console.log(this.state.forecast);
        console.log(this.state.visible_day);

        return (
            <div className='Whole'>
                <div className='Title'>
                    <h1>Toronto's 3 Day Forecast</h1>
                </div>
                <div className='ThreeDay'>
                    <div className={this.state.visible_day == 0 ? 'ActiveDayCardDiv' : 'DayCardDiv'} onClick={() => this.change_visible_day(0)}>
                        <DayCard day={day0} date={date0} weather={weather0} temperature={temperature0} image={image0}></DayCard>
                    </div>
                    <div className={this.state.visible_day == 1 ? 'ActiveDayCardDiv' : 'DayCardDiv'} onClick={() => this.change_visible_day(1)}>
                        <DayCard day={day1} date={date1} weather={weather1} temperature={temperature1} image={image1}></DayCard>
                    </div>
                    <div className={this.state.visible_day == 2 ? 'ActiveDayCardDiv' : 'DayCardDiv'} onClick={() => this.change_visible_day(2)}>
                        <DayCard day={day2} date={date2} weather={weather2} temperature={temperature2} image={image2}></DayCard>
                    </div>
                </div>
                <div className='Daily'>
                    <Hourly hours={hourslist[this.state.visible_day]} day={daylist[this.state.visible_day]} icons={iconlist[this.state.visible_day]}></Hourly>
                </div>
            </div>
        );
    }
}

export default Home;
