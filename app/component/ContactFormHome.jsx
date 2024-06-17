import React, { useState } from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const ContactFormHome = () => {
  const [formData, setFormData] = useState({
    formType: 'contactHome',
    name: '',
    email: '',
    phone: '',
    message: '',
    errors: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateInput = (fieldName, value) => {
    let error = '';

    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Invalid phone number (must be 10 digits)';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.length < 10) {
          error = 'Message must be at least 10 characters long';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);

    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: error,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous success or error messages
    setSubmitSuccess(false);
    setSubmitError('');
    
    // Check for any validation errors before submitting
    const { name, email, phone, message } = formData;
    const nameError = validateInput('name', name);
    const emailError = validateInput('email', email);
    const phoneError = validateInput('phone', phone);
    const messageError = validateInput('message', message);

    if (nameError || emailError || phoneError || messageError) {
      setFormData({
        ...formData,
        errors: {
          name: nameError,
          email: emailError,
          phone: phoneError,
          message: messageError,
        },
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      console.log(data); // Handle success data as needed
      setSubmitSuccess(true);
      setFormData({
        formType: 'contactHome',
        name: '',
        email: '',
        phone: '',
        message: '',
        errors: {
          name: '',
          email: '',
          phone: '',
          message: '',
        },
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="formType" value={formData.formType} />
        
        {/* Full Name */}
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="name" className="text-white">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="bg-white p-2 text-[#525C60] outline-none rounded-md h-[45px] pl-[20px]"
          />
          {formData.errors.name && (
            <p className="text-red-500">{formData.errors.name}</p>
          )}
        </div>
        
        {/* Email Address */}
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="email" className="text-white">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your email address"
            className="bg-white p-2 text-[#525C60] outline-none rounded-md h-[45px] pl-[20px]"
          />
          {formData.errors.email && (
            <p className="text-red-500">{formData.errors.email}</p>
          )}
        </div>
        
        {/* Mobile Number */}
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="phone" className="text-white">
            Mobile Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your mobile number"
            className="bg-white p-2 text-[#525C60] outline-none rounded-md h-[45px] pl-[20px]"
          />
          {formData.errors.phone && (
            <p className="text-red-500">{formData.errors.phone}</p>
          )}
        </div>
        
        {/* Message */}
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            rows={4}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            className="bg-white p-2 text-[#525C60] outline-none h-[90px] rounded-md pl-[20px]"
          />
          {formData.errors.message && (
            <p className="text-red-900">{formData.errors.message}</p>
          )}
        </div>
        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`relative overflow-hidden py-2 px-6 bg-[#FFB800] rounded-3xl mx-auto text-black group priority-btn text-center font-bold my-5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            <span className="text relative z-10">Submit</span>
            <span className={`icon absolute top-1/2 transform -translate-y-1/2 left-full ${loading ? 'opacity-0' : 'opacity-100'} transition-all duration-500 z-20`}>
              <ArrowForwardOutlinedIcon className="ml-2" />
            </span>
          </button>
        </div>
        
        {/* Error and Success Messages */}
        {submitError && (
          <p className="text-red-500">{submitError}</p>
        )}
        {submitSuccess && (
          <p className="text-green-500">Form submitted successfully!</p>
        )}
      </form>
    </>
  );
};

export default ContactFormHome;
