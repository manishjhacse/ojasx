import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <>
      <div className="footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png"
                  alt="Ecommerce Logo"
                  className="image-footer w-50"
                />
              </div>
              <div className="text-center p-3">
                <p className="footer-paragraph">Get in Touch</p>
                <h1 className="footer-heading">darpan@aec.ac.in</h1>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h1 className="footer-heading-title">Get to Know us</h1>
              <p className="footer-title">About us</p>
              <p className="footer-title">FAQs</p>
              <p className="footer-title">Press Releases</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h1 className="footer-heading-title">Quick Links</h1>
              <p className="footer-title">Home</p>
              <p className="footer-title">Events</p>
              <p className="footer-title">Contacts</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h1 className="footer-heading-title">#DARPAN2023</h1>
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
