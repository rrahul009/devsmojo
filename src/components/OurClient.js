import Head from 'next/head';

export default function OurClient() {
    return (
        <div className="flex flex-col items-center p-4 bg-gray-200 mt-2 rounded-lg" data-aos="zoom-in-up"
        data-aos-duration="1000">
            <Head>
                <title>DevsMojo</title>
                <meta name="description" content="AnbruchIT Header and Card Layout" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full max-w-9xl  mt-10 text-center p-5" style={{ height: '400px' }}>
                {/* Header */}
                <h1 className="text-6xl font-bold mb-8">DevsMojo in Numbers</h1>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png"
                            alt="Card Image 1"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg font-bold p-6 rounded-lg">
                            <span className="text-4xl font-bold">5+</span>
                            <span className="mt-2 text-2xl">years in business</span>
                        </div>
                    </div>
                    <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://img.freepik.com/premium-photo/css-javascript-html-usage-monitor-closeup-function-source-code-abstract-it-technology-background-software-source-code_372999-2320.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725148800&semt=ais_hybrid"
                            alt="Card Image 2"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg font-bold p-6 rounded-lg">
                            <span className="text-4xl font-bold">100+</span>
                            <span className="mt-2 text-2xl">Completed Projects</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2019/12/What-Technical-Recruiters-Look-For-1128x635.jpg"
                            alt="Card Image 3"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg font-bold p-6 rounded-lg">
                            <span className="text-4xl font-bold">50+</span>
                            <span className="mt-2 text-2xl">exceptional recruiters and developers</span>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
                            alt="Card Image 4"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg font-bold p-6 rounded-lg">
                            <span className="text-4xl font-bold">25,000</span>
                            <span className="mt-2 text-2xl">pre-vetted senior software engineers in our database</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
