import { Component } from  'react';
import Container from '@material-ui/core/Container'
import './DayNavStyling.css'
import data from './data.json'

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
                <hr>
                </hr>
                {date}  -  {time}
                <br>
                </br>
                <div className = "daynav-title">
                    Your {day} Drive
                </div>
            </Container>
        )
      }
};
export default DayNav;