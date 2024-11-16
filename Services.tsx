import React from 'react';
import { FileText, Users, BookOpen, Trophy } from 'lucide-react';

const services = [
  {
    title: 'Resume Builder',
    description: 'Create professional resumes with our easy-to-use builder. Choose from multiple templates and get expert tips.',
    icon: FileText,
  },
  {
    title: 'Profile Building',
    description: 'Build a compelling professional profile that showcases your skills and experience to potential employers.',
    icon: Users,
  },
  {
    title: 'Career Guidance',
    description: 'Get personalized career advice from industry experts and plan your professional growth.',
    icon: BookOpen,
  },
  {
    title: 'Skill Development',
    description: 'Access curated learning resources and courses to upgrade your skills and stay competitive.',
    icon: Trophy,
  },
];

export default function Services() {
  return (
    <div id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to accelerate your career growth
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}