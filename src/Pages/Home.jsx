import React from 'react'
import About from '../Components/About'
import  Banner from '../Components/Banner'
import ContactUs from '../Components/ContactUs'
import OurServices from '../Components/OurServices'
import MissonVisson from '../Components/MissonVisson'
const Home = () => {
  return (
    <div>
        <Banner/>
        <About/>
        <MissonVisson/>
        <OurServices/>
        <ContactUs/>
    </div>
  )
}

export default Home