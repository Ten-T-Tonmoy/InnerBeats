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
import { Login } from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import UserHistory from "./pages/UserHistory/UserHistory";
import { useAuth } from "./context/authContext";

const App = () => {
  const { user, loading } = useAuth();
  // console.log("authenticated", user);
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col justify-between">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/home" element={<Landingpage />} />
        <Route path="/doctors" element={<Doctorspage />} />
        <Route path="/ai" element={<Assistant />} />
        <Route path="/login" element={user ? <Landingpage /> : <Login />} />
        <Route path="/signup" element={user ? <Landingpage /> : <SignUp />} />
        <Route path="/login" element={user ? <Landingpage /> : <Login />} />
        <Route path="/history" element={<UserHistory />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
