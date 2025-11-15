import React from 'react';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <section
      id='aboutus'
      className='w-full bg-gray-50 dark:bg-thom-black transition-colors'
    >
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-8 lg:py-12'>
        {/* Section Header */}
        <div className='mb-8 md:mb-8'>
          <h2 className='text-[32px] md:text-[40px] lg:text-[48px] font-playfair-display font-medium text-thom-black dark:text-white'>
            Who We Are
            {/* <span className='font-playfair-display font-normal'>Are</span> */}
          </h2>
          <div className='w-32 h-1 bg-primary mt-2' />
          <p className='mt-4 text-[14px] md:text-[18px] text-gray-600 dark:text-gray-300'>
            Crafting quality solutions with integrity and innovation.
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start'>
          {/* Left - Image */}
          <div className='w-full hidden lg:block relative lg:h-[90vh] min-h-[500px] overflow-hidden'>
            <Image
              src='/roof101.jpg'
              alt='Modern architectural building with quality roofing'
              width={716}
              height={847}
              className='w-full h-auto object-cover object-center shadow-lg'
              priority
            />
          </div>

          {/* Right - Content */}
          <div className='space-y-6'>
            {/* Logo */}
            <div className='mb-6 hidden lg:block'>
              {/* Light Mode Logo */}
              <img
                src='/thomarklogo.png'
                alt='Thom-Ark Nigeria Limited'
                className='h-[50px] md:h-[80px] w-auto object-contain block dark:hidden'
              />

              {/* Dark Mode Logo */}
              <img
                src='/thomArk-logo-dark.png'
                alt='Thom-Ark Nigeria Limited Dark'
                className='h-[50px] md:h-[80px] w-auto object-contain hidden dark:block'
              />
            </div>

            {/* Company Description */}
            <div className='space-y-4 text-gray-700 dark:text-gray-300'>
              <p className='text-[15px] md:text-[16px] lg:text-[16px] text-justify'>
                At Thom-Ark Nigeria Limited, we deliver not only quality but
                innovative architectural and allied solutions (products &amp;
                services) that redefine modern living while promoting
                environmental sustainability. As a trusted limited liability
                company, we specialize in complementing architectural designs
                with cutting-edge products and customized services that
                transform spaces into comfortable, stylish, and functional
                environments.
              </p>
              <p className='text-[15px] md:text-[16px] lg:text-[16px] text-justify'>
                Our mission is simple yet powerful; to enrich residential and
                commercial spaces through superior-quality products, expert
                craftsmanship, and sustainable design solutions. Guided by our
                core values; Innovation, Trust, Integrity, Accountability,
                Professionalism, and Empathy; we are committed to being a
                pacesetter in excellent architectural and allied products,
                delivering precision-driven project executions that seamlessly
                align with interior and landscape designs.
              </p>

              <h3 className='text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed text-thom-black dark:text-white font-bold mb-0'>
                The company’s logo-signified core values:
              </h3>
              <ul className='text-[15px] md:text-[16px] lg:text-[15px] leading-relaxed text-thom-black dark:text-white list-disc list-inside italic font-normal'>
                <li>
                  <span className='font-bold not-italic'>Innovation</span> –
                  Delivering fresh and forward-thinking solutions.
                </li>
                <li>
                  <span className='font-bold not-italic'>Trust</span> – Building
                  long-term relationships based on reliability.
                </li>
                <li>
                  <span className='font-bold not-italic'>Integrity</span> –
                  Upholding transparency in all our dealings.
                </li>
                <li>
                  <span className='font-bold not-italic'>Accountability</span> –
                  Taking full ownership of every project.
                </li>
                <li>
                  <span className='font-bold not-italic'>Professionalism</span>{' '}
                  – Combining expertise with excellent service.
                </li>
                <li>
                  <span className='font-bold not-italic'>Empathy</span> –
                  Understanding and prioritizing client needs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
