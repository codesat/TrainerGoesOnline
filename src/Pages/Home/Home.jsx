import React from 'react'
import './home.css'
import Topbar from '../../Components/Topbar/Topbar'
import Hero from '../../Components/Hero/Hero'
import Featured from '../../Components/Featured/Featured'
import Details from '../../Components/Details/Details'
import Personal from '../../Components/Personal/Personal'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Mission from '../../Components/Mission/Mission'
import Call from '../../Components/Call/Call'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
    <div className="bighero">
    <Topbar/>
    <Hero/>
    </div>
    <Featured/>
    <Details/>
    <Personal/>
    <Testimonials/>
    <Mission/>
    <Call/>
    <Footer/>
    </div>
  )
}

export default Home