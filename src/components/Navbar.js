'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GridViewIcon from '@mui/icons-material/GridView';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) { // Change '50' to adjust when the color should change
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

  return (
    <>
      <p className="text-center bg-navyblue text-white p-3 text-xs">
        We are aware of people impersonating our employees offering jobs through WhatsApp or iMessage. When in doubt, reach out to us at general@devsmojo.com to confirm authenticity.
      </p>
      <header className={`sticky top-0 z-50   font-inter   transition-colors duration-300 ${scrolling ? 'bg-white' : 'bg-mainSectionBg'}`}>
        <nav className="container mx-auto p-3 flex justify-between items-center">
          <Link href="/">
            <img src="/devsmojo.jpeg" alt="YourLogo" className="cursor-pointer" style={{height:'55px',width:'150px'}}  />
          </Link>
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <Link href="talentrecruitment">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">Talent Recruitment</span>
                </Link>
              </li>
              <li>
                <Link href="services">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="resourcecenter">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">Resource Center</span>
                </Link>
              </li>
              <li>
                <Link href="aboutus">
                  <span className="text-navyblue text-md hover:text-lightblue transition cursor-pointer">About Us</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Uncomment and adjust if needed
          <div>
            <GridViewIcon sx={{ fontSize: 32, color: 'black' }} />
          </div> */}
        </nav>
      </header>

    </>
  );
};

export default Navbar;
