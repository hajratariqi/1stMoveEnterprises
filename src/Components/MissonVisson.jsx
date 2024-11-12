import React from 'react'
import Grow from '../assets/grow.jpg'
const MissonVisson = () => {
  return (
    <div className='container p-6 mx-auto my-20 flex gap-5 flex-col md:flex-row justify-between items-center'>
      <div className='md:w-2/4'>
        <h1 className='font-merriweather text-center md:text-start font-bold  text-3xl md:text-4xl '>Vision & Mission</h1>
        <p className='my-4 text-gray-600 text-center md:text-start font-semibold font-poppins'>Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication. Remember all things are possible for those who believe</p>
        <h3 className='text-2xl font-bold mb-3'>Our Vision</h3>
        <p className='text-gray-600 text-sm  text-center md:text-start'>At 1st Move Enterprises, our vision is to
          revolutionize the distribution sector in Pakistan by
          becoming the foremost choice for consumers and
          partners alike. We aspire to continuously innovate
          and diversify our offerings while upholding the
          highest standards of quality and reliability.
          Through strategic growth and a customer-centric
          approach, we aim to foster lasting relationships
          and drive sustainable development in the
          communities we serve. Our ultimate goal is to be
          recognized as the epitome of excellence and
          integrity in every aspect of our operations.
        </p>

        <h3 className='text-2xl font-bold mt-5 mb-3'>Our Misson</h3>
        <p className='text-gray-600 text-sm  text-center md:text-start'> 
          At 1st Move Enterprises, our mission is to
        consistently exceed customer expectations by
        delivering a diverse range of high-quality products
        with efficiency and reliability. We are committed
        to fostering mutually beneficial partnerships and
        contributing positively to the communities we
        serve. Through innovation and continuous
        improvement, we strive to set new standards of
        excellence in the distribution industry while
        maintaining integrity and sustainability in all our
        endeavors.
        </p>
      </div>

      <div className='md:w-2/4 h-[500px]'>
        <img src={Grow} alt="our mission and visson" className='w-full rounded-md border-8 border-gray-200 h-full bg-red-300 object-cover'/>
      </div>
    </div>
  )
}

export default MissonVisson