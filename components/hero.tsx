'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const heroImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <section
      id='home'
      className='relative w-full h-[60vh] sm:h-[80vh] lg:h-[90vh] min-h-[600px] overflow-hidden mt-24'
    >
      {/* Background Carousel */}
      <div className='absolute inset-0'>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className='w-full h-full object-cover object-top sm:object-center'
            />
            <div className='absolute inset-0 bg-black/40' />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='max-w-[1440px] mx-auto w-full px-6 md:px-16 lg:px-20'>
          <div className='flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12'>
            {/* Left Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className='max-w-3xl space-y-8 text-center lg:text-left'
            >
              <div className='space-y-6'>
                <h1 className='font-inter-tight text-white mt-4'>
                  <span className='block text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] leading-tight font-normal'>
                    Innovative Architectural
                  </span>
                  <span className='block font-playfair-display font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] leading-tight mt-2'>
                    & Allied Solutions for Modern Living
                  </span>
                </h1>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                  Delivering innovative aluminium solutions, roofing, and
                  ceiling systems designed to redefine modern spaces.
                </p>
              </div>
              <div className='flex justify-center lg:justify-start'>
                <a
                  href='#contactus'
                  className='flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-2xl text-lg font-medium hover:bg-primary-hover transition-all border border-white/10'
                >
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* Carousel Dots */}
            <div className='flex items-center justify-center lg:justify-end gap-2 mt-8 lg:mt-84'>
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-9 bg-primary'
                      : 'w-9 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
