'use client';

import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Navs from '../components/navs';
import Footer from '../components/footer';
import Hero from '../components/hero';

const Page: NextPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Apply theme and save preference
  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark, mounted]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className='w-full relative bg-white dark:bg-thom-black overflow-hidden transition-colors'>
        {/* Navigation */}
        <Navs isDark={isDark} toggleTheme={toggleTheme} />

        {/* Hero Section */}
        <Hero />

        {/* Future sections will go here */}
        {/* <CoreValues /> */}
        {/* <Services /> */}
        {/* <About /> */}
        {/* etc... */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Page;

// 'use client';

// import { NextPage } from 'next';
// import { useState, useEffect } from 'react';
// import { Phone } from 'lucide-react';
// import Navs from '../components/navs';
// import Footer from '../components/footer';

// const Page: NextPage = () => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.body.classList.toggle('dark');
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.body.classList.add('dark');
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//   }, [isDark]);

//   return (
//     <div className={isDark ? 'dark' : ''}>
//       <div className='w-full relative bg-white dark:bg-thom-black overflow-hidden transition-colors'>
//         <Navs isDark={isDark} toggleTheme={toggleTheme} />

//         {/* Hero Section */}
//         <section className='relative bg-white dark:bg-thom-black overflow-hidden transition-colors'>
//           <div className='max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-24 lg:py-32'>
//             <div className='grid lg:grid-cols-2 gap-12 items-center'>
//               <div className='space-y-8'>
//                 <h1 className='font-inter-tight font-bold text-thom-black dark:text-white text-5xl leading-tight'>
//                   Quality Architectural & Allied Products & Services
//                 </h1>
//                 <p className='text-lg text-thom-black/70 dark:text-white/70 max-w-xl'>
//                   Delivering innovative aluminium solutions, roofing, and
//                   ceiling systems designed to redefine modern spaces.
//                 </p>
//                 <button className='flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl'>
//                   <Phone className='w-5 h-5' />
//                   Get In Touch
//                 </button>
//               </div>
//               <div className='relative'>
//                 <img
//                   src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
//                   alt='Modern architectural home'
//                   className='rounded-3xl shadow-2xl w-full h-auto object-cover'
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         <section>
//           <Footer />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Page;

// 'use client';

// import type { NextPage } from 'next';
// import { useState, useEffect } from 'react';
// import { Menu, X, Mail, MapPin, Phone, Sun, Moon } from 'lucide-react';
// import Image from 'next/image';

// // Header Component with Animated Mobile Menu
// function Header({
//   isDark,
//   toggleTheme,
// }: {
//   isDark: boolean;
//   toggleTheme: () => void;
// }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [mobileMenuOpen]);

//   return (
//     <>
//       {/* Top Contact Bar */}
//       <div className='bg-white dark:bg-thom-black border-b border-gray-200 dark:border-gray-800 transition-colors'>
//         <div className='max-w-[1440px] mx-auto px-6 lg:px-20 py-3'>
//           <div className='flex flex-wrap items-center justify-between gap-4 text-sm md:text-base'>
//             <div className='flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8'>
//               <a
//                 href='mailto:info@thom-ark.com'
//                 className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 <Mail className='w-4 h-4 flex-shrink-0' />
//                 <span className='hidden sm:inline'>info@thom-ark.com</span>
//               </a>
//               <div className='h-6 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block' />
//               <a
//                 href='#'
//                 className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 <MapPin className='w-4 h-4 flex-shrink-0' />
//                 <span className='hidden md:inline'>Ikeja, Lagos, Nigeria.</span>
//               </a>
//               <div className='h-6 w-px bg-gray-300 dark:bg-gray-700 hidden md:block' />
//               <a
//                 href='tel:+2349023032526'
//                 className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 <Phone className='w-4 h-4 flex-shrink-0' />
//                 <span>+234 9023-6129-26</span>
//               </a>
//             </div>
//             <button
//               onClick={toggleTheme}
//               className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
//               aria-label='Toggle theme'
//             >
//               {isDark ? (
//                 <Sun className='w-5 h-5' />
//               ) : (
//                 <Moon className='w-5 h-5' />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className='bg-white dark:bg-thom-black sticky top-0 z-50 transition-colors border-b border-gray-200 dark:border-gray-800'>
//         <nav className='max-w-[1440px] mx-auto px-6 lg:px-20 py-6'>
//           <div className='flex items-center justify-between'>
//             {/* Logo */}
//             <a href='/' className='flex-shrink-0 relative z-50'>
//               <Image
//                 src='/thom-ark-logo-21@2x.png'
//                 alt='Thom-Ark Engineering & Services'
//                 width={162}
//                 height={74}
//                 className='w-32 md:w-40 h-auto'
//                 priority
//               />
//             </a>

//             {/* Desktop Navigation - Pill Style */}
//             <div className='hidden lg:flex items-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-12 py-3 gap-3.5'>
//               <a
//                 href='/'
//                 className='px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-all'
//               >
//                 Home
//               </a>
//               <a
//                 href='/products'
//                 className='px-6 py-3 text-thom-black dark:text-white hover:bg-white dark:hover:bg-gray-800 rounded-full font-medium transition-all'
//               >
//                 Products
//               </a>
//               <a
//                 href='/services'
//                 className='px-6 py-3 text-thom-black dark:text-white hover:bg-white dark:hover:bg-gray-800 rounded-full font-medium transition-all'
//               >
//                 Services
//               </a>
//               <a
//                 href='/about'
//                 className='px-6 py-3 text-thom-black dark:text-white hover:bg-white dark:hover:bg-gray-800 rounded-full font-medium transition-all'
//               >
//                 About Us
//               </a>
//               <a
//                 href='/contact'
//                 className='px-6 py-3 text-thom-black dark:text-white hover:bg-white dark:hover:bg-gray-800 rounded-full font-medium transition-all'
//               >
//                 Contact Us
//               </a>
//             </div>

//             {/* CTA Button - Desktop */}
//             <button className='hidden lg:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-all'>
//               <Phone className='w-5 h-5' />
//               Get In Touch
//             </button>

//             {/* Mobile Menu Button with Animation */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className='lg:hidden relative z-50 p-2 text-thom-black dark:text-white'
//               aria-label='Toggle menu'
//             >
//               <div className='w-6 h-6 flex items-center justify-center'>
//                 {/* Animated Hamburger to X */}
//                 <div className='relative w-6 h-5 flex flex-col justify-between'>
//                   <span
//                     className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
//                       mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
//                     }`}
//                   />
//                   <span
//                     className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
//                       mobileMenuOpen ? 'opacity-0' : ''
//                     }`}
//                   />
//                   <span
//                     className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
//                       mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
//                     }`}
//                   />
//                 </div>
//               </div>
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu Overlay - Slides Down from Top */}
//         <div
//           className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
//             mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}
//           onClick={() => setMobileMenuOpen(false)}
//         />

