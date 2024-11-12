import Logo from '../assets/Logo.png';
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
          if (open) {
            setOpen(false);
          }};
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [open]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Our Mission', path: '/blog' },
        { name: 'Our Vision', path: '/press' },
        { name: 'Contact Us', path: '/contactUs' }
      ];
  return (
    <div className='px-8 items-center w-full h-20 sticky top-0 bg-white z-50 shadow-sm'>
        <div className="container flex justify-between items-center h-full  mx-auto">
        <div className='flex items-center'>
            <img src={Logo} alt="Logo" className='w-40 h-auto object-cover' />
        </div>
        </div>
    </div>
  )
}

export default Header