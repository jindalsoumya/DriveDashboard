import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import data from './data.json'

const createRoutineMachineLayer = (props) => {
  // {data.geometry.coordinatesmap((item, index, element) => {
  //   if(index < (data.segment_stats.data.length-1))
  //   {
  //     L.latLng(item[1], item[0])
  //   }
  // })}
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(33.52001088075479, 36.26829385757446),
      L.latLng(33.50546582848033, 36.29547681726967),
      L.latLng(35.50546582848033, 36.29547681726967)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });
  console.log(instance);
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
