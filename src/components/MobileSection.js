import React from 'react'

const MobileSection = () => {
    
  return (
    <div className='min-h-screen'>
      {/* Mobile App  Android*/}

      <section id="mobile-development"
        className="bg-white mb-5 flex flex-col items-center w-full animate-slide-down"
        data-aos="zoom-in-up">
        <div className="container bg-white mx-auto px-2 lg:px-12 w-full">
          <h2 className="text-4xl font-bold mb-1 text-black text-center">
            Expertise in Mobile Applications Development
          </h2>
          <p className="text-md  text-gray-700 mb-8 text-center ">
            (At <span className="font-bold ">devsmojo</span>, we specialize in creating high-quality mobile applications for both Android and iOS platforms.)
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="p-6 rounded-lg flex-1 bg-gray-100 shadow-lg">
              <h3 className="text-3xl font-semibold text-black text-center md:text-start mb-4">
                Android Development
              </h3>
              <p className="text-gray-700 mb-6">
                We create feature-rich and responsive Android applications that provide an excellent user experience on all devices.
              </p>
              <h4 className="text-xl font-bold mb-2 text-center md:text-start">
                Technologies We Use:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-left">
                <li><strong>Kotlin:</strong> Modern language for robust Android app development.</li>
                <li><strong>Java:</strong> The classic language for Android apps, ensuring compatibility and performance.</li>
                <li><strong>Android SDK:</strong> Essential tools and libraries for building Android apps.</li>
                <li><strong>Firebase:</strong> A suite of cloud-based tools for app analytics, crash reporting, and authentication.</li>
              </ul>
            </div>

            <div className="flex" data-aos="flip-right">
              <img
                src="https://images.prismic.io//intuzwebsite/2caf3e7f-1704-42e2-908f-3d089da3e3ac_The+Ultimate+Guide+to+Android+App+Development.png?w=1200&q=75&auto=format,compress&fm=png8"
                alt="Android Development"
                className="rounded-lg shadow-md w-full"
                style={{ width: '480px', height: '600', marginTop: '30px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* IOS Development */}
      <section

        className="py-2 p-4 bg-gray-100 mt-5 flex flex-col items-center animate-slide-down">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex-shrink-0" data-aos="flip-right">
              <img
                src="https://www.patnarepair.com/x_images/medias/1619437487ios_apps_development.jpg"
                alt="iOS Development"
                className="rounded-lg shadow-md w-full"
                style={{ maxWidth: '500px', height: '260px', marginTop: '20px' }}
              />
            </div>

            <div id="mobile-development" className="py-0 p-2 rounded-lg flex-1">
              <h3 className="text-4xl font-semibold text-black text-start mb-4">iOS Development</h3>
              <p className="text-gray-700 mb-6">
                We create feature-rich and responsive iOS applications that deliver an outstanding user experience on all Apple devices.
              </p>
              <h4 className="text-xl font-bold mb-2 text-start">Technologies We Use:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-left">
                <li><strong>Swift:</strong> Modern language for building high-performance iOS applications.</li>
                <li><strong>Objective-C:</strong> The original language for iOS apps, providing extensive libraries and frameworks.</li>
                <li><strong>Xcode:</strong> The IDE used for developing iOS applications, offering comprehensive tools and features.</li>
                <li><strong>Core Data:</strong> A framework for managing the model layer object graph in iOS applications.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MobileSection
