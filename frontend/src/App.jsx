import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landingpage from "./pages/landing/landingpage";
import Doctorspage from "./pages/Doctors/Doctors";
import Aboutpage from "./pages/about/aboutpage";
import Mainpage from "./pages/main/mainpage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Assistant from "./pages/Ai/Assistant";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <div className="gap-4 flex  flex-col">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/home" element={<Landingpage />} />
          <Route path="/doctors" element={<Doctorspage />} />
          <Route path="/ai" element={<Assistant />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
