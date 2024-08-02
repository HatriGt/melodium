import React from 'react';
import useForm from '../hooks/useForm';

function RegistrationForm() {
  const { values, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
  });

  return (
    <section id="register" className="registration-form">
      <h2>Register for a Class</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
        />
        <select
          name="course"
          value={values.course}
          onChange={handleChange}
          required
        >
          <option value="">Select a Course</option>
          <option value="carnatic">Carnatic Vocals</option>
          <option value="tamil">Tamil Film Songs</option>
          <option value="english">English Pop</option>
        </select>
        <textarea
          name="experience"
          value={values.experience}
          onChange={handleChange}
          placeholder="Tell us about your musical experience"
        ></textarea>
        <button type="submit">Register Now</button>
      </form>
    </section>
  );
}

export default RegistrationForm;