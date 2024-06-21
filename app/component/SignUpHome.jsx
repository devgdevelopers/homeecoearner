import React, { useState } from 'react'

const SignUpHome = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
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
    const { name, email, errors } = data;

    const nameError = validateInput("name", name);
    const emailError = validateInput("email", email);

    const hasErrors = nameError || emailError;

    if (!hasErrors) {
      setLoading(true);
      try {
        const response = await fetch("/api/homeSignup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if (result.message) {
          setSuccess(true);
          setData({ name: "", email: "", errors: {} });
        } else {
          console.error("Failed to sign up");
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
      default:
        break;
    }
    return error;
  };
  return (
    <>
     <section className="w-full py-14 join-signup-form flex justify-center flex-col items-center">
        <div className="container mx-auto">
          <h1 className="font-bold text-[30px] md:text-[50px] text-center text-[#fff] ">
            Sign Up Today
          </h1>
        </div>
        <div className="mx-auto container">
          <form action="" className="flex flex-col w-[90%] md:w-[545px]  mx-auto"
           onSubmit={onSubmitForm}>
            <div className="flex flex-col">
              <label htmlFor="Name" className="text-lg text-white my-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={onChangeHandler}
                placeholder="Enter your Full Name"
                className="text-green placeholder:text-white bg-transparent signup-form-input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-white my-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={onChangeHandler}
                placeholder="Enter your Email Address"
                className="text-green placeholder:text-white bg-transparent signup-form-input"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="sign-up-btn my-5 text-xl text-white hover:font-semibold"
            >
              {loading ? "Wait A Moment..." : "Join Now"}
            </button>
            {success && <div className="text-black text-center font-bold">Sign up successful!</div>}
            <h6 className="text-sm text-center text-white">
              Privacy Policy: We promise to keep your email address safe
            </h6>
          </form>
        </div>
      </section>

    </>
  )
}

export default SignUpHome