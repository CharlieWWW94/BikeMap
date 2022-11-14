export default function Wrapper(props) {
  return <div className={props.styling}>{props.children}</div>;
}
