'use client'
import React, { useState } from 'react';
import Paper from '@mui/material/Paper'; // Ensure you have @mui/material installed
import { Button } from '@mui/material';

const PricingInquirySection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            alert('Your message has been sent!');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <div 
            className="p-5 bg-cover bg-center min-h-screen mt-10 flex" 
            style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/03/91/46/10/360_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg')` }}
        >
            {/* Left Side */}
            <div className="flex-1 flex items-center justify-center p-4">
            <Paper 
    elevation={3} 
    sx={{ 
        width: '100%', 
        maxWidth: '600px', 
        padding: '40px', 
        margin: 'auto', 
        // backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly translucent white
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Softer shadow
    }} 
    className="text-center"
>
    <div>
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Curious About Our Pricing Structure?
        </h2>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            We offer a range of pricing options to fit your needs. Whether you're a small startup or a large enterprise, we have a plan for you.
            Reach out to us to get a customized quote and learn more about what we can offer.
        </p>
        {/* <Button variant='contained'>Send Messages</Button> */}
    </div>
</Paper>

            </div>
            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center p-2">
                <Paper elevation={3} sx={{ width: '100%', maxWidth: '500px', padding: '24px' }} className="bg-white rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-colors"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </Paper>
            </div>
        </div>
    );
}

export default PricingInquirySection;
