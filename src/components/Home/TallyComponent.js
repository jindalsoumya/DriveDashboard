import { Component } from  'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import { getDistance } from 'geolib';
import './TallyStyling.css'
import data from './data.json'

var totalDist = 0;
var avgSpeed = 0;
var avgTime = 0;
var gallon = 0;
var price = 0;
var carbon = 0;

class Tally extends Component{
    render() {
        return (
            <Container className = "tally-container">
                <Grid container className = "tally-container">
                    <Grid item xs={4}>
                        <span className = "tally-val">
                            {data.geometry.coordinates.map((item, index, element) => {
                                if(index < (data.geometry.coordinates.length-1))
                                    {
                                        totalDist = totalDist + getDistance({ latitude: item[1], longitude: item[0] },{ latitude: element[index+1][1], longitude: element[index+1][0]});
                                    }
                            })}
                            {totalDist = totalDist * 0.0006}
                        </span>    
                        <br>
                        </br>
                        <div className = "label">miles</div>
                    </Grid>
                    <Grid item xs={4}>
                        <span className = "tally-val">
                            {data.segment_stats.data.map((item, index) => {
                                avgSpeed = (avgSpeed + item.speed_mph);
                            })}
                            {avgSpeed = parseFloat((avgSpeed / data.segment_stats.data.length)).toFixed(2)}
                        </span>  
                        <br>
                        </br>
                         <div className = "label">mph</div>
                    </Grid>
                    <Grid item xs={4}>
                        <span className = "tally-val">
                            {avgTime = parseFloat(((totalDist / avgSpeed)*60)).toFixed(2)}
                        </span>  
                        <br>
                        </br>
                        <div className = "label">min</div>
                    </Grid>
                </Grid>
                <Grid container className = "tally-container">
                    <Grid item xs={4}>
                        <span className = "tally-val">
                            {/* Assume fuel efficiency is 25 mpg */}
                            {gallon = parseFloat((totalDist / 25)).toFixed(2)}
                        </span>  
                        <br>
                        </br>
                        <div className = "label">gallons</div>
                    </Grid>
                    <Grid item xs={4}>
                        <span className = "tally-val">
                            {/* Assume fuel price is $3 */}
                            {price = gallon * 3}
                        </span>  
                        <br>
                        </br>
                        <div className = "label">dollars</div>
                    </Grid>
                    <Grid item xs={4}>
                        <span className = "tally-val">
                            {carbon = parseFloat((gallon * 12.13)).toFixed(2)}
                        </span>  
                        <br>
                        </br>
                        <div className = "label">CO2</div>
                    </Grid>
                </Grid>
            </Container>
        )
      }
};
export default Tally;