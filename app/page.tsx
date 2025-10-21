'use client';

import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Navs from '../components/navs';
import Footer from '../components/footer';
import Hero from '../components/hero';
import WhoWeAre from '../components/aboutus';
import DiscoverProducts from '../components/discoverproduct';
import CoreValuesScroller from '../components/corevaluesscroller';
import WhatWeOffer from '../components/services';
import WhyThomArk from '../components/whythomark';
import ContactSection from '../components/contactsection';
import ProductsShowcase from '../components/productshowcase';
import ServicesDetails from '../components/servicesdetails';

const Page: NextPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Apply theme and save preference
  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark, mounted]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className='w-full relative bg-white dark:bg-thom-black overflow-hidden transition-colors'>
        {/* Navigation */}
        <Navs isDark={isDark} toggleTheme={toggleTheme} />

        {/* Hero Section */}
        <Hero />
        <CoreValuesScroller />
        <DiscoverProducts />
        <WhatWeOffer />
        <WhoWeAre />
        <WhyThomArk />
        <ProductsShowcase />
        <ContactSection />
        <ServicesDetails />
        {/* Future sections will go here */}
        {/* <CoreValues /> */}
        {/* <Services /> */}
        {/* <About /> */}
        {/* etc... */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
