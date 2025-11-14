import React from 'react'
import business from '../assets/business.jpg'

const Banner = ({id}) => {
  return (
    <div id={id} className='relative w-full'>

            <img src={business} alt="banner" className='w-full h-[70vh] object-cover'/>
            <div className='inset-0 absolute bg-black opacity-40 h-full'></div>

        <div className='max-w-2xl absolute p-5 text-white top-0 text-center w-full mx-auto left-0 right-0 flex flex-col justify-center items-center h-full'>
            <h1 className='text-5xl md:text-7xl font-bold font-merriweather capilize'>Make your 1st Move to bring success!</h1>
            <p className='md:mt-10 mt-5 text-sm md:text-lg'>One of the leading distributors of Pakistan dealing in general goods, cosmetics, herbal products, garments, textiles, mobile phones, vehicles, industrial machinery, and jewellery & cosmetics manufacturing and supply.</p>
        </div>

    </div>
  )
}

export default Banner