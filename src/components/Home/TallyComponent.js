import { Component } from  'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import { getDistance } from 'geolib';
import './TallyStyling.css'
import data from './data.json'

var totalDist = 0;
var i = 0;

class Tally extends Component{
    render() {
        return (
            <Container className = "tally-container">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <span className = "tally-val">
                            {console.log(data.geometry.coordinates.length)}
                            {/* for(i = 0; i<5; i++) */}
                            
                            for(i in data.geometry.coordinates)
                            {
                                totalDist = totalDist + (getDistance({latitude: data.geometry.coordinates[i][0], longitude: data.geometry.coordinates[i][1]},{latitude: data.geometry.coordinates[i+1][0], longitude: data.geometry.coordinates[i+1][1]}))
                            }
                            {/* {data.geometry.coordinates.map((item, index) => {
                                    return(
                                        {item.}
                                    )
                                })}
                            {/* {this.state.person.result.map((item, index) => {
                                return ( */}
                                    {/* <div>
                                            <Card className = "cards-card" keyM = {index}>
                                                        <p className = "cards-abouttext"> {item.AboutMe} </p>
                                            </Card>
                                    </div> */}
                                {/* )
                            })} */}
                            {/* {data.geometry.coordinates[0][0]} */}
                            {/* {getDistance({ latitude: 51.5103, longitude: 7.49347 },{ latitude: "51° 31' N", longitude: "7° 28' E" })} */}
                        </span>    
                        <br>
                        </br>
                        miles
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <span className = "tally-val">
                        23
                        </span>  
                        <br>
                        </br>
                        mph
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <span className = "tally-val">
                        23
                        </span>  
                        <br>
                        </br>
                        min
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <span className = "tally-val">
                        23
                        </span>  
                        <br>
                        </br>
                        dollars
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <span className = "tally-val">
                        23
                        </span>  
                        <br>
                        </br>
                        lbs carbon
                    </Grid>
                </Grid>
            </Container>
        )
      }
};
export default Tally;