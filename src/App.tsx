import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/molecule/Header";
import ScrollToTop from "./components/molecule/ScrollToTop";
import About from "./pages/About";

const App: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;
