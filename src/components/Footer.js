// components/Footer.js
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">DevsMojo Technology</h3>
            <p className="text-gray-400 mb-2">D-76, Noida  Sector 63</p>
            <p className="text-gray-400 mb-2">Noida, Uttar Pradesh, 201301</p>
            <p className="text-gray-400 mb-2">Phone: 9354097674

            </p>
            <p className="text-gray-400">Email: dm@devsmojo.com

            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul>
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="aboutus" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/aboutus/#schedular" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="https://www.facebook.com/DevsMojotechnologies" className="text-gray-400 hover:text-white"><FaFacebookF /></a> */}
              {/* <a href="" className="text-gray-400 hover:text-white"><FaTwitter /></a> */}
              <a
                href="https://www.linkedin.com/company/devsmojo-technologies-private-limited/?viewAsMember=true"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              {/* <a href="https://www.instagram.com/DevsMojotechnologies/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram size={16} />
                    </a> */}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Sign up for our newsletter to get the latest updates and offers.</p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded bg-gray-700 text-gray-300 mb-2"
              />
              <button
                type="submit"
                className="w-full p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} DevsMojo Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
