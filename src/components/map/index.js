import React from "react";
import { HeatMap, Map, GoogleApiWrapper } from "google-maps-react";
import {
  data as defaultData,
  gradient as defaultGradient,
} from "../../constants";

const defaultInitialCenter = {
  lat: 18.470181,
  lng: -66.124236,
};

export const MapContainer = ({
  google,
  initialCenter = defaultInitialCenter,
  gradient = defaultGradient,
  data,
}) => {
  return (
    <Map
      google={google}
      zoom={12}
      id="map"
      initialCenter={initialCenter}
      mapTypeControl={false}
      streetViewControl={false}
    >
      <HeatMap gradient={gradient} positions={data} opacity={1} radius={20} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBVnW1Z3yVC1_eYaoOgl0rqkARuahuJV04",
  libraries: ["visualization"]
})(MapContainer);