//         {/* Mobile Menu - Dropdown */}
//         <div
//           className={`lg:hidden fixed left-0 right-0 top-[128px] bg-white dark:bg-thom-black z-40 shadow-2xl transition-all duration-300 ease-in-out border-t border-gray-200 dark:border-gray-800 ${
//             mobileMenuOpen
//               ? 'translate-y-0 opacity-100'
//               : '-translate-y-full opacity-0'
//           }`}
//         >
//           <nav className='max-w-[1440px] mx-auto px-6 py-8 space-y-2'>
//             <a
//               href='/'
//               className='block px-6 py-4 text-lg font-medium text-white bg-primary rounded-lg transition-all'
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </a>
//             <a
//               href='/products'
//               className='block px-6 py-4 text-lg font-medium text-thom-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all'
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Products
//             </a>
//             <a
//               href='/services'
//               className='block px-6 py-4 text-lg font-medium text-thom-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all'
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Services
//             </a>
//             <a
//               href='/about'
//               className='block px-6 py-4 text-lg font-medium text-thom-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all'
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               About Us
//             </a>
//             <a
//               href='/contact'
//               className='block px-6 py-4 text-lg font-medium text-thom-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all'
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Contact Us
//             </a>
//             <button
//               className='w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-lg font-medium hover:bg-primary-hover transition-all mt-4'
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <Phone className='w-5 h-5' />
//               Get In Touch
//             </button>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

// // Hero Section Component
// function HeroSection() {
//   return (
//     <section className='relative bg-white dark:bg-thom-black overflow-hidden transition-colors'>
//       <div className='max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-24 lg:py-32'>
//         <div className='grid lg:grid-cols-2 gap-12 items-center'>
//           {/* Left Content */}
//           <div className='space-y-8'>
//             <div className='space-y-4'>
//               <h1 className='font-inter-tight font-bold text-thom-black dark:text-white'>
//                 <span className='block text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight'>
//                   Quality Architectural &
//                 </span>
//                 <span className='block font-playfair-display italic font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2'>
//                   Allied Products &
//                 </span>
//                 <span className='block font-playfair-display italic font-normal text-3xl md:text-4xl lg:text-5xl'>
//                   Services
//                 </span>
//               </h1>
//               <p className='text-lg md:text-xl text-thom-black/70 dark:text-white/70 max-w-xl'>
//                 Delivering innovative aluminium solutions, roofing, and ceiling
//                 systems designed to redefine modern spaces.
//               </p>
//             </div>

