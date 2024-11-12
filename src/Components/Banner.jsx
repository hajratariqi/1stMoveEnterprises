import React from 'react'
import Growth from '../assets/grow.jpg'
import business from '../assets/business.jpg'

const Banner = () => {
  return (
    <div className='relative w-full'>

            <img src={business} alt="banner" className='w-full h-[70vh] object-cover'/>
            <div className='inset-0 absolute bg-black opacity-25 h-full'></div>

        <div className='max-w-2xl absolute text-white top-0 text-center w-full mx-auto left-0 right-0 flex flex-col justify-center items-center h-full'>
            <h1 className='text-7xl font-bold capilize'>Make your 1stMove to bring success!</h1>
            <p className='mt-10 text-lg'>One of the leading distributors of Pakistan dealing general goods, cosmetics, herbal products, garments and textiles good, mobile phones and vehicles.</p>
        </div>

    </div>
  )
}

export default Banner
