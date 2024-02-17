import React from "react";
import Slider from "./Slider";

const SiderBar = () => {
  return (
    <div className="sidebar-container border">
      <div className="py-4 border-b-2">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Filters</h2>
          <p className="text-red-500">Clear All</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Price</p>
          <div>
            <Slider />
          </div>
        </div>
      </div>
      <div className="py-4 border-b-2">
        <h3>Collections</h3>

        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Family OYOs"
            className="accent-green-400 "
          />
          <label htmlFor="Family OYOs" className="px-4 font-light">
            Family OYOs
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="For Group Travelers"
          />
          <label htmlFor="For Group Travelers" className="px-4 font-light">
            For Group Travelers
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Local IDs accepted"
          />
          <label htmlFor="Local IDs accepted" className="px-4 font-light">
            Local IDs accepted
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Local IDs accepted"
          />
          <label htmlFor="Local IDs accepted" className="px-4 font-light">
            OYOs Welcomes couples
          </label>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="ml-2">Option 1</span>
        </label>
      </div>
      <div>3</div>
    </div>
  );
};

export default SiderBar;
