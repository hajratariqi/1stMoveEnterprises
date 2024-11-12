import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className="container mx-auto p-6">
            <div className="flex items-center justify-between gap-10">
                <div>
                    <img src='https://framerusercontent.com/images/lg5HFPHgvIKQh0U35IwOnv5uqI.png' alt="logo" className='w-52' />
                </div>
                <div className='flex gap-5 text-sm'>
                        <Link to='/home'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/MissonVisson'>Misson & Vission</Link>
                        <Link to='/ourServices'>Our Services</Link>
                        <Link to='/terms'>Terms</Link>
                        <Link to='/privacy'>Privacy</Link>
                </div>

            <div className='flex gap-5'>
                <Link className='p-2 rounded-full bg-black text-white' to="https://www.facebook.com" target="_blank">
                    <FaFacebook size={20} />
                </Link>
                <Link className='p-2 rounded-full bg-black text-white' to="https://www.instagram.com" target="_blank">
                    <FaInstagram size={20} />
                </Link>
                <Link className='p-2 rounded-full bg-black text-white' to="https://twitter.com" target="_blank">
                    <FaTwitter size={20} />
                </Link>
                <Link className='p-2 rounded-full bg-black text-white' to="https://www.linkedin.com" target="_blank">
                    <FaLinkedin size={20} />
                </Link>
            </div>

            </div>
        </div>
        <div className='border-t p-7 text-center '>
            1stmoveenterprises - © 2024 All Rights Reserved
            <p className='text-sm font-normal mt-2'>made by ahmedrAshraf team</p>
        </div>
    </div>
  )
}

export default Footer