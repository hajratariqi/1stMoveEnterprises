import React from 'react'
import About from '../Components/About'
import  Banner from '../Components/Banner'
import OurServices from '../Components/OurServices'
import MissonVisson from '../Components/MissonVisson'
const Home = () => {
  return (
    <div>
        <Banner/>
        <About/>
        <MissonVisson/>
        <OurServices/>
    </div>
  )
}

export default Home