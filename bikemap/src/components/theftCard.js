import parkImage from "../images/bp1.jpg";
import parkImage2 from "../images/bp2.jpg";
import safety from "../images/shield.png";
import camera from "../images/cctv.png";
import pedestrian from "../images/walk.png";
import star from "../images/star.png";
import dateIcon from "../images/calendar.png";
import timeIcon from "../images/clock.png";
import serial from "../images/pound-box.png";
import FormFooter from "./FormFooter";
import { useState, useEffect } from "react";
export default function TheftCard(props) {
  const [displayTipOff, setDisplayTipOff] = useState(false);

  function toggleTipOff(event) {
    event.preventDefault();
    displayTipOff ? setDisplayTipOff(false) : setDisplayTipOff(true);
  }

  let rating = [];
  for (let i = 0; i < props.info.safety; i++) {
    rating.push(1);
  }

  return (
    <div className="card mb-5 m-3">
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
            <span>{props.info.dateOfTheft.toString().slice(0, 10)}</span>
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
        <p class="column">
          Seen it for sale?{" "}
          <a onClick={toggleTipOff}>
            <span className="has-text-link">Inform the owner.</span>
          </a>
        </p>
      </div>
      {displayTipOff ? <FormFooter /> : ""}
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
