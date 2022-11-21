import { Link } from "react-router-dom";
import account from "../images/account-circle(1).png";
import axios from "axios";

export default function UserDropDown(props) {
  async function logout() {
    const res = await axios.get("http://127.0.0.1:5001/user/logout");
    console.log("Well its clicking");
    console.log(res.data);
    if (!res.data.loggedIn) {
      console.log("we are getting here too");
      props.setUserDetails("");
      props.setLogInStatus(false);
    }
  }
  return (
    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
        <a
          className="button ml-3 mr-3 is-outlined is-primary"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <img className="ml-0 mr-2" src={account}></img>
          {props.userDetails}
        </a>
      </div>
      <div class="dropdown-menu mr-3" id="dropdown-menu3" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Account
          </a>
          <a href="#" class="dropdown-item">
            Your Bikes
          </a>
          <a href="#" class="dropdown-item has-background-warning ">
            Messages
          </a>
          <a
            href="#"
            class="dropdown-item has-background-danger-light has-text-danger"
          >
            Report a theft
          </a>
          <a href="#" onClick={logout} class="dropdown-item has-text-link">
            Log out
          </a>
        </div>
      </div>
    </div>
  );
}
