import bikePic from "../images/bicycle.png";
import { useNavigate } from "react-router-dom";

export default function BikeInfo(props) {
  const navigate = useNavigate();
  function clickHandler(event) {
    event.preventDefault();
    navigate("/2");
  }
  return (
    <div className="card column is-4 is-offset-4 mt-6 is-flex is-flex-direction-column is-justify-content-center">
      <div className="is-flex is-justify-content-center mt-5">
        <img className="image is-32x32 is-fullwidth" src={bikePic}></img>
      </div>
      <header className="is-flex is-justify-content-center">
        <p className="title is-5 mt-2">Tell us about your bike</p>
      </header>
      <div>
        <div>
          <p className="is-flex is-justify-content-center mt-3 has-text-primary">
            This will help you report it stolen immediately.
          </p>
        </div>
      </div>
      <div className="card-content is-flex is-flex-direction-column is-justify-content-center">
        <form>
          <input
            type="text"
            name="house"
            className="input"
            placeholder="Make and model"
          ></input>
          <input
            type="text"
            name="street"
            className="input mt-5"
            placeholder="Serial Number"
          ></input>
          <input
            type="text"
            name="city"
            className="input mt-5"
            placeholder="Color"
          ></input>
          <input
            type="text"
            name="postcode"
            className="input mt-5"
            placeholder="Type: Mountain, Road, Hybrid..."
          ></input>
          <input
            type="submit"
            className="button is-fullwidth mt-5 is-info"
            value="Add"
          ></input>
        </form>
        <div className="is-flex is-justify-content-center mt-3">
          <a onClick={clickHandler}>
            <p className="is-underlined has-text-link">Skip</p>
          </a>
        </div>
      </div>
    </div>
  );
}
