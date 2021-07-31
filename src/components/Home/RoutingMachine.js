import { MapLayer } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = Leaflet.Routing.control({
      waypoints: [
        Leaflet.latLng(33.52001088075479, 36.26829385757446),
        Leaflet.latLng(33.50546582848033, 36.29547681726967)
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
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
