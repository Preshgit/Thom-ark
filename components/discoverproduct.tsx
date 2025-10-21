'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Polished Aluminium Roofing',
    image: '/Inner-Content@2x.png',
  },
  { id: 2, title: 'Aluminium Doors & Windows', image: '/aluscrol8.png' },
  { id: 3, title: 'Longspan Aluminium Roofing', image: '/aluroof.png' },
  { id: 4, title: 'Casement Aluminium Windows', image: '/aluscrol9.png' },
  { id: 5, title: 'Cedar Shake', image: '/Inner-Content@2x.png' },
  { id: 6, title: 'Architectural Shingles', image: '/Inner-Content@2x.png' },
];

const DiscoverProducts = () => {
  return (
    <section
      id='products'
      className='w-full bg-white dark:bg-thom-black transition-colors scroll-mt-24'
    >
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24'>
        {/* MOBILE & TABLET VERSION - Show only 4 images */}
        <div className='lg:hidden'>
          <div className='grid grid-cols-1 gap-12'>
            {/* Text Content */}
            <div className='space-y-6 flex flex-col justify-center'>
              <div>
                <h2 className='text-[32px] md:text-[40px] font-inter-tight font-bold text-thom-black dark:text-white leading-tight'>
                  Discover your{' '}
                  <i className='font-playfair-display font-normal'>
                    best building product
                  </i>
                </h2>
                <div className='w-32 h-1 bg-primary mt-3' />
              </div>
              <p className='text-[15px] md:text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed'>
                Discover high-performing products that are purpose-designed for
                their environment, tailor-made to specific codes, and fully
                tested to protect against the most extreme conditions.
              </p>
              <button className='flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl mt-8'>
                <Phone className='w-5 h-5' />
                Contact Us for One
              </button>
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
                    <h3 className='text-white text-lg md:text-xl font-inter-tight font-semibold'>
                      {product.title}
                    </h3>
                  </motion.div>
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
              <h2 className='text-[48px] font-inter-tight font-bold text-thom-black dark:text-white leading-tight'>
                Discover your{' '}
                <i className='font-playfair-display font-normal'>
                  best building product
                </i>
              </h2>
              <div className='w-32 h-1 bg-primary mt-3' />
            </div>
            <p className='text-[17px] text-gray-600 dark:text-gray-400 leading-relaxed'>
              Discover high-performing products that are purpose-designed for
              their environment, tailor-made to specific codes, and fully tested
              to protect against the most extreme conditions.
            </p>
            <button className='flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl mt-8'>
              <Phone className='w-5 h-5' />
              Contact Us for One
            </button>
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

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone } from 'lucide-react';

// const products = [
//   {
//     id: 1,
//     title: 'Polished Aluminium Roofing',
//     image: '/Inner-Content@2x.png',
//   },
//   { id: 2, title: 'Aluminium Doors & Windows', image: '/aluscrol8.png' },
//   { id: 3, title: 'Longspan Aluminium Roofing', image: '/aluroof.png' },
//   { id: 4, title: 'Casement Aluminium Windows', image: '/aluscrol9.png' },
//   { id: 5, title: 'Cedar Shake', image: '/Inner-Content@2x.png' },
//   { id: 6, title: 'Architectural Shingles', image: '/Inner-Content@2x.png' },
// ];

// const DiscoverProducts = () => {
//   return (
//     <section
//       id='products'
//       className='w-full bg-white dark:bg-thom-black transition-colors scroll-mt-24'
//     >
//       <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20'>
//         <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16'>
//           {/* Left - Text Content (1/3 width on lg) */}
//           <div className='space-y-6 lg:col-span-1 flex flex-col justify-center'>
//             <div>
//               <h2 className='text-[32px] md:text-[40px] lg:text-[48px] font-inter-tight font-bold text-thom-black dark:text-white leading-tight'>
//                 Discover your{' '}
//                 <i className='font-playfair-display font-normal'>
//                   best building product
//                 </i>
//               </h2>
//               <div className='w-32 h-1 bg-primary mt-3' />
//             </div>

//             <p className='text-[15px] md:text-[16px] lg:text-[17px] text-gray-600 dark:text-gray-400 leading-relaxed'>
//               Discover high-performing products that are purpose-designed for
//               their environment, tailor-made to specific codes, and fully tested
//               to protect against the most extreme conditions.
//             </p>

//             <button className='flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl mt-8'>
//               <Phone className='w-5 h-5' />
//               Contact Us for One
//             </button>
//           </div>

//           {/* Right - Product Grid (2/3 width on lg) */}
//           <div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4'>
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className='relative overflow-hidden group rounded-md cursor-pointer'
//               >
//                 {/* Product Image */}
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className='w-full h-full object-cover aspect-square transform transition-transform duration-700 group-hover:scale-110'
//                 />

//                 {/* Dark Overlay */}
//                 <div className='absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500' />

//                 {/* Product Title (shows on hover) */}
//                 <motion.div
//                   initial={{ y: '100%', opacity: 0 }}
//                   animate={{ y: '100%', opacity: 0 }} // Default hidden
//                   whileHover={{ y: 0, opacity: 1 }} // Show on hover
//                   transition={{ duration: 0.4, ease: 'easeOut' }}
//                   className='absolute inset-x-0 bottom-0 p-5 text-center group-hover:translate-y-0'
//                 >
//                   <h3 className='text-white text-lg md:text-xl lg:text-2xl font-inter-tight font-semibold'>
//                     {product.title}
//                   </h3>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DiscoverProducts;
