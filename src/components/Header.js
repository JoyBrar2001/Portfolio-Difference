import React, { useContext } from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseExitHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link 
          to={'/'}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseExitHandler}
        >
          <img src={Logo} className='max-w-[200px]' alt='' />
        </Link>
        <nav 
          className='hidden lg:flex gap-x-12 font-semibold'
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseExitHandler}
        >
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition-all'>Home</Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition-all'>About</Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition-all'>Portfolio</Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition-all'>Contact</Link>
        </nav>
      </div>

        <Socials />

        <MobileNav />
    </header>
  );
};

export default Header;
