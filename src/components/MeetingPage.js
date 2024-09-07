import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importing the check icon

const MeetingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://your-background-image-url.jpg" // Replace with your background image URL
            // alt="Background"
            className="w-full h-full object-cover opacity-60" // Adjust opacity to ensure readability
          />
        </div>

        {/* Content Overlay */}
        <div className="relative flex flex-col md:flex-row w-full bg-white bg-opacity-80 rounded-lg shadow-lg z-10">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center p-6">
            <img
              src="https://axiomprint.com/_next/image?url=https%3A%2F%2Fnewapi.axiomprint.com%2Fv1%2Fproduct%2Fimage%3Fwidth%3D1200%26height%3D1000%26imageName%3DPersonalized_Desk_Calendar-734.jpg&w=1200&q=75" // Replace with your image URL
              alt="Meeting Illustration"
              className="w-full h-auto object-cover rounded-l-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-semibold mb-4 text-blue-600">Got a project idea OR<br/>  IT recruitment needs?</h1>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Schedule a call with our team</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                <p className="text-gray-700">Our veteran developers can help you build your project.</p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                <p className="text-gray-700">Explore the benefits of technology recruitment and tailor-made software.</p>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                <p className="text-gray-700">Learn how to source skilled and experienced software developers.</p>
              </div>
            </div>
          <Link href="aboutus">
          <button
              type="button"
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Schedule a Call
            </button>
          </Link>
            {/* Uncomment and replace with your trusted by data */}
            {/* <h2 className="text-xl font-semibold mt-8">TRUSTED BY</h2>
            <p className="text-gray-600 mt-2">This data</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingPage;
