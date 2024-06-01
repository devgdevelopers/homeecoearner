"use client";
import React, { useState } from "react";
import axios from "axios";

// Utility function to validate input (unchanged)
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
    const { name, email, message, errors } = data;

    const nameError = validateInput("name", name);
    const emailError = validateInput("email", email);
    const messageError = validateInput("message", message);

    const hasErrors = nameError || emailError || messageError;

    setData((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        name: nameError,
        email: emailError,
        message: messageError,
      },
    }));
    console.log("Sending request with method:", axios.defaults.method); // Should be "POST"

    if (!hasErrors) {
      setLoading(true);

      // Display the form data on the console
      console.log("Form Data:", { name, email, message });

      try {
        const response = await axios.post("/api/sendMail", {
          name,
          email,
          message,
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const result = response.data;
        if (result.success) {
          setSuccess(true);
          setData({ name: "", email: "", message: "", errors: {} });
        } else {
          console.error("API error:", result.message);
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

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={onChangeHandler}
          placeholder="Your Name"
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input"
        />
        {data.errors.name && (
          <p className="error-message text-red-500">{data.errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onChangeHandler}
          placeholder="Your Email"
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input"
        />
        {data.errors.email && (
          <p className="error-message text-red-500">{data.errors.email}</p>
        )}

        <textarea
          name="message"
          value={data.message}
          onChange={onChangeHandler}
          placeholder="How Can We Help You?"
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input"
        />
        {data.errors.message && (
          <p className="error-message text-red-500">{data.errors.message}</p>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white w-48 p-3"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Now"}
        </button>
        {success && (
          <div className="text-green-500">Email sent successfully!</div>
        )}
      </form>
    </>
  );
}
