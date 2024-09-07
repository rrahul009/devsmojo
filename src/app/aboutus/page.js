import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Schedular from '@/components/Schedular';
import { Button } from '@mui/material';
import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Developer',
    imageUrl: 'https://static4.depositphotos.com/1000816/514/i/450/depositphotos_5140926-stock-photo-closeup-of-employee-in-the.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager',
    imageUrl: 'https://img.freepik.com/free-photo/portrait-happy-manager-holding-leather-case_1262-5329.jpg'
  },
  {
    name: 'Alex Johnson',
    role: 'UI/UX Designer',
    imageUrl: 'https://t4.ftcdn.net/jpg/02/07/68/43/360_F_207684339_dFUUI0leWvNaKJR6Da0ZswUhLI4YzIGT.webp'
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    imageUrl: 'https://photos.peopleimages.com/picture/202303/2676077-professional-smile-and-portrait-of-asian-man-in-office-for-executive-confident-and-pride.-development-corporate-and-growth-with-male-employee-in-agency-for-management-expert-and-director-fit_400_400.jpg'
  }
];

const MeetOurTeam = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="flex-1 p-6 md:p-10 bg-white shadow-lg rounded-lg">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">ABOUT US</h2>
              <p className="text-md text-gray-600 mb-6">
                At DevsMojo, we are dedicated to transforming your vision into reality through innovative and cutting-edge technology solutions. With a team of skilled professionals, we specialize in custom app development, cloud services, and digital transformation to drive your business forward. Our mission is to deliver exceptional quality and value by harnessing the latest technology trends and providing tailored solutions that meet your unique needs. From ideation to execution, we work closely with you to ensure every project is a success, helping you stay ahead in a rapidly evolving digital landscape.
              </p>
              <Button variant="contained" color="primary" className="transition-transform transform hover:scale-105 p-3">
                Learn More
              </Button>
            </div>

            {/* Image Section */}
            <div className="flex-1 p-6 md:p-10">
              <img
                src="https://img.freepik.com/premium-vector/businesses-watch-staff-presentation-video-through-web-conference-computer-virtual-office-concept-modern-flat-cartoon-style_197170-339.jpg?semt=ais_hybrid"
                alt="Business Presentation"
                className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Our Vision Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mt-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
          {/* Image Section */}
          <div className="p-6 md:p-10">
            <img
              src="https://thumbs.dreamstime.com/b/business-mission-statement-goals-philosophy-company-vision-core-values-customer-engagement-loyalty-satisfaction-flat-design-274457134.jpg"
              alt="Business Presentation"
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-200"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center md:text-left">Our Vision</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our vision is to provide the best possible service to our clients. We don't promise cost cuts, but we assure high quality outcomes by deploying only the most talented and experienced professionals for the job. Maintaining utmost transparency and ethics is a priority for us. With complete honesty and a no-BS approach we derive true pleasure only when our clients have derived more than full worth of their money and time spent on us.
          </p>
        </div>

       
      </section>

      {/* our Team */}
      {/* <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Our team consists of talented professionals who are dedicated to delivering exceptional results and driving innovation. Get to know the faces behind our success!
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 flex flex-col items-center"
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Schedular/>
     


      <Footer />
    </>

  );
};

export default MeetOurTeam;

