import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const PitchSection = () => {
    return (
       <>
       {/* First card */}
        <div className="p-2 bg-white rounded-lg shadow-md" style={{fontFamily:"sans-serif"}}>
            <section className="mb-12">
                {/* <h1 className="text-4xl font-bold text-center mb-3 text-gray-800">Pitch for Pre-Vetted Resume</h1> */}
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Pitch for Pre-Vetted Resume</h1>
                <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex-1 md:w-1/2 mb-2 md:mb-0 space-x-5">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4 ml-5">Stand Out in the Job Market</h2>
                        <ul className="space-y-5 ">
                            <li className="flex items-start">
                            <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong>Expert Review:</strong> Our professionals carefully review your resume to identify areas for improvement, ensuring it meets industry standards.
                                </span>
                            </li>
                            <li className="flex items-start">
                            <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong className="font-semibold">Tailored Enhancements:</strong> We make targeted changes to better align your resume with the specific job roles you're aiming for.
                                </span>
                            </li>
                            <li className="flex items-start">
                            <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong className="font-semibold">Timely Delivery:</strong> Get a revamped resume in no time, helping you stay ahead of the competition.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                        <img 
                            src="https://img.freepik.com/free-vector/cv-best-candidate-mans-hands-flat-vector-illustration-company-looking-employee-headhunter-hiring-people-human-resource-management-job-interview-concept_74855-24461.jpg"
                            alt="Pre-Vetted Resume" 
                            className=""
                        />
                    </div>
                </div>
            </section>
        </div>
        {/* 2nd card */}
        <div className="p-8 bg-white rounded-lg shadow-md mt-8">
            <section className="mb-12">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Software Consulting</h1>
                <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
                <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                        <img 
                            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149379500.jpg"
                            alt="Software Consulting" 
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Transform Your Business with Expert Software Consulting</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong>Tailored Solutions:</strong> We provide customized software solutions that align with your business goals and needs.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong className="font-semibold">Industry Expertise:</strong> Our consultants have deep expertise in various industries, ensuring the best advice and solutions.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong className="font-semibold">Efficient Implementation:</strong> We focus on delivering solutions promptly, so you can start benefiting from them as soon as possible.
                                </span>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </section>
        </div>
        {/* 3rd card */}
        <div className="p-8 bg-white mt-5 rounded-lg shadow-md">
            <section className="mb-5">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">MVP Journey</h1>
                <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex-1 md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Navigate Your MVP Journey with Expertise</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                            <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong>Strategic Planning:</strong> We help you define the vision and roadmap for your MVP, ensuring a clear path from concept to launch.
                                </span>
                            </li>
                            <li className="flex items-start">
                            <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong className="font-semibold">Rapid Prototyping:</strong> Our team creates functional prototypes quickly to validate your ideas and gather feedback early.
                                </span>
                            </li>
                            <li className="flex items-start">
                            <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon/></span>
                                <span>
                                    <strong className="font-semibold">Iterative Development:</strong> We follow an agile approach to refine and enhance your MVP based on real user feedback and market demands.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                        <img 
                            src="https://www.logicsolutions.com/wp-content/uploads/2022/02/mvp-graphic.jpg"
                            alt="Software Consulting" 
                            className=" rounded-md "
                        />
                    </div>
                </div>
            </section>
        </div>

       </>
    );
}

export default PitchSection;
