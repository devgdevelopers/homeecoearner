"use client";
import React, { useState } from "react";

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

    if (!hasErrors) {
      setLoading(true);
      try {
        const response = await fetch("/api/sendMail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if (result.success) {
          setSuccess(true);
          setData({ name: "", email: "", message: "", errors: {} });
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
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={onChangeHandler}
          placeholder="Your Name"
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input"
        />
        {data.errors.name && (
          <p className="error-message text-[red]">{data.errors.name}</p>
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
          <p className="error-message text-[red]">{data.errors.email}</p>
        )}

        <input
          type="text"
          name="message"
          value={data.message}
          onChange={onChangeHandler}
          placeholder="How Can We help You ?"
          className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input"
        />
        {data.errors.message && (
          <p className="error-message text-[red]">{data.errors.message}</p>
        )}

        <button
          type="submit"
          className="bg-green text-white w-[200px] p-3"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Now"}
        </button>
        {success && <div>Email sent successfully!</div>}
      </form>
    </>
  );
}
