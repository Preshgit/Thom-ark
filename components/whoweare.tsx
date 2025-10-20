import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className='w-full bg-gray-50 dark:bg-thom-black transition-colors'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24'>
        {/* Section Header */}
        <div className='mb-8 md:mb-8'>
          <h2 className='text-[32px] md:text-[40px] lg:text-[48px] font-inter-tight font-bold text-thom-black dark:text-white'>
            Who We <i className='font-playfair-display font-normal'>Are</i>
          </h2>
          <div className='w-32 h-1 bg-primary mt-2' />
          <p className='mt-4 text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 max-w-[300px]'>
            Crafting quality solutions <br /> with integrity and innovation.
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Left - Image */}
          <div className='w-full hidden lg:block relative lg:h-[90vh] min-h-[500px] overflow-hidden'>
            <Image
              src='/Inner-Content@2x.png'
              alt='Modern architectural building with quality roofing'
              width={716}
              height={847}
              className='w-full h-auto object-cover object-center shadow-lg'
              priority
            />
          </div>

          {/* Right - Content */}
          <div className='space-y-8'>
            {/* Logo */}
            <div className='mb-8 hidden lg:block'>
              <img
                src='/thomarklogo.png'
                alt='Thom-Ark Nigeria Limited'
                className='h-[60px] md:h-[80px] w-auto object-contain dark:invert dark:brightness-0 dark:contrast-100'
              />
            </div>

            {/* Company Description */}
            <div className='space-y-6 text-gray-700 dark:text-gray-300'>
              <p className='text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed'>
                Thom-Ark Nigeria Limited is a resourceful (limited liability)
                company complementing architectural designs for modernity and
                environmental sustainability with general or customized or
                innovative architectural and allied products & services.
              </p>

              <p className='text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed'>
                Our mission is the impartation of quality architectural and
                allied products & services to your residential and commercial
                environments (e.g., homes, businesses, offices, organizations)
                for your comfort and well-being.
              </p>

              <p className='text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed'>
                Thom-Ark Nigeria Limited leverages its core values of
                innovation, trust, integrity, accountability, professionalism,
                and empathy to achieve the company's vision of being a
                pacesetter in executing projects with precision and aligning
                project implementations with interior and landscape architecture
                and designs. We are agents of positive and sustainable
                environmental change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
