import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} 
from 'react-router-dom';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Academics from './components/Academics/Academics';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import NavList from './components/NavList/NavList';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
   <div className='h-max dark:bg-slate-900'>
    
    <BrowserRouter>
     <NavList />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
     <Footer />
    </BrowserRouter>
    
   </div>
  );
}


export default App;
