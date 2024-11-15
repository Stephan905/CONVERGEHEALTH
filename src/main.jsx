import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutRoute from "./AboutRoute.jsx";
import { AnimationProvider } from "./AnimateContext.jsx";
import './index.css';
import HomeRoute from "./HomeRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutRoute />} />
        </Routes>
      </BrowserRouter>
    </AnimationProvider>
  </StrictMode>
);
