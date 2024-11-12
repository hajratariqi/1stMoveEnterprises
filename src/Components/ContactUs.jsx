import React from 'react'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


const ContactUs = () => {
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
<div className='my-20'>
    <div className='container mx-auto'>
            <h1 className='font-merriweather text-center font-bold  text-3xl md:text-4xl '>We'd love to hear from you </h1>
            <p className='text-gray-600 text-center max-w-xs mx-auto mt-4'>We appreciate your trust in us. Your satisfaction is our top priority.</p>

            <div className="flex justify-center mt-10">
                <div className='w-2/4 bg-gray-50 p-6 py-10'>
                    <h2 className='text-xl font-bold'>Contact Us</h2>
                    <p className='text-sm text-gray-600'>We'd love to hear from you. Please fill out this form.</p>
                    <input type="text" name="name" className='block border w-full mt-5 p-3 bg-white placeholder:text-black rounded-xl' placeholder='Your Name'/>
                    <input type="email" name="email" className='block border w-full mt-5 p-3 bg-white placeholder:text-black rounded-xl' placeholder='Your Email'/>
                    <textarea name="yourMessage" className='block border w-full mt-5 p-3 bg-white -xl'>Your Message</textarea>
                </div>
            <div className='md:w-2/5 mx-auto'>
                <h1 className='text-xl font-bold'>Get in Touch</h1>
                <p className='text-gray-600 text-sm'>You can also reach us using the following contact information:</p>
                {contactInfo.map((info, index)=>(
                    <div key={index} className='shadow-sm p-6 flex gap-2 items-center mt-5'>
                        <div className='p-3 bg-gray-100 text-xl'>{info.icon}</div>

                        <div>
                            <a href={info.path} target='_black'>
                                <h3>{info.contactName}</h3>
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