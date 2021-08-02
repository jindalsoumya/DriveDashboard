import { Component } from  'react';
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
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
                    <Table>
                        <TableRow>
                            <TableCell>
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
                            <div className = "tally-label">miles</div>
                            </TableCell>
                            <TableCell>
                                <span className = "tally-val">
                                    {data.segment_stats.data.map((item, index) => {
                                        avgSpeed = (avgSpeed + item.speed_mph);
                                    })}
                                    {avgSpeed = parseFloat((avgSpeed / data.segment_stats.data.length)).toFixed(2)}
                                </span>  
                            <br>
                            </br>
                            <div className = "tally-label">mph</div>
                            </TableCell>
                            <TableCell>
                                <span className = "tally-val">
                                    {avgTime = parseFloat(((totalDist / avgSpeed)*60)).toFixed(2)}
                                </span>  
                                <br>
                                </br>
                                <div className = "tally-label">min</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <span className = "tally-val">
                                {/* Assume fuel efficiency is 25 mpg */}
                                {gallon = parseFloat((totalDist / 25)).toFixed(2)}
                            </span>  
                            <br>
                            </br>
                            <div className = "tally-label">gallons</div>
                            </TableCell>
                            <TableCell>
                                <span className = "tally-val">
                                    {/* Assume fuel price is $3 */}
                                    {price = gallon * 3}
                                </span>  
                                <br>
                                </br>
                                <div className = "tally-label">dollars</div>
                            </TableCell>
                            <TableCell>
                                <span className = "tally-val">
                                {carbon = parseFloat((gallon * 12.13)).toFixed(2)}
                                </span>  
                                <br>
                                </br>
                                <div className = "tally-label">CO2</div>
                            </TableCell>
                        </TableRow>
                    </Table>
            </Container>
        )
      }
};
export default Tally;