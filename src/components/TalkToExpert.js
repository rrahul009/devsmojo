import React from 'react';

const TalkToExpert = () => {
    const boxes = [
        {
            title: "How you can leverage AI",
            description: "Discover the benefits of integrating AI into your business processes and how it can enhance efficiency and innovation.",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*C_ucOsvJldViSxv-.png",
            points: [
                "Automate repetitive tasks to save time.",
                "Enhance decision-making with predictive analytics.",
                "Improve customer experiences through personalized recommendations.",
                "Optimize business operations with AI-driven insights."
            ]
        },
        {
            title: "How you can fast track your MVP",
            description: "Learn strategies to accelerate your Minimum Viable Product development and bring your ideas to market faster.",
            image: "https://www.drabito.com/img/blog/blog-1/blog-image-1.webp",
            points: [
                "Define core features to focus on essential functionality.",
                "Use rapid prototyping tools to build initial versions quickly.",
                "Gather user feedback early to refine the product.",
                "Implement agile development practices for faster iterations."
            ]
        },
        {
            title: "We can Market Research your next Product",
            description: "Get insights and data-driven analysis on market trends and customer needs for your upcoming product.",
            image: "https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/erjocwagadduzoioiz7j/do-market-product-research-and-industry-analysis.png",
            points: [
                "Analyze market trends to identify opportunities.",
                "Conduct competitor analysis to understand the landscape.",
                "Survey potential customers to gauge interest and needs.",
                "Use data to drive product development and marketing strategies."
            ]
        },
        {
            title: "Learn about our Talent Selection process",
            description: "Understand our approach to identifying and recruiting top talent for your business needs.",
            image: "https://cdn.sanity.io/images/grix75fu/production/3fdc3cdce2abf68ded84f9e150b4f533fa362cb4-512x470.png?w=1080&q=75&fit=clip&auto=format",
            points: [
                "Define job requirements and candidate profiles.",
                "Utilize targeted recruitment strategies to attract talent.",
                "Conduct thorough interviews and assessments.",
                "Implement a structured onboarding process for new hires."
            ]
        },
        {
            title: "How we can automate your RPO",
            description: "Explore how our Recruitment Process Outsourcing solutions can streamline your hiring processes and save you time.",
            image: "https://www.ismartrecruit.com/upload/blog/main_image/RPO1.webp",
            points: [
                "Automate candidate sourcing and screening.",
                "Streamline interview scheduling and feedback collection.",
                "Integrate with HR systems for seamless data management.",
                "Improve hiring efficiency and reduce time-to-fill positions."
            ]
        }
    ];

    return (
      <>
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Talk to Our Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {boxes.map((box, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <div className='flex justify-center mt-5'>
                            <img 
                                src={box.image} 
                                alt={box.title} 
                                className=" object-cover rounded-t-lg" 
                                style={{height:'200px'}}
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-1">{box.title}</h3>
                            <p className="text-gray-700 mb-1">{box.description}</p>
                            <ul className="list-disc list-inside pl-5 space-y-2">
                                {box.points.map((point, i) => (
                                    <li key={i} className="text-gray-600">{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </>
    );
}

export default TalkToExpert;
