import React, { useState } from 'react';
import './ContactForm.css'

function ContactForm({ onSave }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let valid = true;

    setNameError('');
    setEmailError('');
    setPhoneError('');
    setSuccessMessage('');

    const nameRegex = /^[A-Za-z ]{2,}$/;
    if (!nameRegex.test(name)) {
      setNameError('Name must contain only letters and be at least 2 characters long.');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address.');
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Phone must be exactly 10 digits.');
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Call the onSave function passed from parent
      if (onSave) {
        onSave({ name, email, phone });
      }

      setSuccessMessage('Contact saved successfully!');

      setName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <div className='contact-page'>
      <div className="contact-left">
        <div className="logo">
          <span style={{ fontWeight: 'bold', fontSize: '28px', color: 'green' }}>
            <span style={{ marginRight: '4px' }}>📇</span> Contact Form
          </span>
        </div>

        <h2 style={{ fontSize: '15px', color: '#333', textAlign: 'center' }}>
          Manage all your contacts <br /> in one simple dashboard.
        </h2>
      </div>

      <div className='contact-right'>
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <div style={{ color: 'red', fontSize: '14px' }}>{nameError}</div>}
          </div>
          <br />

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div style={{ color: 'red', fontSize: '14px' }}>{emailError}</div>}
          </div>
          <br />

          <div>
            <input
              type="text"
              placeholder="Phone No."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <div style={{ color: 'red', fontSize: '14px' }}>{phoneError}</div>}
          </div>
          <br />

          <button type="submit">Save</button>
        </form>

        {successMessage && (
          <p style={{ color: 'green', fontWeight: 'bold', marginTop: '20px' }}>{successMessage}</p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
