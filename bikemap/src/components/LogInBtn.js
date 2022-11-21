import { Link } from "react-router-dom";
import account from "../images/account-circle(1).png";

export default function LogInButton(props) {
  return (
    <Link to="/4">
      <a className="button ml-3 mr-5 is-outlined is-primary">
        <img className="ml-0 mr-2" src={account}></img>
        Log in
      </a>
    </Link>
  );
}
