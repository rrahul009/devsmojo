import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 p-8 bg-gray-100">
        <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to [Your Company Name], where we [briefly describe what you do]. With a passion for [industry or mission], we strive to [your company’s vision or goals]. Our team is dedicated to [mention key aspects of your approach or values].
          </p>
          
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            [Provide a brief history of your company, how it was founded, and any significant milestones.]
          </p>
          
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our mission is to [state your company’s mission clearly and concisely]. We are committed to [mention key principles or objectives that drive your company].
          </p>
          
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="[team-member-photo-url]" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-900">[Team Member Name]</h3>
              <p className="text-gray-700">[Position]</p>
              <p className="text-gray-600 mt-2">[Brief description or fun fact about the team member]</p>
            </div>
            {/* Repeat for additional team members */}
          </div>
          
          <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We’d love to hear from you! Reach out to us at <a href="mailto:[contact email]" className="text-blue-600 hover:underline">[contact email]</a> or follow us on [social media links]. For more detailed inquiries, please visit our <a href="[contact page URL]" className="text-blue-600 hover:underline">Contact Page</a>.
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
