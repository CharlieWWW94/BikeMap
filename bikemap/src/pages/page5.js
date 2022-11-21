import { useState } from "react";
import Name from "../components/Name";
import Location from "../components/Location";
import BikeInfo from "../components/BikeInfo";
export default function Page5(props) {
  const [focalView, setFocalView] = useState(0);
  const [signUpInfo, setSignUpInfo] = useState([]);

  const views = [
    <Name
      setSignUpInfo={setSignUpInfo}
      setFocalView={setFocalView}
      focalView={focalView}
    />,
    <Location
      setSignUpInfo={setSignUpInfo}
      setFocalView={setFocalView}
      focalView={focalView}
    />,
    <BikeInfo setSignUpInfo={setSignUpInfo} setFocalView={setFocalView} />,
  ];

  return views[focalView];
}
