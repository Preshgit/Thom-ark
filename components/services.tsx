'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Roofing Systems',
    description:
      'Premium aluminium roofing solutions designed for beauty, durability, and all-weather protection.',
    image: '/aluroof.png',
  },
  {
    id: 2,
    title: 'Window & Door Systems',
    description:
      'Stylish, secure, and durable window and door series that elevate your space while ensuring safety and comfort.',
    image: '/aluscrol8.png',
  },
  {
    id: 3,
    title: 'Interior Partitions Wall Systems',
    description:
      'Custom-built partitioning solutions that optimize space and complement your architectural design.',
    image: '/aluscrol12.png',
  },
  {
    id: 4,
    title: 'Curtains Wall Systems',
    description:
      'Glazed elegant wall systems that merge aesthetics with efficiency, ideal for both interior and exterior beauty.',
    image: '/aluscrol15.png',
  },
  {
    id: 5,
    title: 'Suspended Ceilings & Sunbreakers',
    description:
      'Modern ceiling solutions with acoustic performance, design flexibility, and visual appeal — combined with sunbreaker systems for natural light control and heat management.',
    image: '/Inner-Content@2x.png',
  },
  {
    id: 6,
    title: 'Allied Products and Installation Services',
    description:
      'A wide range of innovative products and customized solutions to meet diverse building and design needs.',
    image: '/aluscrol9.png',
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(0);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? 0 : id);
  };

  return (
    <section
      id='services'
      className='w-full bg-white dark:bg-thom-black transition-colors'
    >
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-8 lg:py-12'>
        {/* Section Header */}
        <div className='mb-8 md:mb-12'>
          <h2 className='text-[32px] md:text-[40px] lg:text-[48px] font-playfair-display font-medium text-thom-black dark:text-white'>
            What We Offer
          </h2>
          <div className='w-32 h-1 bg-primary mt-3' />
        </div>

        {/* Description */}
        <p className='text-[14px] text-justify md:text-[15px] lg:text-[18px] text-gray-600 dark:text-gray-300 leading-relaxed mb-12 md:mb-16'>
          We bring architectural designs or visions to reality through sales of
          architectural and allied products that combine style, durability and
          precision with expert craftsmanship, seamless installation and
          maintenance services. Our offerings are designed to enhance
          aesthetics, improve human comfort, and deliver lasting value.
        </p>

        {/* Accordion List */}
        <div className='space-y-0 border-t border-gray-200 dark:border-gray-800'>
          {services.map((service) => (
            <div
              key={service.id}
              className='border-b border-gray-200 dark:border-gray-800'
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(service.id)}
                className='w-full flex items-center justify-between py-6 md:py-8 text-left group hover:bg-gray-50/50 dark:hover:bg-thom-black/50 transition-colors px-4 md:px-6'
              >
                <div className='flex items-center gap-4 md:gap-6 flex-1'>
                  {/* Left Border Indicator */}
                  <div
                    className={`w-1 h-8 md:h-10 rounded-full transition-colors ${
                      activeId === service.id
                        ? 'bg-primary'
                        : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  />

                  {/* Title */}
                  <h3
                    className={`text-[18px] md:text-[22px] lg:text-[24px] font-inter-tight transition-colors ${
                      activeId === service.id
                        ? 'text-thom-black dark:text-white font-semibold'
                        : 'text-gray-700 dark:text-gray-300 font-normal'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <div className='flex-shrink-0 ml-4'>
                  {activeId === service.id ? (
                    <Minus className='w-6 h-6 text-thom-black dark:text-white' />
                  ) : (
                    <Plus className='w-6 h-6 text-gray-500 dark:text-gray-400' />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {activeId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='overflow-hidden'
                  >
                    <div className='px-4 md:px-6 pb-8 md:pb-10'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pl-7 md:pl-10'>
                        {/* Image */}
                        <div className='w-full'>
                          <img
                            src={service.image}
                            alt={service.title}
                            className='w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-xl'
                          />
                        </div>

                        {/* Description */}
                        <div className='flex items-center'>
                          <p className='text-[15px] md:text-[16px] lg:text-[17px] text-gray-600 dark:text-gray-400 leading-relaxed'>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
