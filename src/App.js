import React, { Component } from "react";
import { HeatMap, Map, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import { data, gradient, mapStyles } from "./constants/contants";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 18.470181,
          lng: -66.124236,
        }}
      >
        <HeatMap gradient={gradient} positions={data} opacity={1} radius={20} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBVnW1Z3yVC1_eYaoOgl0rqkARuahuJV04",
  libraries: ["visualization"],
})(MapContainer);
