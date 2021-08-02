import Container from '@material-ui/core/Container'
import { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from './RoutineMachine';
import './MapStyling.css'
import 'leaflet/dist/leaflet.css';

class Map extends Component {
  render() {
    return (
        <Container className = "map-container">
          <MapContainer
             doubleClickZoom={false}
             id="mapId"
             zoom={14}
             center={[30.13176, -97.639651]}
             >
                 <TileLayer
                     url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                 />
                 <RoutineMachine/>
            </MapContainer>
        </Container>
    );
  }
}

export default Map;
