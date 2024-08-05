import React from "react";
import "./Footer.css";
import logo from "../assests/logo.png";
export default function Footer() {
  return (
    <>
      <div className="footer-section pt-5 pb-5 font-poppins">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center">
                <img
                  src={logo}
                  alt="Ecommerce Logo"
                  className="image-footer w-50"
                />
              </div>
              <div className="text-center p-3 flex flex-col items-start  gap-2">
                <p className="footer-paragraph font-semibold">Get in Touch</p>
                <a
                  className="footer-heading text-base text-white no-underline"
                  href="mailto:ojasxbpmce2024@gmail.com"
                >
                  ojasxbpmce2024@gmail.com
                </a>
                <a
                  className="footer-heading text-base text-white no-underline"
                  href="callto:6202586811"
                >
                  +91 6202586811
                </a>
                {/* <h1 className="footer-heading">darpan@aec.ac.in</h1> */}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h1 className="footer-heading-title font-semibold">
                Get to Know us
              </h1>
              <p className="footer-title font-medium">About us</p>
              <p className="footer-title font-medium">FAQs</p>
              <p className="footer-title font-medium">Press Releases</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h1 className="footer-heading-title font-semibold ">
                Quick Links
              </h1>
              <p className="footer-title font-medium">Home</p>
              <p className="footer-title font-medium">Events</p>
              <p className="footer-title font-medium">Contacts</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 flex flex-col items-start">
              <h1 className="footer-heading-title">#OJAS'X24</h1>
              <div className="text-center p-3">
                <a href="https://www.google.com">
                  <i className="fa-brands fa-google"></i>
                </a>
                <a href="https://www.sarkariresult.com">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
