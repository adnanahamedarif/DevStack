import Logo from '../assets/logo-text.png'
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';



const Nav = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='sticky top-0 left-0 w-full z-50 bg-white'>
            <div className='flex justify-between container mx-auto py-2 px-4 items-center'>

             <div className='flex-1 flex justify-start md:hidden'>
                    <button 
                        onClick={toggleMenu} 
                        className='text-2xl text-gray-700 cursor-pointer focus:outline-none p-1'
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                <div className='flex-1 flex justify-center md:justify-start'>
                    <img src={Logo} alt="Logo" className='h-8 md:h-10' />            
                </div>           
                <ul className='hidden md:flex gap-6 items-center cursor-pointer flex-1 justify-center'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className='flex gap-2 sm:gap-4 items-center flex-1 justify-end'>
                    <button className='cursor-pointer'>Sign In</button>
                    <button className='bg-pink-500 rounded-3xl text-white px-4 py-2 cursor-pointer'>Sign Up</button>
                </div>
            </div>



          {isMenuOpen && (
            <div className='md:hidden bg-white'>
                    <ul className='flex flex-col py-3 px-6 gap-3 cursor-pointer '>
                        <li> Home</li>
                        <li> Technologies </li>
                        <li> Projects </li>
                        <li > About </li>
                        <li> Contact </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;