import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import account from "../images/account-circle.png";
import axios from "axios";

import Wrapper from "./Wrapper";
import Alert from "./Alert";

export default function Login(props) {
  const [pageFunc, setPageFunc] = useState("Log in");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  async function logUserIn(uName, Pwd) {
    const route = pageFunc === "Log in" ? "login" : "create";
    const status = await axios
      .post(`http://127.0.0.1:5001/user/${route}`, {
        username: uName,
        password: Pwd,
      })
      .catch(function (error) {
        setAlert([error.response.data, "is-danger is-light"]);
      });

    if (status) {
      await props.checkLogIn();
      if (pageFunc === "Log in") {
        navigate("/");
      } else {
        navigate("/5");
      }
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const pw = event.target.password.value;
    const uname = event.target.username.value;
    logUserIn(uname, pw);
  }

  function changeFormType() {
    pageFunc === "Log in"
      ? setPageFunc("Create Account")
      : setPageFunc("Log in");
  }

  return (
    <div className="card column is-4 is-offset-4 mt-6 is-flex is-flex-direction-column is-justify-content-center">
      {alert ? <Alert msg={alert[0]} type={alert[1]} /> : ""}
      <div className="is-flex is-justify-content-center mt-5">
        <img className="image is-32x32 is-fullwidth" src={account}></img>
      </div>
      <header className="is-flex is-justify-content-center">
        <p className="title is-5 mt-2">{pageFunc}</p>
      </header>
      <div className="card-content is-flex is-flex-direction-column is-justify-content-center">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Username or Email"
          ></input>
          <input
            type="password"
            name="password"
            className="input mt-5"
            placeholder="Password"
          ></input>
          <input
            type="submit"
            className="button is-fullwidth mt-5 is-info"
            value="Submit"
          ></input>
        </form>
        <div className="is-flex is-justify-content-center mt-3">
          <a onClick={changeFormType}>
            <p className="is-underlined has-text-link">
              {pageFunc === "Log in" ? "Create Account" : "Log in"}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
