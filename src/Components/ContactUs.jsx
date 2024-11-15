import React from 'react'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


const ContactUs = ({id}) => {
    const contactInfo = [
        {
            icon: <FaEnvelope/>,
            contactName: 'email',
            link: '1stmoveenterprises@gmail.com',
            path: 'mailto:1stmoveenterprises@gmail.com'
        },
        {
            icon: <FaPhone />,
            contactName: 'Phone',
            link: '+92 3313935940',
            path: 'tel:+92 3313935940'
        },
        {
            icon: <FaMapMarkerAlt />,
            contactName: 'Address',
            link: 'LS 13 14 Sector 5A1 North Karachi, Pakistan',
            path: 'https://maps.app.goo.gl/sbpMzThmWnCR5uc87'
        },
    ]

  return (
<div id={id} className='my-20'>
    <div className='container mx-auto'>
            <h1 className='font-merriweather text-center font-bold  text-3xl md:text-4xl '>We'd love to hear from you </h1>
            <p className='text-gray-600 text-center md:max-w-xs mx-auto mt-4'>We appreciate your trust in us. Your satisfaction is our top priority.</p>

            <div className="flex md:flex-row flex-col gap-5 justify-center mt-10">
                <div className='md:w-2/4 bg-gray-50 p-6 py-10'>
                    <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
                    <p className='text-sm text-gray-600'>We'd love to hear from you. Please fill out this form.</p>
                    <input type="text" name="name" className='block border w-full mt-5 p-3 bg-white placeholder:text-black rounded-xl' placeholder='Your Name'/>
                    <input type="email" name="email" className='block border w-full mt-5 p-3 bg-white placeholder:text-black rounded-xl' placeholder='Your Email'/>
                    <textarea name="yourMessage" className='block border w-full mt-5 p-3 bg-white rounded-xl'>Your Message</textarea>
                    <button className="w-full p-3 bg-black text-white mt-5 rounded-xl">
                        <a href="mailto:1stmoveenterprises@gmail.com" target="_blank" className="block w-full text-center">Send Message</a>
                    </button>

                </div>
            <div className='md:w-2/5 mx-auto p-6'>
                <h1 className='text-2xl font-semibold mb-2'>Get in Touch</h1>
                <p className='text-gray-600 text-sm'>You can also reach us using the following contact information:</p>
                {contactInfo.map((info, index)=>(
                    <div key={index} className='shadow-md rounded-md py-3 p-2 flex gap-5 items-center mt-5'>
                        <div className='p-3 bg-black text-xl text-white rounded-full'>{info.icon}</div>
                        <div>
                            <a href={info.path} target='_black'>
                                <h3 className='font-medium'>{info.contactName}</h3>
                                <p>{info.link}</p>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
            </div>
    </div>            
</div>
  )
}

export default ContactUs