import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.a
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">About</a>
            <a href="#projects" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">Projects</a>
            <a href="#experience" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">Experience</a>
            {/* <a href="#blog" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">Blog</a> */}
            <a href="#contact" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">Contact</a>
            <ThemeToggle />
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-dark-text"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">About</a>
              <a href="#projects" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">Projects</a>
              <a href="#experience" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">Experience</a>
              <a href="#blog" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">Blog</a>
              <a href="#contact" className="text-gray-700 dark:text-dark-text hover:text-primary dark:hover:text-primary">Contact</a>
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;