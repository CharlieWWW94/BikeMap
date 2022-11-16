import Map from "../components/Map";
import Wrapper from "../components/Wrapper";
import MapDock from "../components/mapDock";
import ParkCard from "../components/ParkCard";
import TheftCard from "../components/theftCard";
import TheftDock from "../components/theftDock";
import { useState, useEffect } from "react";
import axios from "axios";

// const theftArray = [
//   {
//     id: 1,
//     name: "Red Specialized Allez",
//     serial: "M3A00055",
//     type: "Road Bike",
//     timeOfTheft: 7.45,
//     dateOfTheft: "16/11/22",
//     lat: 51.5081,
//     lng: 0.0759,
//   },
//   {
//     id: 2,
//     name: "Raleigh Talus 2",
//     serial: "B7F04056",
//     type: "Mountain Bike",
//     timeOfTheft: 16.32,
//     dateOfTheft: "14/11/22",
//     lat: 51.7081,
//     lng: 0.0852,
//   },
//   {
//     id: 3,
//     name: "Ribble AL Trail",
//     serial: "J3M64092",
//     type: "Hybrid",
//     timeOfTheft: 16.94,
//     dateOfTheft: "15/11/22",
//     lat: 51.4081,
//     lng: 0.0731,
//   },
// ];

export default function Page3() {
  const [locations, setLocations] = useState([]);
  const [locCard, setLocCard] = useState("");

  async function fetchLocations() {
    const data = await axios.get("http://127.0.0.1:5001/map-info/thefts");
    console.log(data.data);
    setLocations(data.data);
  }

  function focusCard(location) {
    setLocCard(location);
  }

  useEffect(() => {
    fetchLocations();
  }, []);

  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 1;

  useEffect(() => {
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }, []);

  return (
    <Wrapper styling={"is-flex columns is-justify-content-space-between"}>
      <Map type={"theft"} locations={locations} focus={focusCard} />
      <div class="is-flex is-flex-direction-column column mr-4">
        <div className="mb-3">{locations.length > 2 ? <TheftDock /> : ""}</div>
        <div
          style={{
            flexWrap: "nowrap",
            overflow: "scroll",
            scrollbarWidth: "none",
            maxHeight: "60vh",
          }}
        >
          {!locCard ? (
            locations.map((spot) => <TheftCard info={spot} />)
          ) : (
            <TheftCard info={locCard} />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
