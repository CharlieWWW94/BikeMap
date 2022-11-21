import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import logo from "./images/bicycle-basket.png";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [logInStatus, setLogInStatus] = useState(false);
  const [userDetails, setUserDetails] = useState("");
  //Check if user session is already active
  axios.defaults.withCredentials = true;

  async function checkLogIn() {
    const res = await axios.get("http://127.0.0.1:5001/user/login");
    if (res.data.loggedIn) {
      console.log(res.data);
      setUserDetails(res.data.user);
      setLogInStatus(true);
    } else {
      setLogInStatus(false);
    }
  }

  useEffect(() => {
    checkLogIn();
  }, []);

  return (
    <Wrapper>
      <Navbar
        image={logo}
        userDetails={userDetails}
        logInStatus={logInStatus}
        setLogInStatus={setLogInStatus}
        setUserDetails={setUserDetails}
      />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 checkLogIn={checkLogIn} />} />
        <Route path="/5" element={<Page5 userDetails={userDetails} />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
