'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import Head from 'next/head';
import { useEffect } from 'react';

export default function TechRecruit() {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100"data-aos="zoom-in-up"
        data-aos-duration="1000">
            <Head>
                <title>Tech Recruitment & Managed IT Services</title>
                <meta name="description" content="Tech recruitment, staffing, and managed IT services." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full max-w-7=xl  mt-1">
                {/* Card Component */}
                <div 
                    className="bg-blue-100 shadow-lg rounded-lg p-10 flex flex-col md:flex-row h-full md:h-[500px] bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1290215516/vector/light-blue-cyan-waves-sea-streaming-water-concept-flowing-subtle-curves-pastel-line-art.jpg?s=612x612&w=0&k=20&c=8nrCC4_Q-uhTTYli9bjzGWdx3FfJRyxPBsLFnmClM1A=")' }}
                >
                    {/* Left Side */}
                    <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 flex flex-col space-y-6 p-16 mr-5">
                        <p className="text-blue-600 text-lg font-bold">Scaling your in-house tech team?</p>
                        <h1 className="text-5xl font-bold">Tech Recruitment<br />& Staffing</h1>
                        <p className="text-lg font-bold">
                            <span className="text-blue-600">Over 65,000</span> tech candidates in our database
                        </p>
                        <a 
                            href="/recruitment" 
                            className="inline-block bg-blue-600 text-white py-4 px-8 rounded-lg font-bold border-2 border-blue-600 hover:bg-white hover:text-black transition duration-300"
                        >
                            Learn more about recruitment
                        </a>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/2 mb-4 md:mb-0 md:pl-8 flex flex-col p-16 space-y-12">
                        <p className="text-blue-600 text-lg font-bold">Developing your website, app, or MVP?</p>
                        <h1 className="text-5xl font-bold">Managed IT<br />& Services</h1>
                        <a
                            href="/case-studies"
                            className="inline-block text-black border-2 border-blue-600 py-4 px-8 rounded-lg font-bold hover:bg-blue-600 transition duration-300 mt-8"
                        >
                            See our development case studies
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}