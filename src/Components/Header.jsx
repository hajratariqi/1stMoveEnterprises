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
    <div className='px-8 items-center w-full h-20 sticky top-0 bg-white z-50'>
        <div className="container flex justify-between items-center h-full mx-auto">
        <div className='flex items-center'>
            <img src='https://framerusercontent.com/images/lg5HFPHgvIKQh0U35IwOnv5uqI.png' alt="Logo" className='w-56 h-auto ' />
        </div>

        <div className='text-4xl cursor-pointer md:hidden z-20' onClick={() => setOpen(!open)}>
        {open ? <IoCloseSharp /> : <IoIosMenu />}
        </div>

        <ul className='hidden md:flex space-x-8 font-poppins text-lg'>
        {navItems.map(item => (
          <li key={item.path} className='font-medium'>
            <Link to={item.path}  onClick={() => window.scrollTo(0, 0)} className={`py-2 transition-all ${location.pathname === item.path ? 'bg-black px-4 rounded-sm text-white' : 'hover:text-gray-500-500'}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

        </div>
    </div>
  )
}

export default Header