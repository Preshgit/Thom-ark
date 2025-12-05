import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full bg-white dark:bg-thom-black transition-colors'>
      {/* MOBILE FOOTER - Hidden on md and above */}
      <div className='md:hidden w-full px-6 py-4'>
        <div className='flex flex-col space-y-8'>
          {/* Logo */}
          <div className='w-full'>
            {/* Light mode logo */}
            <img
              src='/thomarklogo.png'
              alt='Thom-Ark Nigeria Limited'
              className='h-[60px] w-auto object-contain block dark:hidden'
            />

            {/* Dark mode logo */}
            <img
              src='/thomArk-logo-dark.png'
              alt='Thom-Ark Nigeria Limited Dark'
              className='h-[60px] w-auto object-contain hidden dark:block'
            />
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-[20px] font-inter-tight font-semibold text-thom-black dark:text-white'>
              Quick Links
            </h3>
            <nav className='space-y-3 text-[16px] text-gray-500 dark:text-gray-400 font-normal'>
              <a
                href='#home'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Home
              </a>
              <a
                href='#aboutus'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                About us
              </a>
              <a
                href='#products'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Products
              </a>
              <a
                href='#services'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Services
              </a>
              <a
                href='#contactus'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Contact Us
              </a>
            </nav>
          </div>
          {/* Social Links */}
          <div className='space-y-4'>
            <h3 className='text-[20px] font-inter-tight font-semibold text-thom-black dark:text-white'>
              Social links
            </h3>
            <div className='space-y-3 text-[16px] text-gray-500 dark:text-gray-400 font-normal'>
              <a
                href='https://www.instagram.com/thomark.ng/'
                target='_blank'
                rel='noopener noreferrer'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Instagram
              </a>
              <a
                href='https://www.linkedin.com/company/thomark_ng/'
                target='_blank'
                rel='noopener noreferrer'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Linkedin
              </a>
              <a
                href='https://x.com/thomark_ng'
                target='_blank'
                rel='noopener noreferrer'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                X
              </a>
            </div>
          </div>
          {/* Get in Touch */}
          <div className='space-y-4'>
            <h3 className='text-[20px] font-inter-tight font-semibold text-thom-black dark:text-white'>
              Get in Touch
            </h3>
            <div className='space-y-3 text-gray-500 dark:text-gray-400'>
              <div className='flex items-start gap-3'>
                <MapPin className='w-4 h-4 flex-shrink-0 mt-1' />
                <p className='text-[14px] leading-relaxed'>
                  Suite C 320, 3rd Floor, Ikeja Plaza,
                  <br />
                  81, Mobolaji Bank Anthony Way,
                  <br />
                  Ikeja, Lagos, Nigeria.
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='w-4 h-4 flex-shrink-0' />
                <p className='text-[14px]'>+234 9023-6129-26</p>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='w-4 h-4 flex-shrink-0' />
                <p className='text-[14px]'>thom-ark@thom-ark.com</p>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className='pt-6 border-t border-gray-300 dark:border-gray-800'>
            <p className='text-[14px] text-center text-gray-500 dark:text-gray-400 font-normal'>
              © 2025 Thom-Ark Nigeria Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP/TABLET FOOTER */}
      <div className='hidden md:block w-full'>
        <div className='max-w-[1440px] mx-auto px-8 md:px-10 lg:px-20 py-12'>
          <div className='w-full h-[1.2px] bg-gray-300 dark:bg-gray-800 mb-8' />

          {/* Adjust grid for tablet */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-20 mb-10'>
            {/* Contact Info */}
            <div className='space-y-6'>
              <h3 className='text-[22px] md:text-[24px] font-inter-tight font-semibold text-thom-black dark:text-white'>
                Contact us
              </h3>
              <div className='space-y-4 text-gray-500 dark:text-gray-400'>
                <div className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 flex-shrink-0 mt-1' />
                  <p className='text-[15px] md:text-[16px] leading-relaxed max-w-[360px]'>
                    Suite C 320, 3rd Floor, Ikeja Plaza,
                    <br />
                    81, Mobolaji Bank Anthony Way,
                    <br />
                    Ikeja, Lagos, Nigeria.
                  </p>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 flex-shrink-0' />
                  <p className='text-[16px]'>+234-902-361-2926</p>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='w-5 h-5 flex-shrink-0' />
                  <p className='text-[16px]'>thom-ark@thom-ark.com</p>
                </div>
              </div>
            </div>

            {/* Logo & Links (centered on md) */}
            <div className='flex flex-col items-center space-y-6'>
              {/* Logo */}
              <div>
                {/* Light Mode Logo */}
                <img
                  src='/thomarklogo.png'
                  alt='Thom-Ark Nigeria Limited'
                  className='h-[48px] w-[180px] object-contain block dark:hidden'
                />

                {/* Dark Mode Logo */}
                <img
                  src='/thomArk-logo-dark.png'
                  alt='Thom-Ark Nigeria Limited Dark'
                  className='h-[48px] w-[180px] object-contain hidden dark:block'
                />
              </div>

              <nav className='flex flex-col items-center space-y-2 text-[16px] text-gray-500 dark:text-gray-400'>
                <a
                  href='#home'
                  className='hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  Home
                </a>
                <a
                  href='#aboutus'
                  className='hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  About us
                </a>
                <a
                  href='#products'
                  className='hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  Products
                </a>
                <a
                  href='#services'
                  className='hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  Services
                </a>
                <a
                  href='#contactus'
                  className='hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Social Links (right aligned on lg, centered on md) */}
            <div className='md:flex md:flex-row lg:flex-col md:items-start lg:items-end space-y-6'>
              <>
                <h3 className='text-[22px] md:text-[24px] font-inter-tight font-semibold text-thom-black dark:text-white'>
                  Social links
                </h3>
                <div className='md:ml-5 lg:ml-0 block space-y-3 md:flex md:flex-row lg:flex-col md:gap-4 lg:gap-0 text-[16px] text-gray-500 dark:text-gray-400 md:mt-2 lg:mt-0'>
                  <a
                    href='https://www.instagram.com/thomark.ng/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block hover:text-thom-black dark:hover:text-white transition-colors'
                  >
                    Instagram
                  </a>
                  <a
                    href='https://www.linkedin.com/company/thomark_ng/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block hover:text-thom-black dark:hover:text-white transition-colors'
                  >
                    Linkedin
                  </a>
                  <a
                    href='https://x.com/thomark_ng'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block hover:text-thom-black dark:hover:text-white transition-colors'
                  >
                    X
                  </a>
                </div>
              </>
            </div>
          </div>
          <div className='w-full h-[1.2px] bg-gray-300 dark:bg-gray-800 mb-6' />
          <p className='text-center text-[16px] md:text-[17px] text-gray-500 dark:text-gray-400'>
            © 2025 Thom-Ark Nigeria Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
