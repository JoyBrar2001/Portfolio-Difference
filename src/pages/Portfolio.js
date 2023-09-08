import React, { useContext } from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseExitHandler } = useContext(CursorContext);

  return (
    <motion.section
      className='section'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div
            className='flex flex-col lg:items-start'
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <b>Lorem, ipsum dolor.</b>Lorem ipsum dolor sit amet.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minus numquam assumenda maiores consequatur corrupti ut ab nulla pariatur reiciendis!
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Hire Me
            </Link>
          </motion.div>

          <div 
            className='grid grid-cols-2 lg:gap-2'
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
          >
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image1} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all' alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image2} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all' alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image3} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all' alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image4} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all' alt='' />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
