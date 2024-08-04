import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios';
export default function SignUp() {
    const [optSent, setOptSent] = useState(false);
    const [buttonText, setButtonText] = useState("Sign Up");
    const [optText, setOptText] = useState("Send OTP");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
        otp: "",
        registraion_no: "",
        college: ""
    });
    const collegeOptions = ['	 BHAGALPUR COLLEGE OF ENGINEERING, BHAGALPUR', '	 GAYA COLLEGE OF ENGINEERING, GAYA', 'DARBHANGA COLLEGE OF ENGINEERING, DARBHANGA',
        ' MOTIHARI COLLEGE OF ENGINEERING, MOTIHARI', ' LOK NAYAK JAI PRAKASH INSTITUTE OF TECHNOLOGY, CHAPRA', ' SERSHAH ENGINEERING COLLEGE, SASARAM, ROHTAS', ' RASHTRAKAVI RAMDHARI SINGH DINKAR COLLEGE OF ENGINEERING, BEGUSARAI'
        , ' SUPAUL COLLEGE OF ENGINEERING, SUPAUL', ' BAKHTIYARPUR COLLEGE OF ENGINEERING, PATNA', ' SITAMARHI INSTITUTE OF TECHNOLOGY, SITAMARHI', ' PURNEA COLLEGE OF ENGINEERING, PURNEA'
        , ' B. P. MANDAL COLLEGE OF ENGINEERING, MADHEPURA', ' KATIHAR ENGINEERING COLLEGE, KATIHAR', 'SAHARSA COLLEGE OF ENGINEERING, SAHARSA', 'GOVERNMENT ENGINEERING COLLEGE, JAMUI'
        , '	 GOVERNMENT ENGINEERING COLLEGE, BANKA', ' GOVERNMENT ENGINEERING COLLEGE, VAISHALI', ' GOVERNMENT ENGINEERING COLLEGE, NAWADA', ' GOVERNMENT ENGINEERING COLLEGE, KISHANGANJ', ' GOVERNMENT ENGINEERING COLLEGE, MUNGER'
        , 'GOVERNMENT ENGINEERING COLLEGE, SHEOHAR', 'GOVERNMENT ENGINEERING COLLEGE, WEST CHAMPARAN', ' GOVERNMENT ENGINEERING COLLEGE, AURANGABAD'
        , 'GOVERNMENT ENGINEERING COLLEGE, KAIMUR', 'GOVERNMENT ENGINEERING COLLEGE, GOPALGANJ', ' GOVERNMENT ENGINEERING COLLEGE, MADHUBANI'
        , 'GOVERNMENT ENGINEERING COLLEGE, SIWAN', ' GOVERNMENT ENGINEERING COLLEGE, JEHANABAD', ' GOVERNMENT ENGINEERING COLLEGE, ARWAL', ' GOVERNMENT ENGINEERING COLLEGE, KHAGARIA'
        , ' GOVERNMENT ENGINEERING COLLEGE, BUXAR', '	 GOVERNMENT ENGINEERING COLLEGE, BHOJPUR', 'GOVERNMENT ENGINEERING COLLEGE, SHEIKHPURA'
        , 'GOVERNMENT ENGINEERING COLLEGE, LAKHISARAI', ' GOVERNMENT ENGINEERING COLLEGE, SAMASTIPUR', ' MUZAFFARPUR INSTITUTE OF TECHNOLOGY, MUZAFFARPUR'
        , ' Shri Phanishwar Nath Renu Engineering College, Araria', ' VIDYA VIHAR INSTITUTE OF TECHNOLOGY,PURNIA', 'NETAJI SUBHAS INSTITUTE OF TECHNOLOGY,BIHTA'

    ]
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    async function signup() {
        setButtonText("Signing up...");
        const url = import.meta.env.VITE_BASE_URL;
        try {
            const res = await axios.post(`${url}/signup`, formData, {
                withCredentials: true,
            });
            toast.success("Account created")
            //   navigate("/login");
        } catch (err) {
            toast.error(err.response.data.message);

        }
        setButtonText("Sign up");
    }
    function resetFormData() {
        const blankFormData = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobile: "",
            otp: "",
            registraion_no: "",
            college: ""
        }
        setFormData(blankFormData);
        setOptSent(false)
        setButtonText("Sign Up")
        setOptText("Send OTP")
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Password & Confirm password does not match");
        }
        await signup();
        resetFormData();

    }
    async function handleOTP(e) {
        e.preventDefault();
        if (
            formData.name == "" ||
            formData.email == "" ||
            formData.confirmPassword == "" ||
            formData.mobile == "" ||
            formData.registraion_no == "" ||
            formData.college == ""
        ) {
            toast.error("please fill all the details");
            return;
        }
        if (formData.password != formData.confirmPassword) {
            toast.error("Password & Confirm password does not match");
            return;
        }
        const url = import.meta.env.VITE_BASE_URL;
        toast("Sending OTP")
        try {
            const res = await axios.post(`${url}/sendotpforsignup`, formData, {
                withCredentials: true,
            });
            setOptSent(true);
            setOptText("Resend OTP");
            toast.success("OTP sent");
        } catch (err) {
            toast.error(err.response.data.message);
        }

    }


    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <form
                action=""
                className="text-black flex flex-col justify-center items-center gap-3"
            >
                {/* name */}
                <div className="text-white">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        className="px-2 py-1.5 rounded-md outline-none border border-black bg-transparent text-white"
                        type="name"
                        name="name"
                        placeholder="Enter your Name*"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                {/* registration no */}
                <div className="text-white">
                    <label htmlFor="registraion_no">Registration No.</label>
                    <input
                        id="registraion_no"
                        className="px-2 py-1.5 rounded-md outline-none border border-black bg-transparent text-white"
                        type="text"
                        name="registraion_no"
                        placeholder="Enter Registraion No.*"
                        value={formData.registraion_no}
                        onChange={handleChange}
                    />
                </div>
                {/* college */}
                <select
                    id="college"
                    className="px-2 py-1.5 md:w-[150px] w-[200px] rounded-md outline-none border border-black bg-transparent text-white"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                >
                    <option className="md:w-[150px] bg-black w-[200px]" value="">
                        Select Your College
                    </option>
                    {
                        collegeOptions.map((college) => {
                            return <option
                                className="md:w-[150px] bg-black  w-[200px]"
                                value={college}
                            >
                                {college}
                            </option>
                        })
                    }
                </select>
                {/* email */}
                <div className="text-white">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="px-2 py-1.5 rounded-md outline-none border border-black bg-transparent text-white"
                        type="email"
                        name="email"
                        placeholder="Enter your email*"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                {/* password */}
                <div className="text-white">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="px-2 py-1.5 rounded-md outline-none border border-black bg-transparent text-white"
                        type="password"
                        name="password"
                        placeholder="Create Password*"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {/* confirm password */}
                <div className="text-white">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        className="px-2 py-1.5 rounded-md outline-none border border-black bg-transparent text-white"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password*"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                {/* mobile */}
                <div className="text-white">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        id="mobile"
                        className="px-2 py-1.5 rounded-md outline-none border border-black bg-transparent text-white"
                        type="text"
                        name="mobile"
                        placeholder="Enter your Phone no."
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </div>

                {/* otp field */}
                {optSent && (
                    <div className="text-white">
                        <label htmlFor="otp">OTP</label>
                        <input
                            id="otp"
                            className="px-2 py-1.5 rounded-md outline-none border border-black bg-transparent text-white"
                            type="text"
                            name="otp"
                            placeholder="Enter otp send to your mail"
                            value={formData.otp}
                            onChange={handleChange}
                        />
                    </div>
                )}
                {/* send otp and signup button */}
                <div className="flex justify-between gap-3">
                    <button
                        onClick={handleOTP}
                        className="px-2 py-1.5 rounded-md outline-none border text-white border-black hover:bg-purple-800 hover:border-purple-800 transition-all duration-200"
                    >
                        {optText}
                    </button>
                    {optSent && (
                        <button
                            onClick={handleSubmit}
                            className="px-2 py-1.5 rounded-md outline-none border text-white border-black hover:bg-purple-800 hover:border-purple-800 transition-all duration-200"
                        >
                            {buttonText}
                        </button>
                    )}
                </div>
                {/* already have an account option */}
                <div className="text-[15px] text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold cursor-pointer">
                        <p>Login</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}