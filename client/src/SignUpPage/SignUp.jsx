import React, { useState } from 'react';
import './SignUpview.css';
export default function SignUp() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Your College Name');
    const [options] = useState(['	 BHAGALPUR COLLEGE OF ENGINEERING, BHAGALPUR', '	 GAYA COLLEGE OF ENGINEERING, GAYA', 'DARBHANGA COLLEGE OF ENGINEERING, DARBHANGA',
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
    ]);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college_name: "",
        Registration_No: "",
        password: "",
        Confirmpassword:""
    });


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close dropdown after selection
    };

    const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/signup', formData);


            console.log('Signup successful:', response.data);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };





    return (
        <>
            <div className="signup-container">
                {/* <h2>Signup</h2> */}
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}

                        className="signup-input"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}

                        className="signup-input"
                    />
                    <label htmlFor="Registration">Registration No.</label>
                    <input
                        type="Registration"
                        name="Registration"
                        placeholder="Enter your Registration No."
                        value={formData.Registration}
                        onChange={handleChange}

                        className="signup-input"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}

                        className="signup-input"

                    />
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        type="password"
                        name="Confirmpassword"
                        placeholder="Enter your password"
                        value={formData.Confirmpassword}
                        onChange={handleChange}

                        className="signup-input"

                    />
                    <div className="dropdown">
                        <button className="dropdown-toggle" onClick={toggleDropdown}>
                            {selectedOption}

                        </button>

                        {isOpen && (
                            <ul className="dropdown-menu">
                                {options.map((option, index) => (
                                    <li key={index}>
                                        <a href="#" onClick={() => handleOptionClick(option)}>
                                            {option}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className="otp-button">
                        Send  OTP
                    </button>

                    <label htmlFor="password">Enter OTP</label>
                    <input
                        //   type="password"
                        name="Confirmpassword"
                        placeholder="Enter your OTP"
                        //   value={formData.Confirmpassword}
                        //   onChange={handleChange}   

                        className="signup-input"
                    />
                    <button className="signup-button">
                        Sign Up
                    </button>
                </form>
            </div>



        </>
    )
}