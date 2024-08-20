import "./App.css";
import Home from "./pages/Home.jsx";
import DetailPortfolio from "./pages/DetailPortfolio.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Experience from "./pages/Experience.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<DetailPortfolio />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
