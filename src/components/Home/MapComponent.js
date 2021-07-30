import Container from '@material-ui/core/Container'
import './MapStyling.css'

const Map = (props) => {
    return (
        <Container className = "map-container">   
            <img src = "https://e3.365dm.com/18/05/1600x900/skynews-world-map-map_4298829.jpg?20180502134213" className ="map-image"/>
            {/* <MapContainer
                doubleClickZoom={false}
                id="mapId"
                zoom={14}
                center={[33.5024, 36.2988]}
            >
                <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                />
                <RoutineMachine />
            </MapContainer>             */}
        </Container>
    );
  };
  
export default Map;
