import React, { useState } from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const ContactFormHome = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    errors: {},
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);

    setData((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: error },
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const { name, email, message,phone, errors } = data;

    const nameError = validateInput("name", name);
    const emailError = validateInput("email", email);
    const messageError = validateInput("message", message);

    const hasErrors = nameError || emailError || messageError;

    if (!hasErrors) {
      setLoading(true);
      try {
        const response = await fetch("/api/mail", { // Adjusted endpoint URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message, phone }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if (result.message) {
          setSuccess(true);
          setData({ name: "", email: "", message: "",phone: "", errors: {} });
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.warn("Form submission failed due to errors:", errors);
    }
  };

  const validateInput = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "message":
        if (value.length < 10) {
          error = "Message must be at least 10 characters long";
        }
        break;
      default:
        break;
    }
    return error;
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input type="hidden" name="formType"  />
        
        {/* Full Name */}
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="name" className="text-white">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
            placeholder="Enter your full name"
            className="bg-white p-2 text-[#525C60] outline-none rounded-md h-[45px] pl-[20px]"
          />
        {data.errors.name && (
          <p className="error-message text-[red]">{data.errors.name}</p>
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
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Enter Your email address"
            className="bg-white p-2 text-[#525C60] outline-none rounded-md h-[45px] pl-[20px]"
          />
        {data.errors.email && (
          <p className="error-message text-[red]">{data.errors.email}</p>
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
            value={data.phone}
            onChange={onChangeHandler}
            placeholder="Enter Your mobile number"
            className="bg-white p-2 text-[#525C60] outline-none rounded-md h-[45px] pl-[20px]"
          />

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
            value={data.message}
            onChange={onChangeHandler}
            placeholder="Enter Your Message"
            className="bg-white p-2 text-[#525C60] outline-none h-[90px] rounded-md pl-[20px]"
          />
        {data.errors.message && (
          <p className="error-message text-[red]">{data.errors.message}</p>
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
          {success && <div className="text-black font-bold">Email sent successfully!</div>}
        </div>
        
        {/* Error and Success Messages
        {submitError && (
          <p className="text-red-500">{submitError}</p>
        )}
        {submitSuccess && (
          <p className="text-black font-bold">Form submitted successfully!</p>
        )} */}
      </form>
    </>
  );
};

export default ContactFormHome;
