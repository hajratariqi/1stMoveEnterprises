import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto my-20 flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-2/4'>
            <img src="https://bluebuilding.es/wp-content/uploads/2014/10/IMG20210520194900-Grande.jpg" alt="about image" className='rounded-md' />
        </div>

        <div className='md:w-2/5'>
            <h1 className='font-merriweather font-bold  text-3xl md:text-4xl '>About 1st Move Enterprises</h1>
            <p className='text-lg my-7 font-semibold font-poppins'>One of the leading distributors of Pakistan dealing general goods, cosmetics, herbal products, garments and textiles good, mobile phones and vehicles.</p>
            <p className='text-gray-600 '>1st Move Enterprises, a prominent player in Pakistan's distribution landscape,
                stands out for its comprehensive range of offerings. From general goods to
                cosmetics, herbal products, garments, textiles, mobile phones, and vehicles, we
                cater to diverse consumer needs. Our commitment to excellence is evident in our
                unwavering focus on quality and reliability. With a track record of delivering
                satisfaction, we continue to set benchmarks in the industry, ensuring trust and
                reliability in every transaction.
            </p>
        </div>
      
    </div>
  )
}

export default About
