import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav
      className='w-full fixed z-50 px-6 py-3 bg-white dark:bg-gray-900 shadow-md rounded-t-md transition-colors duration-300'
      role='navigation'
    >
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo */}
        <div
          className='text-2xl font-bold text-gray-900 dark:text-white cursor-pointer'
          onClick={() => window.location.href = '#home'}
        >
          My <span className='text-blue-600'>Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-5'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className='hover:text-blue-600 transition text-gray-800 dark:text-gray-200'
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition'
          >
            {theme === 'dark' ? (
              <Sun className='text-yellow-400 transition-transform duration-300 transform hover:rotate-180' />
            ) : (
              <Moon className='text-gray-800 transition-transform duration-300 transform hover:rotate-180' />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label='Toggle menu'
          className='md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition'
        >
          {menuOpen ? (
            <X className='text-gray-900 dark:text-white transition-transform duration-300 rotate-90' />
          ) : (
            <Menu className='text-gray-900 dark:text-white transition-transform duration-300' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col gap-2 items-start px-4 pt-3 pb-3'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className='w-full py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-200'
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className='w-full text-left py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition flex gap-2'
          >
            {theme === 'dark' ? (
              <Sun className='text-yellow-400' />
            ) : (
              <Moon className='text-gray-800' />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
