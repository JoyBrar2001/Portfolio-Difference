import React from 'react';
import { Header, AnimRoutes } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
