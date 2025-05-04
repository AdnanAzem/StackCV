import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Home/Dashboard";
import EditResume from "./pages/ResumeUpdate/EditResume";
import LandingPage from "./pages/LandingPage";


const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume/:resumeId" element={<EditResume />} />
        </Routes>
      </div>
      <Toaster 
        roastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          }
        }}
      />
    </>
  );
};

export default App;
