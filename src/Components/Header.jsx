import Logo from '../assets/Logo.png';
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    const [open, setOpen] = useState(false);

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
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Our Mission', path: '#misson' },
        { name: 'Our Services', path: '#ourServices' },
        { name: 'Contact Us', path: '#contactUs' }
      ];
  return (
    <div className='px-8 items-center w-full h-24 md:sticky top-0 bg-white z-50 border'>
        <div className="container flex justify-between items-center h-full mx-auto">
        <div className='flex items-center'>
          <img src={Logo} alt="Logo" className='w-44 h-auto ' />
        </div>

        <div className='text-4xl cursor-pointer md:hidden z-20' onClick={() => setOpen(!open)}>
        {open ? <IoCloseSharp /> : <IoIosMenu />}
        </div>

        <ul className='hidden md:flex space-x-8 font-poppins text-lg'>
        {navItems.map(item => (
          <li key={item.path} className='font-medium'>
            <Link smooth to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

        {/* mobbile header */}
        {open && (
            <div className={`h-screen z-40 absolute top-24 left-0 right-0 bg-white  transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden z-10`}>
                <ul className='h-full mt-20  items-center text-center flex flex-col space-y-4 '>
                {navItems.map(item => (
                    <li key={item.path} className='font-medium'>
                        <Link smooth to={item.path}>
                        {item.name}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        )}

    </div>
  )
}

export default Header