import React from "react";
import Slider from "./Slider";

const SiderBar = () => {
  return (
    <div className="sidebar-container overflow-y-scroll  ">
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
        <h3 className="font-normal py-2">Collections</h3>

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
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Local IDs accepted"
          />
          <label htmlFor="International Guests" className="px-4 font-light">
            International Guests
          </label>
        </div>
      </div>
      <div className="py-4 border-b-2">
        <h3 className="font-normal py-2">Hotel Facilities</h3>

        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Seating area"
            className="accent-green-400 "
          />
          <label htmlFor="Seating area" className="px-4 font-light">
            Seating area
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" id="red" name="color" value="Balcony" />
          <label htmlFor="Balcony" className="px-4 font-light">
            Balcony
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" id="red" name="color" value="King Size Bed" />
          <label htmlFor="King Size Bed" className="px-4 font-light">
            King Size Bed
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Queen Sized Bed"
          />
          <label htmlFor="Queen Sized Bed" className="px-4 font-light">
            Queen Sized Bed
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" id="red" name="color" value="Twin Sized Bed" />
          <label htmlFor="Twin Sized Bed" className="px-4 font-light">
            Twin Sized Bed
          </label>
        </div>
      </div>
      <div className="py-4 border-b-2">
        <h3 className="font-normal py-2">Categories</h3>

        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="OYO Rooms"
            className="accent-green-400 "
          />
          <label htmlFor="OYO Rooms" className="px-4 font-light">
            <span className="font-semibold">OYO Rooms</span> - Super affordable
            to stay with amenities
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Townhouse"
            className="accent-green-400 "
          />
          <label htmlFor="Townhouse" className="px-4 font-light">
            <span className="font-semibold">Townhouse</span> - Your Friendly
            premium hotel
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="FlagShip"
            className="accent-green-400 "
          />
          <label htmlFor="FlagShip" className="px-4 font-light">
            <span className="font-semibold">Flagship</span> - Affordable Hotels
            at premium locations
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Capital O"
            className="accent-green-400 "
          />
          <label htmlFor="Capital O" className="px-4 font-light">
            <span className="font-semibold">Capital O</span> - Premium hotels
            with spacious rooms for business travelers and family
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Collection O"
            className="accent-green-400 "
          />
          <label htmlFor="Collection O" className="px-4 font-light">
            <span className="font-semibold">Collection O</span> - A Space for
            new-age travelers and family
          </label>
        </div>
      </div>
      <div className="py-4 border-b-2">
        <h3 className="font-normal py-2">Accomodation Type</h3>

        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="OYO Homes"
            className="accent-green-400 "
          />
          <label htmlFor="OYO Homes" className="px-4 font-light">
            OYO Homes
          </label>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Hotel"
            className="accent-green-400 "
          />
          <label htmlFor="Hotel" className="px-4 font-light">
            Hotel
          </label>
        </div>
      </div>
      <div className="py-4">
        <h3 className="font-normal py-2">Check-in features</h3>

        <div className="py-3">
          <input
            type="checkbox"
            id="red"
            name="color"
            value="Pay At Hotel"
            className="accent-green-400 "
          />
          <label htmlFor="Pay At Hotel" className="px-4 font-light">
            Pay At Hotel
          </label>
        </div>
      </div>
    </div>
  );
};

export default SiderBar;
