import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  LoadScript,
} from "@react-google-maps/api";
// export default function Map(props) {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBgmGxw4jP4MmbG7f0EJ9WaYYssemTqQLs",
//   });

//   if (!isLoaded) <div>Loading...</div>;
//   return <GoogMap />;
// }

// function GoogMap() {
//   return (
//     <GoogleMap
//       zoom={10}
//       center={{ lat: 51.5, lng: 0.15 }}
//       mapContainerClassName="google-map"
//     >
//       <Marker position={{ lat: 51.5, lng: 0.15 }} />
//     </GoogleMap>
//   );
// }
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
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}
