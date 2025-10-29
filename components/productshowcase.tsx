'use client';

import { useEffect, useRef } from 'react';

const row1Images = [
  '/aluscrol1.png',
  '/aluscrol11.png',
  '/aluscrol7.png',
  '/aluscrol6.png',
  '/aluscrol13.png',
];

const row2Images = [
  '/aluscrol3.png',
  '/aluscrol4.png',
  '/aluscrol5.png',
  '/aluscrol2.png',
  '/sunbreak.jpeg',
  '/suspendedc.jpg',
];

const row3Images = [
  '/aluscrol10.png',
  '/aluscrol11.png',
  '/aluscrol12.png',
  '/aluscrol13.png',
  '/aluscrol14.png',
];

export default function ProductsShowcase() {
  return (
    <section className='py-4 md:py-8 lg:py-10 bg-white dark:bg-thom-black transition-colors overflow-hidden'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-20 mb-12'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-thom-black dark:text-white font-inter-tight'>
            Designs in Action
          </h2>
          <p className='text-lg md:text-xl text-thom-black/70 dark:text-white/70 max-w-3xl mx-auto'>
            Roofing | Windows | Doors | Curtain Walls | Partition | Ceiling
            {/* From aluminium windows and doors to roofing and ceiling systems. See
            how Thom-Ark brings strength and style to every space. */}
          </p>
        </div>
      </div>

      <div className='space-y-6'>
        {/* Row 1 - Scroll Right */}
        <ScrollRow images={row1Images} direction='right' speed={30} />

        {/* Row 2 - Scroll Left */}
        <ScrollRow images={row2Images} direction='left' speed={25} />

        {/* Row 3 - Scroll Right */}
        <ScrollRow images={row3Images} direction='right' speed={35} />
      </div>
    </section>
  );
}

function ScrollRow({
  images,
  direction,
  speed,
}: {
  images: string[];
  direction: 'left' | 'right';
  speed: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition =
      direction === 'right' ? 0 : scrollContainer.scrollWidth / 2;

    const scroll = () => {
      if (!scrollContainer) return;

      if (direction === 'right') {
        scrollPosition += speed / 60;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= speed / 60;
        if (scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollWidth / 2;
        }
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [direction, speed]);

  return (
    <div
      ref={scrollRef}
      className='flex gap-6 overflow-x-hidden scrollbar-hide py-2'
      style={{ scrollBehavior: 'auto' }}
    >
      {/* Duplicate images for seamless loop */}
      {[...images, ...images].map((src, index) => (
        <div
          key={index}
          className='flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
        >
          <img
            src={src}
            alt={`Product ${index + 1}`}
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>
      ))}
    </div>
  );
}
