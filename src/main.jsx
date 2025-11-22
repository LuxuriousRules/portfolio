import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './app.jsx'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({duration: 2000, once: false,});

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
);