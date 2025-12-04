'use client';

import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Building Product Solutions',
    description: 'Durable, stylish, and built to last.',
  },
  {
    id: 2,
    title: 'Tailored to Your Needs',
    description: 'Custom windows, doors, and roofing that fit perfectly.',
  },
  {
    id: 3,
    title: 'Seamless Installation',
    description: 'Expert hands ensure flawless finishing.',
  },
  {
    id: 4,
    title: 'Standard, Local Touch',
    description: 'Products crafted to meet international best practices.',
  },
  {
    id: 5,
    title: 'Innovative Designs',
    description: 'Modern styles that elevate every space.',
  },
  {
    id: 6,
    title: 'Trusted by Many',
    description: 'Proven excellence in homes and businesses across Nigeria.',
  },
];

const WhyThomArk = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='w-full bg-white dark:bg-thom-black transition-colors'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-8'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-inter-tight font-bold text-thom-black dark:text-white'>
            Why Thom-Ark Nigeria Limited?
          </h2>
          <div className='w-32 h-1 bg-primary mt-3 mx-auto' />
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className='flex flex-col items-start space-y-3 group'
            >
              {/* Icon */}
              <div className='w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors'>
                <CheckCircle2 className='w-6 h-6 text-primary group-hover:text-white transition-colors' />
              </div>

              {/* Title */}
              <h3 className='text-[18px] md:text-[20px] lg:text-[22px] font-inter-tight font-semibold text-thom-black dark:text-white'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-[14px] md:text-[15px] lg:text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className='flex justify-center'>
          <a href='#contactus'>
            <button
              onClick={scrollToContact}
              className='flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-[16px] md:text-[18px] font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl'
            >
              <Phone className='w-5 h-5' />
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyThomArk;
