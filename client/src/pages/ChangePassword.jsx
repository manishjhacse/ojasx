import axios from "axios";
import React, { useState } from "react";
import NewPassword from "../components/NewPassword";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export default function ChangePassword() {
    const [showFull, setShowFull] = useState(false);
    const [optSent, setOptSent] = useState(false);
    const [optText, setOptText] = useState("Send OTP");
    const [buttonText, setButtonText] = useState("Change password");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        code: "",
    });
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    async function handleOTP(e) {
        e.preventDefault();
        if (formData.email == "") {
            toast.error("please fill all the details");
            return;
        }
        toast("Sending OTP...");
        const url = import.meta.env.VITE_BASE_URL;
        try {
            const res = await axios.post(`${url}/otpforresetpassword`, formData, {
                withCredentials: true,
            });
            setOptSent(true);
            setOptText("Resend OTP");
            toast.success("OTP sent");
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }
    async function handleChangePassword(e) {
        e.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        const url = import.meta.env.VITE_BASE_URL;
        try {
            toast("Changine Password")
            const res = await axios.post(`${url}/changepassword`, formData, {
                withCredentials: true,
            });
            toast.success("Password Changed");
            setTimeout(() => {
                setMessage("");
                navigate("/login");
            }, 3000);
        } catch (err) {
            ;
            err?.response?.data?.message ? toast.error(err.response.data.message) : toast.error("Try again")
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    }
    return (
        <div className=" px-3 text-white flex justify-center items-center min-h-screen overflow-hidden">
            <div className="overflow-hidden bg-black w-[300px]  px-10 bg-opacity-40 backdrop-blur-sm rounded-tl-3xl rounded-tr-lg  rounded-br-3xl rounded-bl-lg">
                <form className="text-black flex flex-col py-20 justify-center items-center gap-3">
                    {!optSent && (
                        <div className="text-white">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="px-2 py-1.5 rounded-md outline-none border border-black bg-transparent text-white"
                                type="email"
                                placeholder="Enter your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    {optSent && (
                        <NewPassword handleChange={handleChange} formData={formData} />
                    )}
                    <p className="w-full text-start text-xs text-red-500 font-bold">
                        {message}
                    </p>
                    <div className="flex  justify-between gap-3">
                        {optSent && (
                            <button
                                onClick={handleChangePassword}
                                className="px-2 text-xs py-1.5 rounded-md outline-none border text-white border-black hover:bg-purple-800 hover:border-purple-800 transition-all duration-200"
                            >
                                {buttonText}
                            </button>
                        )}
                        <button
                            onClick={handleOTP}
                            className="px-2 py-1.5 text-xs rounded-md outline-none border text-white border-black hover:bg-purple-800 hover:border-purple-800 transition-all duration-200"
                        >
                            {optText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
