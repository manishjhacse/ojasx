import React from 'react'
import './style.css'
import logo from './logo.png'
const About = () => {
    return (
        <>
            <div class="container">
                <div class="heading">
                    <span>YOU MIGHT BE</span><br />
                    <span>THINKING WHAT IS</span><br />
                    <span class="heading-blue">OJAS'X<span class="heading-white">?</span></span>
                </div>
                <div class="content content-responsive">
                    OJAS'X is the annual tech fest organized by our college, where students and tech enthusiasts come together to showcase their innovations, participate in competitions, attend workshops, and much more. It's a platform to connect, learn, and grow. Various events, guest lectures, and hands-on activities are planned to make it an unforgettable experience. We aim to inspire and challenge participants, fostering a spirit of innovation and collaboration. Join us to explore the latest in technology and to push the boundaries of what’s possible.
                </div>
                <div class="about-section">
                    <div class="about-text">
                        <h2 class="about-heading">ABOUT</h2>
                        <p class="p-responsive">
                            OJAS'X is not just an event, it's an experience. From coding challenges to robotic competitions, from technical talks to hands-on workshops, OJAS'X offers something for everyone. Join us to explore the future of technology and unleash your potential. The event is designed to cater to various interests and skill levels, ensuring there's something for everyone. Whether you're a beginner or an expert, you'll find opportunities to learn, compete, and showcase your talents.
                        </p>
                    </div>
                    <div class="about-image">
                        <img src={logo} alt="OJAS'X Tech Fest" />
                    </div>
                </div>
                <div class="explore overflow-hidden">
                    <div class="explore-text explore-text-1 aimate-text">
                        <span className='text-[#9000FF]'>EXPLORE AND DISCOVER</span> <span className='text-white'>EXPLORE AND DISCOVER</span> <span className='text-[#9000FF]'>EXPLORE AND DISCOVER</span> <span className='text-white'>EXPLORE AND DISCOVER</span>
                        <span className='text-[#9000FF]'>EXPLORE AND DISCOVER</span> <span className='text-white'>EXPLORE AND DISCOVER</span>
                        <span className='text-[#9000FF]'>EXPLORE AND DISCOVER</span> <span className='text-white'>EXPLORE AND DISCOVER</span>
                    </div>
                    <div class="explore-text explore-text-2 aimate-text-2">
                        <span className='text-[#9000FF]'>OJAS'X TECH FEST</span>  <span className='text-white'>OJAS'X TECH FEST</span>
                        <span className='text-[#9000FF]'>OJAS'X TECH FEST</span>  <span className='text-white'>OJAS'X TECH FEST</span>
                        <span className='text-[#9000FF]'>OJAS'X TECH FEST</span>  <span className='text-white'>OJAS'X TECH FEST</span>
                        <span className='text-[#9000FF]'>OJAS'X TECH FEST</span>  <span className='text-white'>OJAS'X TECH FEST</span>
                        <span className='text-[#9000FF]'>OJAS'X TECH FEST</span>  <span className='text-white'>OJAS'X TECH FEST</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About