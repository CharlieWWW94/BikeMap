import bikePic from "../images/bicycle.png";
import { useNavigate } from "react-router-dom";

export default function BikeInfo(props) {
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const bikeModel = event.target.model.value;
    const bikeSerial = event.target.model.serial;
    const bikeColor = event.target.model.serial;
    const bikeType = event.target.model.type;
    props.moveView({
      userBike: [
        { bikeModel: bikeModel },
        { bikeSerial: bikeSerial },
        { bikeColor: bikeColor },
        { bikeType: bikeType },
      ],
    });
    console.log("done!");
  }

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
        <form onSubmit={(event) => submitHandler(event)}>
          <input
            type="text"
            name="model"
            className="input"
            placeholder="Make and model"
          ></input>
          <input
            type="text"
            name="serial"
            className="input mt-5"
            placeholder="Serial Number"
          ></input>
          <input
            type="text"
            name="color"
            className="input mt-5"
            placeholder="Color"
          ></input>
          <input
            type="text"
            name="type"
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
