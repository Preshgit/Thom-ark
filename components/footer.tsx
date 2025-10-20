import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full bg-white dark:bg-thom-black transition-colors'>
      {/* MOBILE FOOTER - Hidden on md and above */}
      <div className='md:hidden w-full px-6 py-4'>
        <div className='flex flex-col space-y-8'>
          {/* Logo */}
          <div className='w-full'>
            <img
              src='/thom-ark-logo-22@2x.png'
              alt='Thom-Ark Nigeria Limited'
              className='h-[60px] w-auto object-contain dark:invert'
            />
          </div>

          {/* Newsletter Section */}
          <div className='space-y-4'>
            <div>
              <h2 className='text-[28px] leading-tight font-inter-tight font-bold text-thom-black dark:text-white'>
                Join Our{' '}
                <i className='font-playfair-display font-normal'>Newsletter</i>
              </h2>
              <p className='text-[14px] mt-2 text-gray-500 dark:text-gray-400 font-normal'>
                Subscribe for the latest real estate news and insights
              </p>
            </div>

            {/* Newsletter Input */}
            <div className='relative'>
              <div className='flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-[10px] px-4 py-3'>
                <Mail className='w-5 h-5 text-thom-black dark:text-white flex-shrink-0' />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 bg-transparent text-[16px] text-thom-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none font-normal'
                />
                <button className='w-10 h-10 rounded-full bg-primary hover:bg-primary-hover flex items-center justify-center flex-shrink-0 transition-colors'>
                  <ArrowRight className='w-4 h-4 text-white' />
                </button>
              </div>
            </div>
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
                href='#about'
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
                href='#contact'
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
                href='#instagram'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Instagram
              </a>
              <a
                href='#linkedin'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Linkedin
              </a>
              <a
                href='#twitter'
                className='block hover:text-thom-black dark:hover:text-white transition-colors'
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div className='space-y-4'>
            <h3 className='text-[20px] font-inter-tight font-semibold text-thom-black dark:text-white'>
              Get in Touch
            </h3>
            <div className='space-y-3 text-gray-500 dark:text-gray-400'>
              {/* Address */}
              <div className='flex items-start gap-3'>
                <MapPin className='w-4 h-4 flex-shrink-0 mt-1' />
                <p className='text-[14px] leading-relaxed'>
                  Office : Suite C 320, 3rd Floor, Ikeja Plaza, 81, Mobolaji
                  Bank Anthony Way, Ikeja, Lagos, Nigeria.
                </p>
              </div>
              {/* Phone */}
              <div className='flex items-center gap-3'>
                <Phone className='w-4 h-4 flex-shrink-0' />
                <p className='text-[14px]'>+234 9023-6129-26</p>
              </div>
              {/* Email */}
              <div className='flex items-center gap-3'>
                <Mail className='w-4 h-4 flex-shrink-0' />
                <p className='text-[14px]'>info@thom-ark.com</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className='pt-6 border-t border-gray-300 dark:border-gray-800'>
            <p className='text-[14px] text-center text-gray-500 dark:text-gray-400 font-normal'>
              © Thom-Ark Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP/TABLET FOOTER - Hidden on mobile */}
      <div className='hidden md:block w-full'>
        <div className='max-w-[1440px] mx-auto px-12 lg:px-20 py-16 lg:py-12'>
          {/* Parent Flex Container */}
          <div className='flex items-center justify-between gap-12 lg:gap-20 mb-12 lg:mb-[70px]'>
            {/* Newsletter Section (Left) */}
            <div className='space-y-1.5 max-w-[510px] flex-shrink-0'>
              <h2 className='text-[48px] lg:text-[57.6px] leading-[1.1] font-inter-tight font-bold text-thom-black dark:text-white'>
                Join Our{' '}
                <i className='font-playfair-display font-normal'>Newsletter</i>
              </h2>
              <p className='text-[18px] lg:text-[20px] text-gray-500 dark:text-gray-400 font-normal'>
                Subscribe for the latest real estate news and insights
              </p>
            </div>

            {/* Newsletter Input (Right) */}
            <div className='relative max-w-[441px] w-full'>
              <div className='flex items-center gap-3 border-2 border-border-light dark:border-border-dark light:bg-black rounded-[14px] px-[29px] py-[16px] dark:bg-gray-900'>
                <Mail className='w-[21.6px] h-[21.6px] text-thom-black dark:text-white flex-shrink-0' />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 bg-transparent text-[18px] lg:text-[21.6px] text-thom-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none font-normal'
                />
                <button className='w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors'>
                  <ArrowRight className='w-5 h-5 text-white' />
                </button>
              </div>
            </div>
          </div>

          {/* Three Column Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12 lg:mb-[70px]'>
            {/* Column 1 - Contact Us */}
            <div className='space-y-[28.8px]'>
              <h3 className='text-[24px] lg:text-[28.8px] font-inter-tight font-normal text-thom-black dark:text-white'>
                Contact us
              </h3>
              <div className='space-y-[15px] text-gray-500 dark:text-gray-400'>
                {/* Address */}
                <div className='flex items-start gap-[14.4px]'>
                  <MapPin className='w-[19.2px] h-[19.2px] flex-shrink-0 mt-1' />
                  <p className='text-[16px] lg:text-[18px] leading-relaxed max-w-[385px]'>
                    Office : Suite C 320, 3rd Floor, Ikeja Plaza, 81, Mobolaji
                    Bank Anthony Way, Ikeja, Lagos, Nigeria.
                  </p>
                </div>
                {/* Phone */}
                <div className='flex items-center gap-[14.4px]'>
                  <Phone className='w-[19.2px] h-[19.2px] flex-shrink-0' />
                  <p className='text-[18px] lg:text-[20px]'>
                    +234 9023-6129-26
                  </p>
                </div>
                {/* Email */}
                <div className='flex items-center gap-[14.4px]'>
                  <Mail className='w-[19.2px] h-[19.2px] flex-shrink-0' />
                  <p className='text-[18px] lg:text-[21.6px]'>
                    info@thom-ark.com
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 - Logo & Quick Links */}
            <div className='flex flex-col items-center space-y-[38px]'>
              {/* Logo */}
              <div className='w-full flex justify-center'>
                <img
                  src='/thomarklogo.png'
                  alt='Thom-Ark Nigeria Limited'
                  className='h-[48px] w-[220px] object-contain dark:invert dark:brightness-0 dark:contrast-100'
                />
              </div>

              {/* Quick Links - Vertical List */}
              <nav className='flex flex-col items-center space-y-[19.2px] text-[18px] lg:text-[21.6px] text-gray-500 dark:text-gray-400 font-normal'>
                <a
                  href='#home'
                  className='no-underline hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  Home
                </a>
                <a
                  href='#about'
                  className='no-underline hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  About us
                </a>
                <a
                  href='#products'
                  className='no-underline hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  Products
                </a>
                <a
                  href='#services'
                  className='no-underline hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  Services
                </a>
                <a
                  href='#contact'
                  className='no-underline hover:text-thom-black dark:hover:text-white transition-colors'
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Column 3 - Newsletter Input & Social Links */}
            <div className='space-y-[85px]'>
              {/* Social Links */}
              <div className='space-y-[28.8px] max-w-[136.8px] ml-auto'>
                <h3 className='text-[24px] lg:text-[26px] font-inter-tight font-normal text-thom-black dark:text-white text-left'>
                  Social links
                </h3>
                <div className='space-y-[19.2px] text-[18px] lg:text-[21.6px] text-gray-500 dark:text-gray-400 font-normal text-right'>
                  <a
                    href='#instagram'
                    className='block no-underline hover:text-thom-black dark:hover:text-white transition-colors'
                  >
                    Instagram
                  </a>
                  <a
                    href='#linkedin'
                    className='block no-underline hover:text-thom-black dark:hover:text-white transition-colors'
                  >
                    Linkedin
                  </a>
                  <a
                    href='#twitter'
                    className='block no-underline hover:text-thom-black dark:hover:text-white transition-colors'
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className='w-full h-[1.2px] bg-gray-300 dark:bg-gray-800 mb-8 lg:mb-12' />

          {/* Copyright */}
          <div className='text-center'>
            <p className='text-[18px] lg:text-[21.6px] text-gray-500 dark:text-gray-400 font-normal'>
              © Thom-Ark Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
