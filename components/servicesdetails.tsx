'use client';
import { Mail, Phone, MapPin, Package } from 'lucide-react';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function ServicesDetails() {
  const contactDetails = [
    {
      icon: <Mail className='w-5 h-5' />,
      label: 'Email',
      value: 'info@thom-ark.com',
      href: 'mailto:info@thom-ark.com',
    },
    {
      icon: <Phone className='w-5 h-5' />,
      label: 'Phone',
      value: <>+234-902-361-2926</>,
      href: 'tel:+2349023612926',
    },
    {
      icon: <MapPin className='w-5 h-5' />,
      label: 'Address',
      value: (
        <>
          Suite C 320, 3rd Floor, Ikeja Plaza,
          <br />
          81, Mobolaji Bank Anthony Way,
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
          P.O. Box: 11608, Ikeja,
          <br />
          (Postal Code: 100001),
          <br />
          Lagos, Nigeria.
        </>
      ),
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaXTwitter className='w-5 h-5' />,
      href: 'https://x.com/Thomark_ng',
      label: 'Twitter',
    },
    {
      icon: <FaInstagram className='w-5 h-5' />,
      href: 'https://www.instagram.com/thomark.ng?igsh=ZnVjcHZ2YTM5c2N3',
      label: 'Instagram',
    },
    // {
    //   icon: <FaYoutube className='w-5 h-5' />,
    //   href: 'https://youtube.com/@thomark',
    //   label: 'YouTube',
    // },
  ];

  return (
    <section
      id='contact&Services'
      className='py-4 md:py-8 lg:py-12 bg-white dark:bg-thom-black transition-colors'
    >
      <div className='max-w-[1440px] mx-auto px-6 lg:px-20'>
        <div className='flex flex-col lg:flex-row justify-between gap-12'>
          {/* Left Content */}
          <div className='space-y-8 max-w-xl'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-inter-tight text-thom-black dark:text-white'>
              <span className='font-normal'>For Contact & Services</span>
              {/* <span className='font-playfair-display'>
                For Contact & Services:
              </span> */}
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
                  WhatsApp 24/7, Monday to Saturday.
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
              className='bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all border border-transparent hover:border-primary/60'
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
