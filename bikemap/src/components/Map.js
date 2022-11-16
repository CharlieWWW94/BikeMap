import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import warningIcons from "../images/marker.png";

const containerStyle = {
  width: "70%",
  height: "95vh",
};

const center = {
  lat: 51.5,
  lng: 0.15,
};

export default function Map(props) {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {props.locations.map((location) => {
          return (
            <MarkerF
              position={{ lat: location.lat, lng: location.lng }}
              icon={props.type === "theft" ? warningIcons : ""}
              title={location.name}
              onClick={() => {
                props.focus(location);
              }}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}
