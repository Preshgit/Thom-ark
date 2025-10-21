'use client';
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
//       <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24'>
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
//           <div className='lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 className={`relative overflow-hidden rounded-lg cursor-pointer ${
//                   index >= 4 ? 'hidden lg:block' : ''
//                 }`}
//                 whileHover='hover'
//               >
//                 {/* Product Image */}
//                 <motion.img
//                   src={product.image}
//                   alt={product.title}
//                   className='w-full h-full object-cover aspect-square'
//                   variants={{
//                     hover: { scale: 1.1 },
//                   }}
//                   transition={{ duration: 0.7 }}
//                 />
//                 {/* Dark Overlay */}
//                 <motion.div
//                   className='absolute inset-0 bg-black/30'
//                   variants={{
//                     hover: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
//                   }}
//                   transition={{ duration: 0.5 }}
//                 />
//                 {/* Product Title (shows on hover) */}
//                 <motion.div
//                   className='absolute inset-x-0 bottom-0 p-5 text-center'
//                   initial={{ y: 20, opacity: 0 }}
//                   variants={{
//                     hover: { y: 0, opacity: 1 },
//                   }}
//                   transition={{ duration: 0.4, ease: 'easeOut' }}
//                 >
//                   <h3 className='text-white text-lg md:text-xl lg:text-2xl font-inter-tight font-semibold'>
//                     {product.title}
//                   </h3>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DiscoverProducts;

// 'use client';

import { Mail, Phone, MapPin, Package } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

export default function ServicesDetails() {
  const contactDetails = [
    {
      icon: <Mail className='w-5 h-5' />,
      label: 'Email',
      value: 'Office : info@thom-ark.com',
      href: 'mailto:info@thom-ark.com',
    },
    {
      icon: <Phone className='w-5 h-5' />,
      label: 'Phone',
      value: <>Office : +234 9023-6129-26</>,
      href: 'tel:+2349023612926',
    },
    {
      icon: <MapPin className='w-5 h-5' />,
      label: 'Address',
      value: (
        <>
          Office : Suite C 320, 3rd Floor, Ikeja
          <br />
          Plaza, 81, Mobolaji Bank Anthony Way,
          <br />
          Ikeja, Lagos, Nigeria.
        </>
      ),
      href: null,
    },
    {
      icon: <Package className='w-5 h-5' />,
      label: 'Post Office Box',
      value: (
        <>
          P.O. Box : 18608, Ikeja, (Postal Code:
          <br />
          100001), Ikeja Lagos, Nigeria.
        </>
      ),
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaXTwitter className='w-5 h-5' />,
      href: 'https://twitter.com/thomark',
      label: 'Twitter',
    },
    {
      icon: <FaInstagram className='w-5 h-5' />,
      href: 'https://instagram.com/thomark',
      label: 'Instagram',
    },
    // {
    //   icon: <FaYoutube className='w-5 h-5' />,
    //   href: 'https://youtube.com/@thomark',
    //   label: 'YouTube',
    // },
  ];

  return (
    <section className='py-4 md:py-8 lg:py-12 bg-white dark:bg-thom-black transition-colors'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-20'>
        <div className='flex flex-col lg:flex-row justify-between gap-12'>
          {/* Left Content */}
          <div className='space-y-8 max-w-xl'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-inter-tight text-thom-black dark:text-white'>
              <span className='font-normal'>Products & </span>
              <span className='font-playfair-display italic'>
                Services Details:
              </span>
            </h2>

            <div className='space-y-2 text-thom-black/70 dark:text-white/70 text-base md:text-lg'>
              <p>
                We are available for calls on:{' '}
                <span className='font-semibold text-thom-black dark:text-white'>
                  Monday & Thursday 10am - 6pm.
                </span>{' '}
              </p>
              <p>
                And we are available on{' '}
                <span className='font-semibold text-thom-black dark:text-white'>
                  WhatsApp 24.7 Monday to Saturday.
                </span>
              </p>
            </div>

            {/* Social Links - Mobile/Tablet */}
            <div className='flex items-center gap-4 lg:hidden'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full border border-thom-black/20 dark:border-white/20 flex items-center justify-center text-thom-black dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all'
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Social Links (Desktop) */}
          <div className='hidden lg:flex items-start gap-4'>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full border border-thom-black/20 dark:border-white/20 flex items-center justify-center text-thom-black dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all'
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4'>
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all border border-transparent hover:border-primary/20'
            >
              <div className='w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary'>
                {detail.icon}
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold text-thom-black dark:text-white text-lg'>
                  {detail.label}
                </h3>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-thom-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors block text-sm leading-relaxed'
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className='text-thom-black/70 dark:text-white/70 text-sm leading-relaxed'>
                    {detail.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
