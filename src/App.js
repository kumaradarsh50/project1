import React from 'react';

import { Blog, Possibility, Feature, GPT, Header, Footer } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
