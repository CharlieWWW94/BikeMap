export default function Alert(props) {
  return (
    <div className={"notification " + props.type}>
      <button class="delete"></button>
      <p>{props.msg}</p>
    </div>
  );
}
