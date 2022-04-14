import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monitor from "./pages/Monitor/Monitor";
import StockDetails from "./pages/StockDetails/StockDetails";

function App() {
  return (
    <>
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
