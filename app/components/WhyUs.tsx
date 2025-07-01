import React from 'react';
import Image from 'next/image';

const WhyUs = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Not Your Average Realtor
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            Most realtors are only focused on getting the sale. We focus on smart selling design and effective marketing to get the maximum value your dollar on the market.
          </p>
        </div>

        {/* Right Image Cluster */}
        <div className="relative flex items-center justify-center w-full h-[320px]">
          {/* Main Large Circle Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-[6px] border-white z-20">
            <Image
              src="/assets/images/e1.svg"
              alt="Main Agent"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Top Right Small Image */}
          <div className="absolute -top-6 right-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-[4px] border-white">
            <Image
              src="/assets/images/e2.svg"
              alt="Client"
               width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Bottom Right Small Image */}
          <div className="absolute -bottom-6 right-4 w-48 h-48 md:w-56 md:h-56rounded-full overflow-hidden shadow-lg border-[4px] border-white">
            <Image
              src="/assets/images/e3.svg"
              alt="Agent Holding"
            width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Decorative Dots */}
          <div className="absolute top-1/3 -left-6 w-4 h-4 rounded-full bg-blue-500" />
          <div className="absolute bottom-1/4 -left-4 w-3 h-3 rounded-full bg-orange-500" />
        </div>
      </div>

      {/* Decorative Background Circle */}
      <div className="absolute -bottom-24 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-2xl z-0"></div>
      <div className="absolute -top-20 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-2xl z-0"></div>

       {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl font-semibold text-blue-600">Why Choose Us?</h2>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-12 px-6 max-w-6xl mx-auto relative z-10">
        {/* Card 1 */}
        <div className="text-center space-y-4">
          <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
            {/* Background Circle */}
            <div className="absolute inset-0 rounded-full bg-blue-100 z-0" />
            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12">
              <Image src="/assets/icons/home.svg" alt="Potential ROI" width={48} height={48} />
            </div>
          </div>
          <h3 className="font-semibold text-lg">Potential ROI</h3>
          <p className="text-gray-600 text-sm">
            Investing in real estate can help you build long-term wealth with better returns.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center space-y-4">
          <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
            {/* Background Circle */}
            <div className="absolute inset-0 rounded-full bg-blue-100 z-0" />
            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12">
              <Image src="/assets/icons/paintbrush.svg" alt="Design" width={48} height={48} />
            </div>
          </div>
          <h3 className="font-semibold text-lg">Design</h3>
          <p className="text-gray-600 text-sm">
            Our listings are designed to attract your perfect buyer using top-tier visual presentation.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center space-y-4">
          <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
            {/* Background Circle */}
            <div className="absolute inset-0 rounded-full bg-blue-100 z-0" />
            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12">
              <Image src="/assets/icons/cdollar.svg" alt="Marketing" width={48} height={48} />
            </div>
          </div>
          <h3 className="font-semibold text-lg">Marketing</h3>
          <p className="text-gray-600 text-sm">
            We bring targeted marketing strategies to get your property seen by the right buyers.
          </p>
        </div>
      </div>

    </section>
  );
};

export default WhyUs;
