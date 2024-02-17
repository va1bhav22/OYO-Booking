import React from "react";
import { oyoLogin } from "../images";
import Icons from "../assets/icons";

const Login = () => {
  return (
    <div
      className="min-h-screen w-full "
      style={{
        backgroundImage: `url('${oyoLogin}')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/40 min-h-screen w-full">
        <div className="public-container">
          <div>
            <span>OYO</span>
            <span>Hotels and homes across 800 cities, 24+ countries</span>
          </div>
          <div className="flex justify-center">
            <div className="flex w-[85%]">
              <div className="w-full">
                <div>
                  <span>There’s a </span>
                  <span>smarter way to</span>
                  <span> OYO around</span>
                </div>
                <p>
                  Sign up with your phone number and get exclusive access to
                  discounts and savings on OYO stays and with our many travel
                  partners.
                </p>
              </div>
              <div className="w-full border border-red-700 bg-white">
                <div className="py-2  px-6 bg-gradient-to-r from-[#ed2925] via-[#e32236] to-[#d3164c] w-full flex gap-2 items-center">
                  <span className="text-xl text-white">
                    <Icons.Discount />
                  </span>
                  <span className="text-sm text-white font-semibold">
                    Sign up & Get ₹500 OYO Money
                  </span>
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Login / Signup</h1>
                  <div className="form-group">
                    <input
                      type="text"
                      id="mobile_code"
                      className="form-control"
                      placeholder="Phone Number"
                      name="name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
