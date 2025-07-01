import React from 'react';
import Image from 'next/image';

const clients = [
  {
    title: 'John Doe',
    designation: 'Real Estate Agent',
    image: '/assets/images/c1.svg',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean.',
  },
  {
    title: 'Jane Smith',
    designation: 'Interior Designer',
    image: '/assets/images/c2.svg',
   description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean.',
  },
  {
    title: 'Mike Johnson',
    designation: 'Marketing Specialist',
    image: '/assets/images/c3.svg',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean.',
  },
  {
    title: 'Emily Davis',
    designation: 'Home Stager',
    image: '/assets/images/c4.svg',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean.',
  },
  {
    title: 'Chris Brown',
    designation: 'Real Estate Investor',
    image: '/assets/images/c5.svg',
   description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean.',
  },
];

const HappyClients = () => {
  return (
    <div className="relative bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Happy Clients</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {clients.map((client, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
              <Image
                src={client.image}
                alt={client.title}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-inter text-gray-400 text-xs mb-3">{client.description}</p>
            <h3 className="text-inter text-blue-700 font-semibold text-base">{client.title}</h3>
            <p className="text-inter text-xs text-gray-400 text-normal">{client.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
