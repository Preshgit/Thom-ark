'use client';

import React, { useState } from 'react';
import { Phone, CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call (replace with EmailJS later)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id='contact'
      className='w-full bg-white dark:bg-thom-black transition-colors'
    >
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Left - Image (Hidden on Mobile) */}
          <div className='hidden lg:block relative'>
            <div className='relative h-full min-h-[500px] rounded-2xl overflow-hidden'>
              <img
                src='/contact-image.png'
                alt='Contact Thom Ark'
                className='w-full h-full object-cover'
              />

              {/* Overlay with Points */}
              <div className='absolute inset-0 bg-black/40'>
                {/* Quality Aluminium Solutions */}
                <div className='absolute top-[15%] left-[10%] flex items-center gap-3'>
                  <div className='w-3 h-3 rounded-full bg-white animate-pulse' />
                  <span className='text-white text-[14px] md:text-[16px] font-medium'>
                    Quality Aluminium Solutions
                  </span>
                </div>

                {/* Custom Budget */}
                <div className='absolute top-[45%] left-[10%] flex items-center gap-3'>
                  <div className='w-3 h-3 rounded-full bg-white animate-pulse' />
                  <span className='text-white text-[14px] md:text-[16px] font-medium'>
                    Custom Budget
                  </span>
                </div>

                {/* Boma windows & Doors */}
                <div className='absolute bottom-[15%] right-[10%] flex items-center gap-3'>
                  <div className='w-3 h-3 rounded-full bg-white animate-pulse' />
                  <span className='text-white text-[14px] md:text-[16px] font-medium'>
                    Boma windows & Doors
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className='flex flex-col justify-center'>
            <div className='mb-8'>
              <h2 className='text-[32px] md:text-[40px] lg:text-[48px] font-inter-tight font-bold text-thom-black dark:text-white mb-2'>
                We'd love to help!
              </h2>
              <p className='text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400'>
                Reach out and we'll get in touch within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5'>
              {/* First Name */}
              <div>
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='First Name'
                  className={`w-full px-5 py-4 rounded-lg bg-white dark:bg-thom-black border ${
                    errors.firstName
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-700'
                  } text-thom-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-primary transition-colors text-[15px] md:text-[16px]`}
                />
                {errors.firstName && (
                  <p className='text-red-500 text-[13px] mt-1.5 ml-1'>
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <input
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Last Name'
                  className={`w-full px-5 py-4 rounded-lg bg-white dark:bg-thom-black border ${
                    errors.lastName
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-700'
                  } text-thom-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-primary transition-colors text-[15px] md:text-[16px]`}
                />
                {errors.lastName && (
                  <p className='text-red-500 text-[13px] mt-1.5 ml-1'>
                    {errors.lastName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='hello@thomark.co'
                  className={`w-full px-5 py-4 rounded-lg bg-white dark:bg-thom-black border ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-700'
                  } text-thom-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-primary transition-colors text-[15px] md:text-[16px]`}
                />
                {errors.email && (
                  <p className='text-red-500 text-[13px] mt-1.5 ml-1'>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Leave us a message...'
                  rows={5}
                  className={`w-full px-5 py-4 rounded-lg bg-white dark:bg-thom-black border ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-700'
                  } text-thom-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-primary transition-colors resize-none text-[15px] md:text-[16px]`}
                />
                {errors.message && (
                  <p className='text-red-500 text-[13px] mt-1.5 ml-1'>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-[16px] md:text-[18px] font-medium hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <Phone className='w-5 h-5' />
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>

              {/* Success Message */}
              {showSuccess && (
                <div className='flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300'>
                  <CheckCircle className='w-5 h-5 flex-shrink-0' />
                  <p className='text-[14px] md:text-[15px] font-medium'>
                    Message sent successfully! We'll get back to you within 24
                    hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
