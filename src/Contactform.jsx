import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) formErrors.message = 'Message is required';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Contact Me</h2>
      {submitted && <div className="alert alert-success">Thanks for reaching out!</div>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
            id="message" 
            rows="5" 
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
}
