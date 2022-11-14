import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import logo from "./images/bicycle-basket.png";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Navbar image={logo} />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
