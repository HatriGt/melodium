import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', values);
    // Here you would typically send the data to a server
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};

export default useForm;