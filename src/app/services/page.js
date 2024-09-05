import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
const ServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-100">
        {/* Background Image Section */}
        <div
          style={{
            backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px'
          }}
          className="flex justify-center text-center text-white"
        >
          <section className="p-2 bg-opacity-60 w-full">
            <h1 className="text-4xl font-bold mb-0">Our Services</h1>
            <hr className="border-t-2 border-gray-300 mx-auto w-1/4 my-4" />
            <div className='flex justify-center align-center'>
              <p className="text-4xl leading-snug">
                We bring to you more than 50+ years of <br />
                collective Product Engineering capability  <br />
                in diverse Industry Verticals and Horizontals.
              </p>
              <div className='flex justify-center items-center flex-grow mt-15'>
                <img src='https://sonatafy.com/wp-content/uploads/2023/04/software-development.png' alt='Recruitment' className='object-cover rounded-sm' style={{ width: '600px', height: '310px' }} />
              </div>
            </div>
          </section>
        </div>

        {/* Services Section */}
        <section className="p-8">
          <h2 className="text-4xl  text-green-800 font-bold text-center mb-8">Specialties & Skill-Stacks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">AI</h3>
                </div>
                <div>
                  <SmartToyIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p className='text-md'>Using pre-trained Licensed and Open-source Libraries, Training data model on custom Data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">Internet</h3>
                </div>
                <div>
                  <LanguageIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p>Two-sided Marketplace, B2C, B2B, D2C.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">Telecom</h3>
                </div>
                <div>
                  <LocalPhoneIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p className="mt-4">
                We specialize in providing solutions for telecom services, including advanced communication infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">Shipping</h3>
                </div>
                <div>
                  <LocalShippingIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p className="mt-4">
                We offer comprehensive shipping solutions to streamline logistics and ensure timely deliveries for a wide range of goods and services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">Retails</h3>
                </div>
                <div>
                  <StorefrontIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p className="mt-4">
                Our retail solutions enhance customer experiences, optimize inventory, and drive sales through innovative technology and strategic insights.
              </p>  
            </div>
             
          
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
