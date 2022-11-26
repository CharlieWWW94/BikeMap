import { useState } from "react";
import Name from "../components/Name";
import Location from "../components/Location";
import BikeInfo from "../components/BikeInfo";

export default function Page5(props) {
  const [focalView, setFocalView] = useState(0);
  const [signUpInfo, setSignUpInfo] = useState([]);

  function moveView(newInfo) {
    setSignUpInfo([...signUpInfo, newInfo]);
    if (focalView < 2) {
      setFocalView(focalView + 1);
    }
  }

  const views = [
    <Name moveView={moveView} />,
    <Location moveView={moveView} />,
    <BikeInfo moveView={moveView} />,
  ];

  return views[focalView];
}
