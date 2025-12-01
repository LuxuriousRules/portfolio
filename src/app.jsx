import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./modules/Header";
import Main from "./modules/Main";
import Shop from "./modules/Shop";
import Faq from "./modules/Faq";


import AOS from "aos";
import "aos/dist/aos.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 2000, once: false});
  }, []);

  useEffect(() => {
    AOS.refresh(); // пересчёт при смене маршрута
  }, [location]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;