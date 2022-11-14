import parkImage from "../images/bp1.jpg";
import parkImage2 from "../images/bp2.jpg";
import safety from "../images/shield.png";
import camera from "../images/cctv.png";
import pedestrian from "../images/walk.png";
import star from "../images/star.png";
export default function ParkCard(props) {
  let rating = [];
  for (let i = 0; i < props.info.safety; i++) {
    rating.push(1);
  }

  return (
    <div className="card mb-3">
      <div className="card-image">
        <figure className="image is-2by1">
          <img src={props.info.id % 2 ? parkImage : parkImage2}></img>
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-6">{props.info.name}</p>
        <div className="is-flex flex-direction-column is-flex-wrap-wrap">
          <span className="icon-text mr-6 mb-3">
            <span className="icon">
              <img src={safety}></img>
            </span>
            <span>Safety:</span>
            {rating.map(() => {
              return (
                <span className="icon p-0 m-0">
                  <img src={star}></img>
                </span>
              );
            })}
          </span>
          <span className="icon-text">
            <span className="icon">
              <img src={camera}></img>
            </span>
            <span>CCTV: {props.info.hasCCTV}</span>
          </span>
          <span className="icon-text">
            <span className="icon">
              <img src={pedestrian}></img>
            </span>
            <span>Foot Traffic: {props.info.footTraffic}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
