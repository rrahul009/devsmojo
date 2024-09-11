'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Add event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <p className="text-center bg-navyblue text-white text-xs">
        {/* We are aware of people impersonating our employees offering jobs through WhatsApp or iMessage. When in doubt, reach out to us at general@devsmojo.com to confirm authenticity. */}
      </p>
      <header className={`sticky top-0 z-50 font-inter transition-colors duration-300 ${scrolling ? 'bg-white' : 'bg-white'}`}>
        <nav className="container mx-auto p-3 flex flex-wrap items-center justify-between relative">
          <Link href="/">
            <img src="/vvv.png" alt="YourLogo" className="cursor-pointer" style={{ height: '55px', width: '150px' }} />
          </Link>

          <button
            className={`block lg:hidden px-3 py-2 ${isMobileMenuOpen ? 'text-red-600' : 'text-gray-500'} hover:text-gray-700 focus:outline-none transition-colors`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`} style={{ width: '300px', padding: '15px' }}>
            <button
              className="absolute top-4 right-4 text-red-500"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="flex flex-col space-y-4 mt-16">
              <li>
                <Link href="/techrecruit">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">Talent Recruitment</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/resourcecenter">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">Resource Center</span>
                </Link>
              </li>
              <li>
                <Link href="/aboutus">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-grow">
            <ul className="flex space-x-6">
              <li>
                <Link href="/techrecruit">
                  <span className=" text-md hover:text-lightblue transition cursor-pointer">Talent Recruitment</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/resourcecenter">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">Resource Center</span>
                </Link>
              </li>
              <li>
                <Link href="/aboutus">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Button for Start a Conversation */}
          <div className="hidden lg:flex lg:items-center">
            <Link href="/aboutus/#schedular">
              <button className="px-3 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 animate-shake">
                Start a Conversation
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
