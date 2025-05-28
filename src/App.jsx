import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-white dark:text-white dark:bg-gray-900 text-black min-h-screen'>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content (push down content to make room for fixed navbar) */}
      <div className='pt-20 sm:px-8'>
        <div className='bg-slate-200 dark:bg-gray-950 rounded-lg shadow-lg sm:p-6'>
          <section id='home'><Home /></section>
          <section id='about'><About /></section>
          <section id='skills'><Skills /></section>
          <section id='projects'><Projects /></section>
          <section id='contact'><Contact /></section>
          <section id='footer'><Footer /></section>
        </div>
      </div>
    </div>
  );
}

export default App;
