import React, { useEffect } from "react";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
// import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Delivery from "./pages/Delivery";

import "./App.css";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route
          path="*"
          element={<p className="text-red-500">Page not found</p>}
        />
      </Route>
    </Routes>
  );
};

export default App;
