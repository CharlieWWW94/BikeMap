import mask from "../images/domino-mask.png";

export default function TheftDock(props) {
  return (
    <article class="panel mt-2 is-flex is-flex-direction-column is-justify-content-center">
      <div class="panel-heading has-text-centered   has-background-danger">
        <img src={mask}></img>
        <p>Reported Thefts</p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Report</a>
      </p>
      <div class="panel-block">
        <p class="control">
          <input
            class="input is-warning"
            type="text"
            placeholder="Search Thefts"
          ></input>
        </p>
      </div>
    </article>
  );
}
