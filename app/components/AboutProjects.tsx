import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const projects = [
  {
    title: 'Consultation',
    image: '/assets/images/p1.svg',
    location: 'Project Name | Location',
  },
  {
    title: 'Design',
    image: '/assets/images/p2.svg',
    location: 'Project Name | Location',
  },
  {
    title: 'Marketing & Design',
    image: '/assets/images/p3.svg',
    location: 'Project Name | Location',
  },
  {
    title: 'Consultation & Marketing',
    image: '/assets/images/p4.svg',
    location: 'Project Name | Location',
  },
  {
    title: 'Consultation',
    image: '/assets/images/p5.svg',
    location: 'Project Name | Location',
  },
];

const AboutProjects = () => {
  return (
    <section className="relative bg-white">
      {/* About Us Section */}
      <div className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Fifteen years of expertise in real estate, excellent customer service and a commitment to work hard,
          listen and follow through. We provide quality service to build relationships with clients and, more
          importantly, maintain those relationships by communicating effectively.
        </p>
   <Link
            href="/learn-more"
            className=" text-inter text-blue-600 border-2 border-blue-600 px-14 py-3 font-bold uppercase tracking-wider bg-white hover:text-black transition"
          >
            LEARN MORE
          </Link>
      </div>

      {/* Our Projects Section */}
      <div className="bg-[#f5f9ff] py-20 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale
            of their homes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="w-full h-48 relative">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-blue-700 font-semibold text-sm mb-1">{proj.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{proj.location}</p>
                <button className="text-white text-xs bg-orange-500 hover:bg-orange-600 px-6 py-2 transition-all uppercase">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProjects;
