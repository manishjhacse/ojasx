import { Toaster } from "react-hot-toast";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import HomePage from "./pages/HomePage";
import SignUp from "./SignUpPage/SignUp";
export default function App() {
  return (
    <div className="prevent-select">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
