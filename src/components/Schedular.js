'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const CustomDatePickerInput = ({ value, onClick, placeholder }) => (
  <div
    onClick={onClick}
    className="w-full p-2 border border-gray-300 rounded flex items-center"
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
  const [startDate, setStartDate] = useState(null); // Initialize as null
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally here you would handle the form submission, e.g., sending data to a server.
    setSubmitted(true);
  };

  return (
    <div id="schedular" className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg p-5">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="https://assets.biztimes.com/uploads/2019/11/management-calendar_1537654346-1068x601.jpg" // Replace with your image URL
            alt="Meeting Illustration"
            className="w-full h-auto object-cover rounded-l-lg"
            style={{ maxHeight: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Schedule a Meeting</h1>
          {submitted ? (
            <div className="text-center">
              <h2 className="text-lg font-semibold">Thank you!</h2>
              <p>Your meeting request has been received. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
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
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Schedule Meeting
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedular;
