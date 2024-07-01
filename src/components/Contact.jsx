import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder='Type your email...'
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <span className="error-message">{errors.message.message}</span>}
        </div>

        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
