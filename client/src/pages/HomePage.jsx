import React from 'react'
import Events from '../components/Events'
import Hero from '../components/Hero/Hero'
import  Category  from '../components/Category'
export default function HomePage() {
  return (
    <div>
        {/* <Events/> */}
        <Hero/>
        <Events/>
        <Category/>
    </div>
  )
}
