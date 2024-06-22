'use client'
import React, { useState } from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
export default function ContactForm() {
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
      <form className="flex flex-col gap-4" onSubmit={onSubmitForm}>
    <div>
    <label htmlFor="name" className="text-[#385723] font-semibold block">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={onChangeHandler}
          placeholder="Your Name"
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input w-full md:w-5/6"
        />
        {data.errors.name && (
          <p className="error-message text-[red]">{data.errors.name}</p>
        )}
    </div>
 <div>
 <label htmlFor="email" className="text-[#385723] font-semibold block">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={onChangeHandler}
          placeholder="Your Email"
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input w-full md:w-5/6"
        />
        {data.errors.email && (
          <p className="error-message text-[red]">{data.errors.email}</p>
        )}
 </div>
 <div>
 <label htmlFor="mobile" className="text-[#385723] font-semibold block my-1">Mobile No.</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={data.phone}
          onChange={onChangeHandler}
          placeholder="Enter Your Mobile No."
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input w-full md:w-5/6"
        />

 </div>

      
     <div>
     <label htmlFor="message" className="text-[#385723] font-semibold block my-1" >Message</label>
        <textarea
          type="text"
          name="message"
          id="message"
          value={data.message}
          onChange={onChangeHandler}
          placeholder="How Can We help You ?"
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input w-full md:w-5/6"
        />
        {data.errors.message && (
          <p className="error-message text-[red]">{data.errors.message}</p>
        )}

     </div>
      
        <button type="submit" disabled={loading}  className="relative my-5 overflow-hidden py-2 px-8 bg-[#FFB800]  text-black  w-[180px]   rounded-[50px]  text-center font-bold priority-btn">
              <span className="text relative z-10 text-[20px] my-auto">
              {loading ? "Sending..." : "Send Now"}
              </span>
              <span className="icon absolute top-1/2 transform -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <ArrowForwardOutlinedIcon className="ml-2" />
              </span>
            </button>
        {success && <div className="text-green">Email sent successfully!</div>}
      
      </form>
    </>
  );
}