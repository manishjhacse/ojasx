import React from 'react'
import Events from '../components/Events'
import Hero from '../components/Hero/Hero'
import  Category  from '../components/Category'
import About from '../components/About/About'
import Navbar from '../components/Navbar'
import  Footer  from '../components/Footer'
import FAQ from '../components/FAQ'
export default function HomePage() {
  return (
    <div>
        {/* <Events/> */}
        {/* <Navbar/> */}
        <Hero/>
        <Events/>
        <Category/>
        <About/>
        <FAQ/>
        <Footer/>
    </div>
  )
}
