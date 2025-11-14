import React from 'react'

const About = ({id}) => {
  return (
    <div id={id} className='container p-6 mx-auto my-20 flex gap-5 flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-2/4'>
            <img src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2024/03/01115727/Best-About-Us-Page-Examples.jpg" alt="about" className='rounded-md' />
        </div>

        <div className='md:w-2/5'>
            <h1 className='font-merriweather text-center md:text-start font-bold  text-3xl md:text-4xl '>About 1st Move Enterprises</h1>
            <p className=' my-4 text-gray-600 text-center md:text-start font-semibold font-poppins'>1st Move Enterprises is one of Pakistan’s leading distributors, dealing in general goods, cosmetics, herbal products, garments and textiles, mobile phones, and vehicles. The company has also expanded its operations into the import and supply of industrial machinery and equipment, as well as the manufacturing and distribution of jewellery and cosmetic products.</p>
            <p className='text-gray-600 text-center !leading-relaxed md:text-start text-sm'>As a prominent player in Pakistan’s distribution landscape, 1st Move Enterprises stands out for its diverse and comprehensive range of offerings. From consumer products to industrial supplies, we cater to a wide spectrum of market needs with a focus on quality, innovation, and reliability. <br />
            Our unwavering commitment to excellence and customer satisfaction has enabled us to set benchmarks in the industry. With a proven track record of delivering dependable products and services, we continue to strengthen our reputation for trust, reliability, and performance in every transaction.
            </p>
        </div>
      
    </div>
  )
}

export default About
