import account from "../images/account-circle.png";

export default function Name(props) {
  function clickHandler(event) {
    event.preventDefault();
    props.setFocalView(props.focalView + 1);
  }
  return (
    <div className="card column is-4 is-offset-4 mt-6 is-flex is-flex-direction-column is-justify-content-center">
      <div className="is-flex is-justify-content-center mt-5">
        <img className="image is-32x32 is-fullwidth" src={account}></img>
      </div>
      <header className="is-flex is-justify-content-center">
        <p className="title is-5 mt-2">What's your name?</p>
      </header>
      <div className="card-content is-flex is-flex-direction-column is-justify-content-center">
        <form>
          <input
            type="text"
            name="firstName"
            className="input"
            placeholder="First Name"
          ></input>
          <input
            type="text"
            name="surName"
            className="input mt-5"
            placeholder="Surname"
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
