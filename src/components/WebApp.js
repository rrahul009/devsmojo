'use client'
import React, { useEffect } from 'react';
import {
  ShoppingCart as ShoppingCartIcon,
  Article as ArticleIcon,
  Dashboard as DashboardIcon,
  Apps as AppsIcon
} from '@mui/icons-material';
import { initializeAOS } from '@/app/utils/Aos_setup';

const webAppTypes = [
  {
    title: 'E-commerce Platforms',
    icon: <ShoppingCartIcon className="h-12 w-12 text-blue-500" />,
    titleColor: 'text-black',
    points: [
      'Integrated payment gateways',
      'Product management systems',
      'Customer support features',
      'Custom checkout processes'
    ]
  },
  {
    title: 'Content Management Systems (CMS)',
    icon: <ArticleIcon className="h-12 w-12 text-blue-500" />,
    titleColor: 'text-black',
    points: [
      'Flexible content management',
      'Media management tools',
      'User role management',
      'Customizable templates'
    ]
  },
  {
    title: 'Custom Dashboards',
    icon: <DashboardIcon className="h-12 w-12 text-blue-500" />,
    titleColor: 'text-black',
    points: [
      'Interactive data visualization',
      'Custom metrics tracking',
      'Real-time updates',
      'User-specific dashboards'
    ]
  },
  {
    title: 'Web Applications',
    icon: <AppsIcon className="h-12 w-12 text-blue-500" />,
    titleColor: 'text-black',
    points: [
      'Custom user experiences',
      'Streamlined processes',
      'Integration with existing systems',
      'Scalable architecture'
    ]
  }
];

const WebDevelopmentCard = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);

  return (
    <div className=" "> {/* Ensures the container takes full viewport height */}
      <section id="web-development" className="bg-white pt-10 md:pt-20 md:pb-10">
        <div className="container mx-auto px-4 md:px-6" data-aos="zoom-in-up">
          <div className="bg-white shadow-lg rounded-lg mb-4">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-black mb-2 mt-2">
                Web Development
              </h2>
              <p className="text-md text-gray-700">
                Our web development services are designed to create stunning, high-performance websites that meet your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webAppTypes.map((app, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-8 flex items-start justify-between transition-transform transform hover:scale-105"
                  data-aos="zoom-in-up"
                >
                  <div className="flex-1 pr-8">
                    <h3 className={`text-2xl font-semibold ${app.titleColor} mb-2`}>
                      {app.title}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      {app.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    {app.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentCard;
