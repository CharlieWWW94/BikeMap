import parkImage from "../images/bp1.jpg";
import parkImage2 from "../images/bp2.jpg";
import safety from "../images/shield.png";
import camera from "../images/cctv.png";
import pedestrian from "../images/walk.png";
import star from "../images/star.png";
import dateIcon from "../images/calendar.png";
import timeIcon from "../images/clock.png";
import serial from "../images/pound-box.png";
export default function TheftCard(props) {
  let rating = [];
  for (let i = 0; i < props.info.safety; i++) {
    rating.push(1);
  }

  return (
    <div className="card mb-3 m-3">
      <div className="card-content columns is-multiline">
        <div className="column is-12">
          <p className="title is-6 mb-2">{props.info.name}</p>
          <span className="icon-text mb-0">
            <span className="icon">
              <img src={serial}></img>
            </span>
            <span>{props.info.serial}</span>
          </span>
        </div>
        <div className="column is-6">
          <span className="icon-text">
            <span className="icon">
              <img src={dateIcon}></img>
            </span>
            <span>Date: {props.info.dateOfTheft}</span>
          </span>
        </div>
        <div className="column is-6">
          <span className="icon-text mb-3">
            <span className="icon">
              <img src={timeIcon}></img>
            </span>
            <span>Time: {props.info.timeOfTheft}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// {
//   id: 1,
//   name: "Red Specialized Allez",
//   serial: "M3A00055",
//   type: "Road Bike",
//   timeOfTheft: 7.45,
//   dateOfTheft: "16/11/22",
//   lat: 51.5081,
//   lng: 0.0759,
// },
