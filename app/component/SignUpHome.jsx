import React from 'react'

const SignUpHome = () => {
  return (
    <>
     <section className="w-full py-14 join-signup-form flex justify-center flex-col items-center">
        <div className="container mx-auto">
          <h1 className="font-bold text-[30px] md:text-[50px] text-center text-[#fff] ">
            Sign Up Today
          </h1>
        </div>
        <div className="mx-auto container">
          <form action="" className="flex flex-col w-[90%] md:w-[545px]  mx-auto">
            <div className="flex flex-col">
              <label htmlFor="Name" className="text-lg text-white my-2">
                Full Name
              </label>
              <input
                type="text"
                name=""
                id="Name"
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
                name=""
                id="email"
                placeholder="Enter your Email Address"
                className="text-green placeholder:text-white bg-transparent signup-form-input"
              />
            </div>
            <button
              type="submit"
              className="sign-up-btn my-5 text-xl text-white hover:font-semibold"
            >
              Join Now
            </button>
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