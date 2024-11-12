import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className="container mx-auto">
            <div className="flex md:flex-row flex-col  items-center mb-5 justify-between gap-10">
                <div>
                    <img src={Logo} alt="logo" className='w-52' />
                </div>
                <div className='flex flex-wrap gap-5 justify-center'>
                        <Link to='/home'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/MissonVisson'>Misson & Vission</Link>
                        <Link to='/ourServices'>Our Services</Link>
                </div>

            <div className='flex flex-wrap gap-5'>
                <Link className='p-2 rounded-full bg-black text-white' to="https://www.facebook.com/1stmoveenterprises" target="_blank">
                    <FaFacebook size={20} />
                </Link>
                <Link className='p-2 rounded-full bg-black text-white' to="https://www.instagram.com/1stmoveenterprises" target="_blank">
                    <FaInstagram size={20} />
                </Link>
                <Link className='p-2 rounded-full bg-black text-white' to="https://twitter.com/1stmoveenterprises" target="_blank">
                    <FaTwitter size={20} />
                </Link>
                <Link className='p-2 rounded-full bg-black text-white' to="https://www.linkedin.com/1stmoveenterprises" target="_blank">
                    <FaLinkedin size={20} />
                </Link>
            </div>

            </div>
        </div>
        <div className='border-t p-7 text-center flex items-center justify-between'>
            <Link to='https://hybridinnovations.vercel.app/' target='_blank'><p className='font-normal mt-2'>Developed by <span className='text-black font-medium'>Hybrid Innovations</span> </p></Link>
            <p>1stmoveenterprises - © 2024 All Rights Reserved</p>
            <p>Terms & condition</p>
        </div>
    </div>
  )
}

export default Footer