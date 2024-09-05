import React from 'react';

const InDemandSkillsPage = () => {
    // Simulate data fetching
    const skills = [
        { skill: "JavaScript" },
        { skill: "Python" },
        { skill: "Java" },
        { skill: "Data Analysis" },
        { skill: "Machine Learning" },
        { skill: "Cloud Computing" },
        { skill: "UI/UX Design" },
        { skill: "React" },
        { skill: "Node.js" },
        { skill: "SQL" },
        { skill: "Django" },
        { skill: "Angular" },
        { skill: "Ruby on Rails" },
        { skill: "Kubernetes" },
        { skill: "Docker" },
        { skill: "DevOps" },
        { skill: "Big Data" },
        { skill: "Blockchain" },
        { skill: "Cybersecurity" },
        { skill: "AWS" },
        { skill: "Azure" }
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Most In-Demand Talent Skills</h1>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl  text-black">{item.skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InDemandSkillsPage;
