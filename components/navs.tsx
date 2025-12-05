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
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'aboutus' },
    { name: 'Contact Us', id: 'contactus' },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 150; // Offset for fixed header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = (e: React.MouseEvent) => {
    toggleTheme();
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 120; // Height of fixed navbar
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };
  return (
    <div className='fixed top-0 left-0 w-full bg-white dark:bg-black z-50 shadow-sm transition-colors'>
      {/* Top Contact Bar */}
      <div className='bg-white dark:bg-thom-black border-b border-gray-200 dark:border-gray-800 transition-colors'>
        <div className='max-w-[1440px] mx-auto px-6 lg:px-20 py-1'>
          <div className='flex flex-wrap items-center justify-between gap-4 text-sm md:text-base'>
            {/* Contact Info */}
            <div className='flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8'>
              {/* Mail */}
              <a
                href='mailto:info@thom-ark.com'
                className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary dark:hover:text-slate-300 transition-colors'
                aria-label='Send email'
              >
                <Mail className='w-4 h-4 flex-shrink-0' />
                <span className='hidden sm:inline'>info@thom-ark.com</span>
              </a>

              <div className='h-6 w-px bg-gray-300 dark:bg-gray-700 hidden md:block' />

              {/* Phone */}
              <a
                href='tel:+2349023612926'
                className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary dark:hover:text-slate-300 transition-colors'
                aria-label='Call Thom-Ark'
              >
                <Phone className='w-4 h-4 flex-shrink-0' />
                <span className='hidden sm:inline'>+234-902-361-2926</span>
              </a>

              <div className='h-6 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block' />

              {/* Address */}
              <p
                className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary dark:hover:text-slate-300 transition-colors cursor-default'
                aria-label='View location'
              >
                <MapPin className='w-4 h-4 flex-shrink-0' />
                <span>Ikeja, Lagos, Nigeria.</span>
              </p>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-thom-black dark:text-yellow-400 relative z-[60]'
              aria-label='Toggle theme'
              type='button'
            >
              {isDark ? (
                <Sun className='w-5 h-5 text-white' />
              ) : (
                <Moon className='w-5 h-5 text-gray-700' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className='bg-white dark:bg-thom-black transition-colors border-b border-gray-200 dark:border-gray-800'>
        <nav className='max-w-[1440px] mx-auto px-6 lg:px-20 py-2'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className='flex-shrink-0 relative z-50 cursor-pointer'
            >
              <Image
                src='/thomarklogo.png'
                alt='ThomArk Logo'
                className='block dark:hidden'
                width={150}
                height={50}
              />
              <Image
                src='/thomArk-logo-dark.png'
                alt='ThomArk Logo Dark'
                className='hidden dark:block'
                width={150}
                height={50}
              />
            </button>

            {/* Desktop Nav */}
            <div className='hidden lg:flex items-center bg-gray-50 dark:bg-[#0b1026] border border-gray-200 dark:border-gray-800 rounded-full px-12 py-2 gap-3.5'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-thom-black dark:text-white hover:bg-white dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href='https://cal.com/thom-ark/meeting'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden lg:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-all'
            >
              <Phone className='w-5 h-5' />
              Get In Touch
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='lg:hidden relative z-[60] p-2 text-thom-black dark:text-white'
              aria-label='Toggle menu'
              type='button'
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
          className={`lg:hidden fixed left-0 right-0 top-[128px] bg-white dark:bg-thom-black z-40 shadow-2xl transition-all duration-300 ease-in-out border-t border-gray-200 dark:border-gray-800 mt-4 ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
          }`}
        >
          <nav className='max-w-[1440px] mx-auto px-6 py-2 space-y-2'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-6 py-2 text-lg font-medium rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-thom-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href='https://cal.com/thom-ark/meeting'
              target='_blank'
              rel='noopener noreferrer'
              className='block'
            >
              <button
                className='w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-hover transition-all mt-4'
                onClick={() => setMobileMenuOpen(false)}
                type='button'
              >
                <Phone className='w-5 h-5' />
                Get In Touch
              </button>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navs;
