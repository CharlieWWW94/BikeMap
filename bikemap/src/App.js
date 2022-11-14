import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/2" element={<Page2 />} />
      <Route path="/3" element={<Page3 />} />
    </Routes>
  );
}

export default App;
