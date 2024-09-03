import Head from 'next/head';

export default function VisualShowcase() {
    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
            <Head>
                <title>Visual Showcase - AnbruchIT</title>
                <meta name="description" content="Explore interactive data visualizations and key features of AnbruchIT." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full max-w-7xl mx-auto mt-12 text-center">
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-gray-900 mb-7">Interactive Data & Features</h1>

                {/* Interactive Data Visualization */}
                <section className="mb-4 relative bg-blue-100 py-12 px-6 rounded-lg shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-blue-200 transform -translate-y-16 -z-10" style={{ clipPath: 'ellipse(80% 60% at 50% 50%)' }}></div>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Impact in Numbers</h2>
                    <div className="relative flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
                        {/* Data Point 1 */}
                        <div className="flex-1 bg-blue-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-blue-600 mb-4">300+</div>
                            <p className="text-lg text-gray-700">Projects Completed</p>
                        </div>

                        {/* Data Point 2 */}
                        <div className="flex-1 bg-green-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-green-600 mb-4">50+</div>
                            <p className="text-lg text-gray-700">Global Partners</p>
                        </div>

                        {/* Data Point 3 */}
                        <div className="flex-1 bg-yellow-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform">
                            <div className="text-4xl font-bold text-yellow-600 mb-4">98%</div>
                            <p className="text-lg text-gray-700">Customer Satisfaction</p>
                        </div>
                    </div>
                </section>

                {/* Features Showcase */}
                <section className="relative bg-gray-200 py-12 px-6 rounded-lg shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 opacity-50"></div>
                    <h2 className="text-3xl font-semibold text-gray-1600 mb-8">Featured Capabilities</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                        {/* Feature 1 */}
                        <div className="relative bg-blue-50 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform">
                            <img src="https://precog.co/wp-content/uploads/2021/04/shutterstock_Analytics-1024x683.jpg" alt="Feature 1" className="w-40 h-40 mx-auto mb-4 object-cover" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced Analytics</h3>
                            <p className="text-gray-700">Leverage data-driven insights to make informed decisions and drive strategic initiatives.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="relative bg-green-50 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform">
                            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_52683-84603.jpg" alt="Feature 2" className="w-40 h-40 mx-auto mb-4 object-cover" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Seamless Integration</h3>
                            <p className="text-gray-700">Easily integrate with existing systems to streamline operations and enhance productivity.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="relative bg-yellow-50 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform">
                            <img src="https://media.istockphoto.com/id/1154353381/photo/custom-tailored-solutions-or-offers-made-to-measure-services.jpg?s=612x612&w=0&k=20&c=-XTB-zuKLX9QVTSmNY_QmTdxOeINT9kuAXgunI5D7_k=" alt="Feature 3" className="w-40 h-40 mx-auto mb-4 object-cover" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Solutions</h3>
                            <p className="text-gray-700">Tailor-made solutions designed to meet your specific business needs and objectives.</p>
                        </div>
                    </div>
                </section>

                {/* Call-to-Action */}
                <section className="mt-2 py-12 bg-blue-100">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Explore More</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Dive deeper into our offerings and see how we can help your business grow. Connect with us to learn more!
                    </p>
                    <a href="mailto:contact@anbruchit.com" className="inline-block px-8 py-4 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300">
                        Get in Touch
                    </a>
                </section>
            </main>
        </div>
    );
}