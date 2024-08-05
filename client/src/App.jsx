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
import Navbar from "./components/Navbar.jsx";
import EventsPage from "./pages/EventsPage.jsx";

import { FaPencilAlt } from "react-icons/fa";
import CartPage from "./pages/CartPage";
import { changeLoggedIn } from "./store/loginSlice";
export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      dispatch(changeLoggedIn(true));
    } else {
      dispatch(changeLoggedIn(false));
    }
  };
  const getAllEvents = async () => {
    const url = import.meta.env.VITE_BASE_URL;
    const response = await axios.get(`${url}/allevents`);
    dispatch(addEvents(response.data.events));
  };
  useEffect(() => {
    isLoggedIn();
    getAllEvents();
  }, []);
  return (
    <div className="prevent-select overflow-hidden px-2">
      <p className="py-[33px]"></p>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/mycart" element={<CartPage />} />
        <Route path="/events" element={<EventsPage />} />

      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
