'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Standard Aluminium Roofing',
    image: '/Inner-Content@2x.png',
  },
  {
    id: 2,
    title: 'Curtain Wall and Quality Aluminium Doors',
    image: '/aluscrol7.png',
  },
  { id: 3, title: 'Longspan Aluminium Roofing', image: '/aluroof.png' },
  {
    id: 4,
    title: 'Partition Walls and Suspended ceiling',
    image: '/aluscrol12.png',
  },
  { id: 5, title: 'Glazed front Walls', image: '/aluscrol9.png' },
  { id: 6, title: 'Quality Windows', image: '/aluscrol10.png' },
];

const DiscoverProducts = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id='products'
      className='w-full bg-white dark:bg-thom-black transition-colors scroll-mt-24'
    >
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-8 lg:py-12'>
        {/* MOBILE & TABLET VERSION - Show only 4 images */}
        <div className='lg:hidden'>
          <div className='grid grid-cols-1 gap-12'>
            {/* Text Content */}
            <div className='space-y-6 flex flex-col justify-center'>
              <div>
                <h2 className='text-[32px] md:text-[40px] font-playfair-display font-medium text-thom-black dark:text-white leading-tight'>
                  Discover your{' '}
                  <p className='font-playfair-display font-medium italic-none'>
                    best building products
                  </p>
                </h2>
                <div className='w-32 md:w-38 h-1 bg-primary mt-3' />
              </div>
              <p className='text-[15px] md:text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed text-justify'>
                Discover high-performing products that are purpose-designed for
                their environment, tailor-made to specific codes, and fully
                tested to protect against the most extreme conditions.
              </p>
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
            {/* Product Grid - Only 4 images */}

            <div className='grid grid-cols-2 gap-2'>
              {products.slice(0, 4).map((product) => (
                <motion.div
                  key={product.id}
                  className='relative overflow-hidden rounded-md cursor-pointer'
                  whileHover='hover'
                >
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-full object-cover aspect-square'
                    variants={{
                      hover: { scale: 1.1 },
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className='absolute inset-0 bg-black/30' />

                  {/* Always show text, aligned left and smaller */}
                  <div className='absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left'>
                    <h3 className='text-white text-[13px] sm:text-[15px] font-inter-tight font-medium leading-snug'>
                      {product.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP VERSION - Show all 6 images */}
        <div className='hidden lg:grid lg:grid-cols-3 gap-12 lg:gap-16'>
          {/* Left - Text Content (1/3 width on lg) */}
          <div className='space-y-6 lg:col-span-1 flex flex-col justify-center'>
            <div>
              <h2 className='text-[48px] font-playfair-display font-medium text-thom-black dark:text-white leading-tight'>
                Discover your{' '}
                <p className='font-playfair-display font-medium'>
                  best building products
                </p>
              </h2>
              <div className='w-38 h-1 bg-primary mt-3' />
            </div>
            <p className='text-[18px] text-gray-600 dark:text-gray-400 leading-relaxed text-justify'>
              Discover high-performing products that are purpose-designed for
              their environment, tailor-made to specific codes, and fully tested
              to protect against the most extreme conditions.
            </p>
            <a href='#contactus'>
              {' '}
              <button
                onClick={scrollToContact}
                className='flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl mt-8 cursor-pointer relative spointer-events-auto'
              >
                <Phone className='w-5 h-5' />
                Contact Us
              </button>
            </a>
          </div>
          {/* Right - Product Grid (2/3 width on lg) - All 6 images */}
          <div className='lg:col-span-2 grid grid-cols-3 gap-2'>
            {products.map((product) => (
              <motion.div
                key={product.id}
                className='relative overflow-hidden rounded-md cursor-pointer'
                whileHover='hover'
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className='w-full h-full object-cover aspect-square'
                  variants={{
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  className='absolute inset-0 bg-black/30'
                  variants={{
                    hover: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className='absolute inset-x-0 bottom-0 p-5 text-center'
                  initial={{ y: 20, opacity: 0 }}
                  variants={{
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <h3 className='text-white text-2xl font-inter-tight font-medium'>
                    {product.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverProducts;
