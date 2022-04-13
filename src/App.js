import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monitor from "./pages/Monitor/Monitor";
import StockDetails from "./pages/StockDetails/StockDetails";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monitor />} />
        <Route path="/:ticker" element={<StockDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
