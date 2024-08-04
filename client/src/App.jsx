import { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import SignUp from "./SignUpPage/SignUp";
=======
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addEvents } from "./store/eventSlice";
>>>>>>> b1506782f70d3ea7302ee8d9c551683d5195fe8e
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
