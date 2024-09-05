import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ResourceCenterPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="max-w-8xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-4xl text-center font-extrabold text-blue-600 mb-8">Resource Center</h1>
          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            We use Earned Value Management System (EVMS) for tracking Schedule and Cost slippages in a Project, where requirements are well understood at the onset and design and architecture can be drafted in good detail.
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Advantages of Earned Value Management System:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>A simple system for tracking Cost and Schedule slippages</li>
            <li>Easily monitor budgeted cost of work performed (Earned Value) vs actual cost of material and resources (T&M)</li>
            <li>Easily monitor under budgeting (slow execution) of high complexity and priority modules to keep the overall project on track</li>
          </ul>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>


      <section className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600  mb-6">Agile Methodology: Sprint and Scrum</h2>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          We use Sprint and Scrum based Agile Methodology when requirements are evolving and design and architecture may change significantly as new requirements get added. This setup is also ideally suited when a client is conceptualizing a Minimum Viable Product in the shortest possible time to test market response. In this system, requirements, design, cost, and schedule can change up to acceptable levels of variance.
        </p>



        <div className='flex'>
          <div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Benefits:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Adaptable to changing requirements and market conditions</li>
                <li>Fast delivery of Minimum Viable Product (MVP) for market testing</li>
                <li>Continuous feedback loop to refine and improve the product</li>
                <li>Flexible design and architecture adjustments as needed</li>
                <li>Improved team collaboration and communication</li>
                <li>Enhanced ability to manage risk and uncertainty</li>
                <li>Frequent reassessment and realignment of project goals</li>
                <li>Early and continuous delivery of valuable software</li>
                <li>Increased customer satisfaction through regular updates</li>
                <li>Effective management of project scope and changes</li>
              </ul>
            </div>
          </div>
          <div className='flex justify-center align-center mt-10'>
            <img src='https://static.javatpoint.com/difference/images/agile-vs-waterfall-model.png'
          style={{width:'500px',height:'300px'}}
            />
            
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Learn More About Agile
          </a>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 mb-8 max-w-6xl mx-auto">
  <h2 className="text-4xl text-center font-extrabold text-gray-900 mb-6">Risk Mitigation</h2>
  <p className="text-lg text-gray-800 mb-6 leading-relaxed">
    Risk mitigation is a critical aspect of project management and organizational strategy. It involves identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize, monitor, and control the probability or impact of unfortunate events. Our approach to risk mitigation ensures that potential issues are proactively addressed to keep projects on track and within scope.
  </p>
  
  <h3 className="text-3xl font-semibold text-gray-900 mb-6">Our Risk Mitigation Strategy</h3>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
      <div className="absolute top-0 right-0 p-4">
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Risk Identification</h4>
      <p className="text-gray-700">
        We systematically identify potential risks through comprehensive analysis and stakeholder consultations to ensure that all possible risks are recognized early.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
      <div className="absolute top-0 right-0 p-4">
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h4>
      <p className="text-gray-700">
        Our team evaluates the likelihood and potential impact of identified risks, prioritizing them based on their significance and potential disruption to the project or organization.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
      <div className="absolute top-0 right-0 p-4">
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Mitigation Strategies</h4>
      <p className="text-gray-700">
        We develop and implement strategies to reduce or eliminate risks, including contingency planning, risk transfer, and risk acceptance based on the nature of the risk and its impact.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
      <div className="absolute top-0 right-0 p-4">
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Monitoring and Review</h4>
      <p className="text-gray-700">
        Continuous monitoring of risk factors and periodic reviews ensure that our risk management strategies remain effective and are adjusted as necessary based on evolving conditions.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
      <div className="absolute top-0 right-0 p-4">
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Communication</h4>
      <p className="text-gray-700">
        We maintain open lines of communication with stakeholders to keep them informed about risk status and mitigation efforts, ensuring transparency and collaborative problem-solving.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 relative">
      <div className="absolute top-0 right-0 p-4">
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h4>
      <p className="text-gray-700">
        Detailed documentation of risk management activities and decisions provides a reference for future projects and aids in understanding the risk landscape.
      </p>
    </div>
  </div>
  
  <div className="mt-8 text-center">
    <a
      href="#"
      className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    >
      Learn More About Our Risk Mitigation Practices
    </a>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default ResourceCenterPage;