//             <button className='flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl'>
//               <Phone className='w-5 h-5' />
//               Get In Touch
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className='relative'>
//             <div className='relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl'>
//               <img
//                 src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
//                 alt='Modern architectural home'
//                 className='w-full h-full object-cover'
//               />
//               <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Main Page Component
// const Page: NextPage = () => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.body.classList.toggle('dark');
//   };

//   // Set initial theme on mount
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedTheme = localStorage.getItem('theme');
//       if (savedTheme === 'dark') {
//         setIsDark(true);
//         document.body.classList.add('dark');
//       }
//     }
//   }, []);

//   // Save theme preference
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     }
//   }, [isDark]);

//   return (
//     <div className={isDark ? 'dark' : ''}>
//       <div className='w-full relative bg-white dark:bg-thom-black overflow-hidden transition-colors'>
//         {/* Header */}
//         <Header isDark={isDark} toggleTheme={toggleTheme} />

//         {/* Hero Section */}
//         <HeroSection />

//         {/* Placeholder for other sections - we'll build these next */}
//         <div className='min-h-screen flex items-center justify-center'>
//           <p className='text-2xl text-thom-black dark:text-white'>
//             Other sections coming next...
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

// 'use client';

// import type { NextPage } from 'next';
// import { useState, useEffect } from 'react';
// import { Menu, X, Mail, MapPin, Phone, Sun, Moon } from 'lucide-react';

// // Import your existing components (we'll refactor these section by section)
// import CoreValues from '../components/core-values';
// import FrameComponent1 from '../components/frame-component1';
// import ServicesArea from '../components/services-area';
// import AboutArea from '../components/about-area';
// import FrameComponent2 from '../components/frame-component2';
// import BuildingArea from '../components/building-area';
// import ClientModule from '../components/client-module';
// import SignupRegion from '../components/signup-region';
// import FrameComponent3 from '../components/frame-component3';
// import FrameComponent4 from '../components/frame-component4';

// // Header Component
// function Header({
//   isDark,
//   toggleTheme,
// }: {
//   isDark: boolean;
//   toggleTheme: () => void;
// }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Top Contact Bar */}
//       <div className='bg-white dark:bg-thom-black border-b border-gray-200 dark:border-gray-800 transition-colors'>
//         <div className='container-custom py-3'>
//           <div className='flex flex-wrap items-center justify-between gap-4 text-sm'>
//             <div className='flex flex-wrap items-center gap-4 md:gap-6'>
//               <a
//                 href='mailto:info@thom-ark.com'
//                 className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 <Mail className='w-4 h-4' />
//                 <span className='hidden sm:inline'>info@thom-ark.com</span>
//               </a>
//               <a
//                 href='#'
//                 className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 <MapPin className='w-4 h-4' />
//                 <span className='hidden md:inline'>Ikeja, Lagos, Nigeria</span>
//               </a>
//               <a
//                 href='tel:+2349023032526'
//                 className='flex items-center gap-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 <Phone className='w-4 h-4' />
//                 <span>+234 9023 0325 26</span>
//               </a>
//             </div>
//             <button
//               onClick={toggleTheme}
//               className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
//               aria-label='Toggle theme'
//             >
//               {isDark ? (
//                 <Sun className='w-5 h-5' />
//               ) : (
//                 <Moon className='w-5 h-5' />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className='bg-white dark:bg-thom-black sticky top-0 z-50 shadow-sm transition-colors'>
//         <nav className='container-custom py-4'>
//           <div className='flex items-center justify-between'>
//             {/* Logo */}
//             <a href='/' className='flex-shrink-0'>
//               <div className='flex flex-col'>
//                 <span className='text-2xl md:text-3xl font-bold text-primary font-inter-tight'>
//                   Thom-Ark
//                 </span>
//                 <span className='text-xs md:text-sm text-thom-black dark:text-white font-light -mt-1'>
//                   ENGINEERING & SERVICES
//                 </span>
//               </div>
//             </a>

