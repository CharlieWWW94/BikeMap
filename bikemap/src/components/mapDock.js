export default function MapDock(props) {
  return (
    <article class="panel">
      <p class="panel-heading has-text-centered">Bike Parking Spots</p>
      <p class="panel-tabs">
        <a class="is-active">Search</a>
        <a>Rated Safe</a>
        <a>Add</a>
      </p>
      <div class="panel-block">
        <p class="control">
          <input
            class="input is-primary"
            type="text"
            placeholder="Search by address"
          ></input>
        </p>
      </div>
    </article>
  );
}

// id: 1,
// name: "Queensway Bridge",
// safety: 4,
// hasCCTV: true,
// footTraffic: "high",
