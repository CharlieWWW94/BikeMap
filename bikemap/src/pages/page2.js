import Map from "../components/Map";
import Wrapper from "../components/Wrapper";
import MapDock from "../components/mapDock";
import ParkCard from "../components/ParkCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Page2() {
  const [locations, setLocations] = useState([]);
  const [locCard, setLocCard] = useState("");

  async function fetchLocations() {
    const data = await axios.get("http://127.0.0.1:5001/map-info");
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
      <Map type={"parking"} locations={locations} focus={focusCard} />
      <div
        class="is-flex is-flex-direction-column column mr-4"
        style={{
          flexWrap: "nowrap",
          overflow: "scroll",
          scrollbarWidth: "none",
          maxHeight: "95vh",
        }}
      >
        {locations.length > 2 ? <MapDock /> : ""}

        {!locCard ? (
          locations.map((spot) => <ParkCard info={spot} />)
        ) : (
          <ParkCard info={locCard} />
        )}
      </div>
    </Wrapper>
  );
}
