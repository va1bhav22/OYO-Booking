import React from "react";

const Login = () => {
  return (
    <div>
      <h1>
        <title>Oyo - Login !</title>
      </h1>
      <div className=" flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover">
        <div className="absolute w-full top-10 px-20 flex  items-center">
          <h2 className="text-5xl font-bold mr-5 text-red-600 ">OYO</h2>
          <p className="font-bold text-xl text-white">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center  w-9/12">
          <div>
            <p className="font-bold text-5xl text-justify text-white">
              There’s a smarter way to OYO around
            </p>
            <p className="text-2xl mt-5 text-justify text-white">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className=" ml-20 pb-40 w-10/12  bg-white">
            <p className=" flex h-10 bg-gradient-to-r from-red-400 to bg-red-500 px-10  items-center text-white font-bold">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-10 ">
              <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
              <p className="text-lg font-bold mb-1">
                Please enter your email to continue
              </p>

              <input
                className="outline-none border-2 my-3 border-gray-200 w-96 px-2 py-2 rounded-md "
                type="text"
                placeholder="Enter your name..."
              />
              <input
                className="outline-none border-2 my-3 border-gray-200 w-96 px-2 py-2 rounded-md "
                type="email"
                placeholder="Enter your email..."
              />
              <input
                className="outline-none border-2 my-3 border-gray-200 w-96 px-2 py-2 rounded-md "
                type="password"
                placeholder="Enter your password..."
              />
              <button
                type="submit"
                className=" rounded-sm w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5"
              >
                SignUp
              </button>
              <p className="my-1 text-xl">
                <span>Already have an account ?</span>
                <span className="ml-1 border-b-2 border-red-500 pb-1 text-red-500 hover:cursor-pointer">
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
