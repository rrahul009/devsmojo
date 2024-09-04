import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="bg-gray-100 text-gray-900">

        <section className="  text-white py-5 text-center">
          <div
            style={{
              backgroundImage: 'url("https://t4.ftcdn.net/jpg/04/38/55/69/360_F_438556946_UKupZvZrCzbfIxawj8P57hoDSl7ypza9.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
              padding: '0 20px'
            }}
          >
            <div style={{ padding: '20px', borderRadius: '8px' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Excellence in Tech Recruitment</h1>
              <p style={{ fontSize: '1.25rem' }}>
                Our team of experts is dedicated to finding the perfect tech talent for your organization.
              </p>
            </div>
          </div>

        </section>

        {/* Sectors Served */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-100 to-gray-300">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
      Industries We Serve
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-2xl duration-300 text-center relative overflow-hidden">
        <img src="https://www.aeologic.com/blog/wp-content/uploads/2022/05/Top-4-Technology-in-the-Evolution-of-Retail-Industry-2-1024x643.jpg" alt="Retail" className="w-full h-48 object-cover rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-1 mt-4">Retail</h3>
          <p className="">Innovative solutions to enhance the retail experience, from e-commerce platforms to in-store technologies.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-2xl duration-300 text-center relative overflow-hidden">
        <img src="https://i0.wp.com/ilougemedia.com/storage/2022/03/BFSI-1.jpg" alt="BFSI" className="w-full h-48 object-cover rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-1 mt-4">BFSI</h3>
          <p className="">Advanced software solutions tailored for Banking, Financial Services, and Insurance sectors, emphasizing enhanced security and streamlined operations.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-2xl duration-300 text-center relative overflow-hidden">
        <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Telecom.jpg" alt="Telecom" className="w-full h-48 object-cover rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-1 mt-4">Telecom</h3>
          <p className="">Cutting-edge solutions designed to optimize network management, enhance customer experiences, and drive operational efficiency.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-2xl duration-300 text-center relative overflow-hidden">
        <img src="https://cdn.etechgs.com/newetech2023/wp-content/uploads/2020/12/02-Jim-How-to-Take-Your-Contact-Center-to-the-Next-Level-with-Effective-Quality-Assurance-edits-LaRae-09.16.jpg" alt="Consumer Durable" className="w-full h-48 object-cover rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-1 mt-4">Consumer Durable</h3>
          <p className="">State-of-the-art solutions to streamline operations, improve product lifecycle management, and enhance customer engagement for consumer durable goods companies.</p>
        </div>
      </div>

    </div>
  </div>
</section>




        {/* Capabilities Section */}
        <section className="bg-gradient-to-r from-gray-100 to-white py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Core Capabilities</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
           <img src='https://w7.pngwing.com/pngs/640/969/png-transparent-java-programming-computer-programming-computer-software-software-development-technology-electronics-computer-keyboard-computer-thumbnail.png'
           height="200px" width="200px"
           />

        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Software Engineering</h3>
        <p className="text-gray-600">Building scalable and high-performance software solutions tailored to your needs.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <img src='https://www.citypng.com/public/uploads/preview/hd-green-round-circle-phone-icon-png-701751695059810shy4vi4gck.png'
            height="200px" width="200px"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Mobility</h3>
        <p className="text-gray-600">Developing mobile applications for Android and iOS that provide seamless user experiences.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example icon for Custom Software Engineering --> */}
            <path d="M12 3v9.293l-3.707-3.707a1 1 0 00-1.414 1.414L12 15.414l5.707-5.707a1 1 0 00-1.414-1.414L12 12.293V3h-1z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Custom Software Engineering</h3>
        <p className="text-gray-600">Creating bespoke software solutions to fit unique business requirements.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example icon for Quality Assurance --> */}
            <path d="M3 5a1 1 0 011-1h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm2 0v14h16V5H5z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Quality Assurance</h3>
        <p className="text-gray-600">Ensuring the highest standards of software quality with comprehensive testing and validation.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example icon for Data Analytics & Engineering --> */}
            <path d="M9 5v14l7-7-7-7z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Data Analytics & Engineering</h3>
        <p className="text-gray-600">Leveraging data to drive insights and improve decision-making with robust analytics and engineering practices.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example icon for Automation --> */}
            <path d="M12 2a1 1 0 00-1 1v8.586l-2.707-2.707a1 1 0 00-1.414 1.414L11 13.414l5.707-5.707a1 1 0 00-1.414-1.414L13 11.586V3a1 1 0 00-1-1z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Automation</h3>
        <p className="text-gray-600">Automating repetitive tasks to enhance efficiency and reduce operational costs.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-indigo-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example icon for Cloud Solutions --> */}
            <path d="M12 2a4 4 0 00-4 4v1H8a3 3 0 00-3 3v1a3 3 0 003 3h1v1a4 4 0 004 4h1a4 4 0 004-4v-1h1a3 3 0 003-3v-1a3 3 0 00-3-3h-1V6a4 4 0 00-4-4z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Cloud Solutions</h3>
        <p className="text-gray-600">Providing scalable cloud solutions that ensure flexibility and reliability for your business.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Example icon for Java & Microsoft Technologies --> */}
            <path d="M12 2a4 4 0 00-4 4v1H8a3 3 0 00-3 3v1a3 3 0 003 3h1v1a4 4 0 004 4h1a4 4 0 004-4v-1h1a3 3 0 003-3v-1a3 3 0 00-3-3h-1V6a4 4 0 00-4-4z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Java & Microsoft Technologies</h3>
        <p className="text-gray-600">Utilizing industry-leading technologies to build robust and efficient software systems.</p>
      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  )
}

export default Services
