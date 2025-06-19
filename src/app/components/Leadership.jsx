import React from 'react';

const leaders = [
  {
    name: 'Maria Santos',
    title: 'Chief Executive Officer',
    photo: '/inspirealliancelogo.png',
    bio: 'Maria brings over 20 years of experience in international finance and investment management. Her visionary leadership has driven Inspire Alliance Fund Group to new heights, fostering innovation and sustainable growth.'
  },
  {
    name: 'Kenji Tanaka',
    title: 'Chief Operations Officer',
    photo: '/subsidiarieslogo/ingi.png',
    bio: 'Kenji specializes in operational excellence and cross-border business development. He ensures seamless execution of strategies and oversees global partnerships for the group.'
  },
  {
    name: 'Alicia Reyes',
    title: 'Chief Financial Officer',
    photo: '/subsidiarieslogo/clinicadebeleza.png',
    bio: 'Alicia is a financial strategist with a passion for empowering businesses. She leads the financial planning and risk management initiatives at Inspire Alliance.'
  },
  {
    name: 'David Lee',
    title: 'Head of Innovation',
    photo: '/subsidiarieslogo/meg.png',
    bio: 'David is at the forefront of technological innovation, driving digital transformation and new product development across the organization.'
  }
];

export default function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <img
                src={leader.photo}
                alt={leader.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-200 shadow"
                onError={e => { e.target.src = '/icon logo.png'; }}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
              <p className="text-green-700 font-medium mb-2">{leader.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 