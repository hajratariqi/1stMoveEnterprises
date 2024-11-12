import React from 'react'

const OurServices = ({id}) => {
  return (
         <div id={id} className='container p-6 mx-auto my-20 flex gap-5 flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-2/4 h-[600px]'>
            <img src="https://www.captivatingthinking.com/wp-content/uploads/2023/07/iStock-1454531939-1024x612.jpg" alt="about image" className='rounded-md h-full w-full object-cover' />
        </div>

        <div className='md:w-2/5'>
            <h1 className='font-merriweather text-center md:text-start font-bold  text-3xl md:text-4xl '>Our Services</h1>
            <p className=' my-4 text-gray-600 text-center md:text-start font-semibold font-poppins'>“It’s not important if you have millions of customers trying your services for one time only, the thing that makes the difference is thousands of customers using your products amillion time and still a million more”</p>
            <p className='text-gray-600 text-center md:text-start text-sm'>1st Move Enterprises, a prominent player in Pakistan's distribution landscape,
                            At 1st Move Enterprises, we pride ourselves on
                offering a comprehensive range of services
                catering to diverse consumer needs. Our portfolio
                includes a wide selection of high-quality general
                goods, ensuring that customers have access to
                essential items for everyday living. Additionally, we
                provide an extensive array of cosmetics and
                herbal products, promoting wellness and beauty.
                For those seeking fashionable attire, our garments
                and textiles division offers trendy and durable
                clothing options. Furthermore, our mobile phone
                department showcases the latest technology,
                keeping our clients connected in today's fast-
                paced world. Lastly, our vehicle segment presents
                a range of reliable options, ensuring individuals
                find transportation solutions that meet their
                needs. With a commitment to excellence and
                customer satisfaction, 1st Move Enterprises strives
                to be your one-stop destination for all your
                shopping requirements. Whether it's everyday
                essentials or luxury indulgences, we aim to exceed
                expectations with our diverse range of products
                and unwavering dedication to quality. Experience
                convenience and reliability with 1st Move
                Enterprises – your trusted partner for all your
                lifestyle needs.
            </p>
            <p className='font-bold text-sm float-right mt-2 italic'>Muhammad Waqas Ahmed</p>
        </div>
    </div>
  )
}

export default OurServices