import Container from '@material-ui/core/Container'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import './MapStyling.css'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const Map = (props) => {
    return (
        <Container className = "map-container">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className = "leaflet-container">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
            </MapContainer>
        </Container>  
    );
  };
  
export default Map;
