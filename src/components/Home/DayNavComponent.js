import { Component } from  'react';
import Container from '@material-ui/core/Container'
import './DayNavStyling.css'
import data from './data.json'
import calendar1 from './calendar.svg'; 

var date = data.properties.start_time.substring(0,10);
var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = new Date(data.properties.start_time);
day = days[day.getDay()];
var time = data.properties.start_time.substring(11, 16);

class DayNav extends Component{
    render() {
        return (
            <Container className = "daynav-container">
                <div className = "daynav-title">
                    Trip History
                </div>
                    <p className = "daynav-digits">
                    {date}  -  {time}
                    </p>
                <br>
                </br>
                <div className = "flex-cont">
                <img src = {calendar1} className = "day-icon"></img>
                <div className = "daynav-subtitle">
                    Your {day} Drive
                </div>
                </div>
            </Container>
        )
      }
};
export default DayNav;