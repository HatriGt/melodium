import React, { useState } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: [],
    level: '',
    experience: '',
    trialClass: false,
  });

  const courseOptions = [
    { value: 'carnatic', label: 'Carnatic Vocals' },
    { value: 'tamil', label: 'Tamil Film Songs' },
    { value: 'english', label: 'English Pop' },
  ];

  const levelOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMultiSelect = (selectedOptions) => {
    setFormData(prevData => ({
      ...prevData,
      courses: selectedOptions
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#374151',
      borderColor: '#4B5563',
      color: 'white',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#6B7280',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#374151',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#F59E0B' : state.isFocused ? '#4B5563' : '#374151',
      color: state.isSelected ? 'black' : 'white',
      '&:active': {
        backgroundColor: '#F59E0B',
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#F59E0B',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'black',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'black',
      '&:hover': {
        backgroundColor: '#D97706',
        color: 'white',
      },
    }),
    input: (provided) => ({
      ...provided,
      color: 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
  };

  return (
    <div id="register" className="registration-form bg-gray-900 min-h-screen flex items-center justify-center py-12">
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">Register for a Class</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
           <Select
            isMulti
            name="courses"
            options={courseOptions}
            value={formData.courses}
            onChange={(selectedOptions) => handleMultiSelect(selectedOptions)}
            placeholder="Select Courses"
            styles={{
              ...customStyles,
              container: (provided) => ({
                ...provided,
                marginBottom: '1rem', // Add this line to increase the gap
              }),
            }}
          />
          
          <Select
            name="level"
            options={levelOptions}
            value={levelOptions.find(option => option.value === formData.level)}
            onChange={(selectedOption) => handleChange({ target: { name: 'level', value: selectedOption.value } })}
            placeholder="Select Your Level"
            styles={{
              ...customStyles,
              container: (provided) => ({
                ...provided,
                marginBottom: '1rem', // Add this line to increase the gap
              }),
            }}
          />
          
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell us about your musical experience"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 h-32 resize-none"
          ></textarea>
          
          <motion.div 
            className="flex items-center space-x-6 bg-gray-700 p-3 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <input
              type="checkbox"
              name="trialClass"
              checked={formData.trialClass}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-yellow-400 rounded focus:ring-yellow-400 focus:ring-opacity-50"
            />
            <label htmlFor="trialClass" className="text-white text-lg font-medium">
                 {'         '}I'd like to book a trial class
            </label>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;