import Map from "../components/Map";
import Wrapper from "../components/Wrapper";
import MapDock from "../components/mapDock";
import ParkCard from "../components/ParkCard";
const parkingSpots = [
  {
    id: 1,
    name: "Queensway Bridge",
    safety: 3,
    hasCCTV: "Yes",
    footTraffic: "high",
  },
  {
    id: 2,
    name: "Stratford Highstreet",
    safety: 4,
    hasCCTV: "No",
    footTraffic: "Medium",
  },
  {
    id: 3,
    name: "Westminster",
    safety: 2,
    hasCCTV: "Yes",
    footTraffic: "low",
  },
];

export default function Page2() {
  return (
    <Wrapper styling={"is-flex"}>
      <Map />
      <div
        class="column is-4 is-flex is-flex-direction-column"
        style={{
          flexWrap: "nowrap",
          overflow: "scroll",
          scrollbarWidth: "none",
          maxHeight: "95vh",
        }}
      >
        <MapDock />
        {parkingSpots.map((spot) => (
          <ParkCard info={spot} />
        ))}
      </div>
    </Wrapper>
  );
}
