import Container from '@material-ui/core/Container'
import { Component } from "react";
import './MapStyling.css'
import map from './map.png';

class Map extends Component {
  render() {
    return (
        <Container className = "map-container">
          <img src={map} className = "map-image"/>
        </Container>
    );
  }
}

export default Map;
