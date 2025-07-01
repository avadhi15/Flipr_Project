import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import your logo and social icons - adjust paths as needed
import Logo from '../../public/assets/images/logo.svg';
import NewsletterForm from './NewsletterForm';


const Footer = () => {
  return (
    <footer className="w-full pt-15 bg-white">
      {/* Part 1: Background Image with Text and Learn More Button */}
      <div className="relative h-96 w-full">
        <Image
          src="/assets/images/bg2.svg" // Replace with your background image
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
          <p className="text-xl text-semibold md:text-2xl max-w-2xl mb-8">
            Learn more about our listing process, as well as our additional staging and design work.
          </p>
          <Link
            href="/learn-more"
            className=" text-inter text-blue-600 border-2 border-white px-14 py-3 font-bold uppercase tracking-wider bg-white hover:text-black transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* Part 2: Blue Footer */}
      <div className="bg-blue-600 text-white py-8 px-4">
  <div className="max-w-6xl mx-auto">
    <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 uppercase text-sm tracking-wider font-medium mb-4">
      {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
        <Link 
          key={item} 
          href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="hover:text-gray-200 transition-colors"
        >
          {item}
        </Link>
      ))}
      <div className="flex-1" /> {/* This pushes the form to the right */}
      <NewsletterForm/>
    </nav>
  </div>
</div>

      {/* Part 3: Black Footer with Copyright, Logo, and Social Links */}
      <div className="bg-black text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="text-sm text-gray-400">
            All Rights Reserved © {new Date().getFullYear()}
          </div>
          
          {/* Center - Logo */}
          <div className="w-32 h-auto">
            <Image 
              src={Logo}
              alt="Company Logo"
              width={128}
              height={64}
              className="object-contain text-white"
            />
          </div>
          
         {/* Social Icons */}
        <div className="flex gap-6 mt-4">
          <Link href="https://facebook.com" aria-label="Facebook" className="hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Image src="/assets/icons/fb.svg" alt="Facebook" width={24} height={24} />
            </div>
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" className="hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Image src="/assets/icons/twitter.svg" alt="Twitter" width={24} height={24} />
            </div>
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" className="hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Image src="/assets/icons/insta.svg" alt="Instagram" width={24} height={24} />
            </div>
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Image src="/assets/icons/job.svg" alt="LinkedIn" width={24} height={24} />
            </div>
          </Link>
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;