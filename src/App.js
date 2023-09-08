import React, { useContext } from 'react';
import { Header, AnimRoutes } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { CursorContext } from './context/CursorContext';
import { motion } from 'framer-motion';

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      <motion.div 
        className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
        variants={cursorVariants}
        animate={cursorBG}
      >

      </motion.div>
    </>
  );
};

export default App;
