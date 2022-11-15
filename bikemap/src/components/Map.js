import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";

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
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <MarkerF position={{ lat: 51.5, lng: 0.15 }} />
        <MarkerF position={{ lat: 51.4, lng: 0.15 }} />
        <MarkerF position={{ lat: 51.4, lng: 0.17 }} />
        <MarkerF position={{ lat: 51.6, lng: 0.21 }} />
      </GoogleMap>
    </LoadScript>
  );
}
