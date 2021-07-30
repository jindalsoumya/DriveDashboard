import { Component } from  'react';
import Box from '@material-ui/core/Box'
import DayNav from './DayNavComponent'
import Map from './MapComponent'
import Tally from './TallyComponent'
import Cards from './CardsComponent'
import './HomeStyling.css'

class Home extends Component{
    render() {
        return ( 
            <Box className = "home-box">
                <DayNav/> 
                <Map/>
                <Tally/>
                <Cards/>
            </Box>
        )
      }
};
export default Home;