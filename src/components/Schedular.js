'use client';
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS

const CustomDatePickerInput = ({ value, onClick, placeholder }) => (
  <div
    onClick={onClick}
    className="w-full max-w-md p-2 border border-gray-300 rounded flex items-center cursor-pointer"
  >
    <input
      type="text"
      value={value}
      readOnly
      placeholder={placeholder}
      className="w-full p-2 border-none outline-none bg-transparent"
    />
    <FaCalendarAlt className="text-gray-500 ml-2" />
  </div>
);

const Schedular = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);

  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      phone,
      date: startDate ? startDate.toISOString() : '',
      message,
    };

    emailjs.send('service_j9qzp24', 'template_vzl19ks', templateParams, 'tmz0vHNuzcIcTf0NA')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div id="schedular" className="bg-gray-100 flex items-center justify-center mt-5" data-aos="zoom-in-up">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg py-0 mt-5">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center p-5">
          <img
            src="https://assets.biztimes.com/uploads/2019/11/management-calendar_1537654346-1068x601.jpg" // Replace with your image URL
            alt="Meeting Illustration"
            className="w-full h-auto object-cover rounded-l-lg"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-2">
          <h1 className="text-2xl font-bold mb-2 text-start">Schedule a Meeting</h1>
          {submitted ? (
            <div className="text-center">
              <h2 className="text-lg font-semibold">Thank you!</h2>
              <p>Your meeting request has been received. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-gray-700 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full max-w-md p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-md p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 font-semibold" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full max-w-md p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-2 w-full">
                <label className="block text-gray-700 font-semibold" htmlFor="date">
                  Preferred Date and Time
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  customInput={<CustomDatePickerInput placeholder="Select date and time" />}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 font-semibold" htmlFor="message">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full max-w-md p-2 border border-gray-300 rounded"
                  rows="2"
                />
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full max-w-md bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Schedule Meeting
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedular;
