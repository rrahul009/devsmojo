import Head from 'next/head';

export default function Video() {
    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
            <Head>
                <title>Recruitment Showcase - AnbruchIT</title>
                <meta name="description" content="Explore our recruitment video showcase and see how we can help you find top talent." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full max-w-7xl mx-auto mt-12 text-center">
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-orange-300 mb-8">DevsMojo</h1>

                {/* Full-Width Video Section */}
                <section className="relative w-full h-[70vh] bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://media.istockphoto.com/id/1646548083/video/manager-welcome-or-business-people-shaking-hands-in-meeting-for-b2b-negotiation-or-discussion.mp4?s=mp4-640x640-is&k=20&c=4AwPWPDSpzXr_kn-z-utVk_NJnFQOh8WWSQOkvp7Am4="  // Provided video URL
                        controls
                        autoPlay
                        muted
                        loop  // Added loop attribute
                    />
                    <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 bg-black bg-opacity-60 rounded-lg">
                        <h2 className="text-3xl font-semibold mb-4">Our Recruitment Process Unveiled</h2>
                        <p className="text-lg">
                            Discover how we streamline the recruitment process to find the best candidates for your organization. 
                            Watch our video to see our team in action and learn about our approach to successful recruitment.
                        </p>
                    </div>
                </section>

                {/* Call-to-Action */}
                {/* <section className="mt-2 py-12 bg-gray-300">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Learn More About Our Services</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Explore our website to see how we can assist with your recruitment needs or contact us to get started.
                    </p>
                    <a href="mailto:contact@anbruchit.com" className="inline-block px-8 py-4 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300">
                        Get in Touch
                    </a>
                </section> */}
            </main>
        </div>
    );
}
