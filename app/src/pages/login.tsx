import React, { useEffect, useState } from "react";
import { oyoLogin } from "../images";

import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
const Login = () => {
  const [isLoggedIn, SetLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<Object>({});
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = () => {
    SetLogin(!isLoggedIn);
  };

  const mutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await fetch(
        "http://localhost:3003/api/v1/user/sign-in",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const loginData = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", loginData.data.token);
        SetLogin(true);
      } else {
        setError(loginData.message);
      }
      // Handle response data as needed
      setUser(loginData.data);
      setEmail("");
      setPassword("");

      return loginData;
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({ email, password });
  };

  useEffect(() => {
    const user = localStorage.getItem("access_token");
    if (user) {
      SetLogin(true);
    } else {
      SetLogin(false);
    }
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: `url('${oyoLogin}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" flex justify-center items-center relative bg-login-background bg-no-repeat bg-cover">
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
              <form onSubmit={(e) => handleSubmit(e)}>
                {isLoggedIn && (
                  <input
                    className="outline-none border-2 my-3 border-gray-200 w-96 px-2 py-2 rounded-md "
                    type="text"
                    placeholder="Enter your name..."
                  />
                )}
                <input
                  className="outline-none border-2 my-3 border-gray-200 w-96 px-2 py-2 rounded-md "
                  type="email"
                  placeholder="Enter your email..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />

                <input
                  className="outline-none border-2 my-3 border-gray-200 w-96 px-2 py-2 rounded-md "
                  type="password"
                  placeholder="Enter your password..."
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <button
                  type="submit"
                  className=" rounded-sm w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5"
                >
                  {isLoggedIn ? "SignUp" : "Login"}
                </button>
              </form>
              <p className="my-1 text-xl">
                <span>Already have an account ?</span>
                <span
                  className="ml-1 border-b-2 border-red-500 pb-1 text-red-500 hover:cursor-pointer"
                  onClick={handleClick}
                >
                  {isLoggedIn ? "Login" : "Sign Up"}
                </span>
              </p>
              {error && <div>An error occurred: {error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
