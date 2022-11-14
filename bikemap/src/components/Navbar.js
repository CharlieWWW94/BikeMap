import { Link } from "react-router-dom";
import map from "../images/map.png";
import warning from "../images/alert.png";

export default function Navbar(props) {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={props.image}></img>
          <p className="title has-text-light is-4 ml-2">BikeLock</p>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/2" className="mr-3">
              <a className="button is-primary">
                <img className="ml-0 mr-2" src={map}></img>Map
              </a>
            </Link>
            <Link to="/3">
              <a className="button">
                <img className="ml-0 mr-2" src={warning}></img>
                Report
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
