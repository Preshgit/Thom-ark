'use client';

import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Sun, Moon } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navs: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className='bg-white dark:bg-thom-black border-b border-gray-200 dark:border-gray-800 transition-colors'>
        <div className='max-w-[1440px] mx-auto px-6 lg:px-20 py-3'>
          <div className='flex flex-wrap items-center justify-between gap-4 text-sm md:text-base'>
            <div className='flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8'>
              <a
                href='mailto:info@thom-ark.com'
                className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
              >
                <Mail className='w-4 h-4 flex-shrink-0' />
                <span className='hidden sm:inline'>info@thom-ark.com</span>
              </a>
              <div className='h-6 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block' />
              <a
                href='#'
                className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
              >
                <MapPin className='w-4 h-4 flex-shrink-0' />
                <span className='hidden md:inline'>Ikeja, Lagos, Nigeria.</span>
              </a>
              <div className='h-6 w-px bg-gray-300 dark:bg-gray-700 hidden md:block' />
              <a
                href='tel:+2349023032526'
                className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
              >
                <Phone className='w-4 h-4 flex-shrink-0' />
                <span>+234 9023-6129-26</span>
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
              aria-label='Toggle theme'
            >
              {isDark ? (
                <Sun className='w-5 h-5' />
              ) : (
                <Moon className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className='bg-white dark:bg-thom-black sticky top-0 z-50 transition-colors border-b border-gray-200 dark:border-gray-800'>
        <nav className='max-w-[1440px] mx-auto px-6 lg:px-20 py-6'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <a href='/' className='flex-shrink-0 relative z-50'>
              <Image
                src='/thom-ark-logo-21@2x.png'
                alt='Thom-Ark Engineering & Services'
                width={162}
                height={74}
                className='w-32 md:w-40 h-auto'
                priority
              />
            </a>

            {/* Desktop Nav */}
            <div className='hidden lg:flex items-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-12 py-3 gap-3.5'>
              {['Home', 'Products', 'Services', 'About Us', 'Contact Us'].map(
                (item) => (
                  <a
                    key={item}
                    href={`/${
                      item === 'Home' ? '' : item.toLowerCase().replace(' ', '')
                    }`}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      item === 'Home'
                        ? 'bg-primary text-white hover:bg-primary-hover'
                        : 'text-thom-black dark:text-white hover:bg-white dark:hover:bg-gray-800'
                    }`}
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* CTA Button - Desktop */}
            <button className='hidden lg:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-all'>
              <Phone className='w-5 h-5' />
              Get In Touch
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='lg:hidden relative z-50 p-2 text-thom-black dark:text-white'
              aria-label='Toggle menu'
            >
              <div className='w-6 h-6 flex items-center justify-center'>
                <div className='relative w-6 h-5 flex flex-col justify-between'>
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed left-0 right-0 top-[128px] bg-white dark:bg-thom-black z-40 shadow-2xl transition-all duration-300 ease-in-out border-t border-gray-200 dark:border-gray-800 ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
          }`}
        >
          <nav className='max-w-[1440px] mx-auto px-6 py-8 space-y-2'>
            {['Home', 'Products', 'Services', 'About Us', 'Contact Us'].map(
              (item) => (
                <a
                  key={item}
                  href={`/${
                    item === 'Home' ? '' : item.toLowerCase().replace(' ', '')
                  }`}
                  className={`block px-6 py-4 text-lg font-medium rounded-lg transition-all ${
                    item === 'Home'
                      ? 'bg-primary text-white'
                      : 'text-thom-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <button
              className='w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-lg font-medium hover:bg-primary-hover transition-all mt-4'
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className='w-5 h-5' />
              Get In Touch
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navs;
