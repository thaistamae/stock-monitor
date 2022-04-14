import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monitor from "./pages/Monitor/Monitor";
import StockDetailsPage from "./pages/StockDetailsPage/StockDetailsPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monitor />} />
        <Route path="/:ticker" element={<StockDetailsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
