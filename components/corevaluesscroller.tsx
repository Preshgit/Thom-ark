'use client';

import React from 'react';
import { motion } from 'framer-motion';

const coreValues = [
  'INNOVATION',
  'TRUST',
  'INTEGRITY',
  'ACCOUNTABILITY',
  'PROFESSIONALISM',
  'EMPATHY',
];

const CoreValuesScroller = () => {
  return (
    <section className='w-full bg-gray-50 dark:bg-thom-black/50 transition-colors overflow-hidden py-4 md:py-4'>
      <div className='relative'>
        {/* Scrolling Container */}
        <motion.div
          className='flex gap-8 md:gap-12 lg:gap-16'
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {/* First Set */}
          {coreValues.map((value, index) => (
            <div
              key={`first-${index}`}
              className='flex-shrink-0 text-gray-400 dark:text-gray-600 font-inter-tight font-light tracking-wider'
            >
              <span className='text-[48px] md:text-[52px] lg:text-[62px] xl:text-[62px] leading-none whitespace-nowrap'>
                {value}
              </span>
            </div>
          ))}

          {/* Duplicate Set for Seamless Loop */}
          {coreValues.map((value, index) => (
            <div
              key={`second-${index}`}
              className='flex-shrink-0 text-gray-400 dark:text-gray-600 font-inter-tight font-light tracking-wider'
            >
              <span className='text-[48px]md:text-[52px] lg:text-[62px] xl:text-[62px] leading-none whitespace-nowrap'>
                {value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className='absolute top-0 left-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-gray-50 dark:from-thom-black/50 to-transparent pointer-events-none' />
        <div className='absolute top-0 right-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-gray-50 dark:from-thom-black/50 to-transparent pointer-events-none' />
      </div>
    </section>
  );
};

export default CoreValuesScroller;
