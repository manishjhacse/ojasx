import { Toaster } from "react-hot-toast";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createevent" element={<CreateEvent />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