//             {/* Desktop Navigation */}
//             <div className='hidden lg:flex items-center gap-8'>
//               <a
//                 href='/'
//                 className='text-white bg-primary px-6 py-2.5 rounded-full font-medium hover:bg-primary-hover transition-all'
//               >
//                 Home
//               </a>
//               <a
//                 href='/products'
//                 className='text-thom-black dark:text-white hover:text-primary transition-colors font-medium'
//               >
//                 Products
//               </a>
//               <a
//                 href='/services'
//                 className='text-thom-black dark:text-white hover:text-primary transition-colors font-medium'
//               >
//                 Services
//               </a>
//               <a
//                 href='/about'
//                 className='text-thom-black dark:text-white hover:text-primary transition-colors font-medium'
//               >
//                 About Us
//               </a>
//               <a
//                 href='/contact'
//                 className='text-thom-black dark:text-white hover:text-primary transition-colors font-medium'
//               >
//                 Contact Us
//               </a>
//             </div>

//             {/* CTA Button */}
//             <button className='hidden lg:flex btn-primary'>
//               <Phone className='w-4 h-4' />
//               Get In Touch
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className='lg:hidden p-2 text-thom-black dark:text-white'
//               aria-label='Toggle menu'
//             >
//               {mobileMenuOpen ? (
//                 <X className='w-6 h-6' />
//               ) : (
//                 <Menu className='w-6 h-6' />
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className='lg:hidden mt-4 pb-4 space-y-4'>
//               <a
//                 href='/'
//                 className='block py-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 Home
//               </a>
//               <a
//                 href='/products'
//                 className='block py-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 Products
//               </a>
//               <a
//                 href='/services'
//                 className='block py-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 Services
//               </a>
//               <a
//                 href='/about'
//                 className='block py-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 About Us
//               </a>
//               <a
//                 href='/contact'
//                 className='block py-2 text-thom-black dark:text-white hover:text-primary transition-colors'
//               >
//                 Contact Us
//               </a>
//               <button className='btn-primary w-full justify-center mt-4'>
//                 <Phone className='w-4 h-4' />
//                 Get In Touch
//               </button>
//             </div>
//           )}
//         </nav>
//       </header>
//     </>
//   );
// }

// // Hero Section Component
// function HeroSection() {
//   return (
//     <section className='relative bg-white dark:bg-thom-black overflow-hidden transition-colors'>
//       <div className='container-custom py-16 md:py-24 lg:py-32'>
//         <div className='grid lg:grid-cols-2 gap-12 items-center'>
//           {/* Left Content */}
//           <div className='space-y-8'>
//             <div className='space-y-4'>
//               <h1 className='font-inter-tight font-bold text-thom-black dark:text-white'>
//                 <span className='block text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight'>
//                   Quality Architectural &
//                 </span>
//                 <span className='block font-playfair-display italic font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2'>
//                   Allied Products &
//                 </span>
//                 <span className='block font-playfair-display italic font-normal text-3xl md:text-4xl lg:text-5xl'>
//                   Services
//                 </span>
//               </h1>
//               <p className='text-lg md:text-xl text-thom-black/70 dark:text-white/70 max-w-xl'>
//                 Delivering innovative aluminium solutions, roofing, and ceiling
//                 systems designed to redefine modern spaces.
//               </p>
//             </div>

//             <button className='btn-primary text-lg px-8 py-4'>
//               <Phone className='w-5 h-5' />
//               Get In Touch
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className='relative'>
//             <div className='relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl'>
//               <img
//                 src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
//                 alt='Modern architectural home'
//                 className='w-full h-full object-cover'
//               />
//               <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Main Page Component
// const Page: NextPage = () => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.body.classList.toggle('dark');
//   };

//   // Set initial theme on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.body.classList.add('dark');
//     }
//   }, []);

//   // Save theme preference
//   useEffect(() => {
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//   }, [isDark]);

//   return (
//     <div className={isDark ? 'dark' : ''}>
//       <div className='w-full relative bg-white dark:bg-thom-black overflow-hidden transition-colors'>
//         {/* Header */}
//         <Header isDark={isDark} toggleTheme={toggleTheme} />

//         {/* Hero Section */}
//         <HeroSection />

//         {/* Core Values */}
//         <CoreValues />

//         {/* Main Content */}
//         <main className='flex flex-col items-start'>
//           <FrameComponent1 />
//           <ServicesArea />
//         </main>

//         {/* Other Sections */}
//         <AboutArea />
//         <FrameComponent2 />
//         <BuildingArea />
//         <ClientModule />
//         <SignupRegion />
//         <FrameComponent3 />
//         <FrameComponent4 />
//       </div>
//     </div>
//   );
// };

// export default Page;
// import LightMode from './home-page';

// export default function Page() {
//   return <LightMode />;
// }
