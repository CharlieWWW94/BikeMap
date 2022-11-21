import Login from "../components/Login";

export default function Page4(props) {
  return (
    <section className="columns">
      <Login checkLogIn={props.checkLogIn} />
    </section>
  );
}
