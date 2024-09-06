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
    description: 'Custom-built e-commerce solutions with integrated payment gateways, product management, and customer support features.',
    icon: <ShoppingCartIcon className="h-12 w-12 text-blue-500" />
  },
  {
    title: 'Content Management Systems (CMS)',
    description: 'Flexible CMS solutions for managing website content, media, and user roles efficiently.',
    icon: <ArticleIcon className="h-12 w-12 text-blue-500" />
  },
  {
    title: 'Custom Dashboards',
    description: 'Interactive dashboards for visualizing data and metrics, tailored to your business requirements.',
    icon: <DashboardIcon className="h-12 w-12 text-blue-500" />
  },
  {
    title: 'Web Applications',
    description: 'Custom web apps designed to streamline processes and enhance user experience, based on your specific needs.',
    icon: <AppsIcon className="h-12 w-12 text-blue-500" />
  }
];

const WebDevelopmentCard = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
  return (
    <section className="bg-white py-12"data-aos="zoom-in-up">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-6xl ">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Web Development
            </h2>
            <p className="text-xl text-gray-700">
              Our web development services are designed to create stunning, high-performance websites that meet your business needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {webAppTypes.map((app, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96 lg:w-1/3 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  {app.icon}
                  <h3 className="text-2xl font-semibold text-gray-800 ml-4">
                    {app.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentCard;
