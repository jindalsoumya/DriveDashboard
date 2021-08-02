import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import data from './data.json'
const createRoutineMachineLayer = (props) => {
  
    var coordinatesArray = [];
    {data.geometry.coordinates.map((item, index, element) => {
        if(index < (data.segment_stats.data.length-1))
        {
           coordinatesArray.push(L.latLng(item[1], item[0])); 
         }
       })}
       
    const instance = L.Routing.control({
    waypoints: coordinatesArray,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: function() { return null; }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);
export default RoutingMachine;
