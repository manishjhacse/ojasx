import { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import HomePage from "./pages/HomePage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addEvents } from "./store/eventSlice";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import ChangePassword from "./pages/ChangePassword";
import Navbar from './components/Navbar/Navbar.jsx';
import { FaPencilAlt } from "react-icons/fa";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllEvents = async () => {
      const url = import.meta.env.VITE_BASE_URL;
      const response = await axios.get(`${url}/allevents`);
      dispatch(addEvents(response.data.events))
    };
    getAllEvents();
  }, []);
  return (
    <div className="prevent-select overflow-hidden px-2">
      <p className="py-[43px]"></p>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/changepassword" element={<ChangePassword />} />

      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
