import React, { useState } from "react";

const RegistrationForm = () => {
  // State to handle GST toggle
  const [needsGST, setNeedsGST] = useState(null);

  // Handler for GST buttons
  const handleGSTToggle = (value) => {
    setNeedsGST(value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 w-full">
      <form className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Id
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
          />
        </div>

        {/* Mobile Input */}
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile No.
          </label>
          <input
            type="tel"
            id="mobile"
            className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
          />
        </div>

        {/* GST Toggle */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Are you a business which needs GST invoice?
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-md font-medium border ${
                needsGST === true
                  ? "bg-red-600 text-white"
                  : "bg-white border-red-600 text-red-600"
              }`}
              onClick={() => handleGSTToggle(true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md font-medium border ${
                needsGST === false
                  ? "bg-red-600 text-white"
                  : "bg-white border-red-600 text-red-600"
              }`}
              onClick={() => handleGSTToggle(false)}
            >
              No
            </button>
          </div>
        </div>

        {/* GST Fields */}
        {needsGST && (
          <>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">
                Company Address
              </label>
              <input
                type="text"
                id="companyAddress"
                className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              />
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700">
                GST Number
              </label>
              <input
                type="text"
                id="gstNumber"
                className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              />
            </div>

            <button
              type="button"
              className="mb-6 border border-red-500 text-red-500 px-4 py-2 rounded-md font-medium hover:bg-red-100"
            >
              Add New GST
            </button>
          </>
        )}

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md font-medium hover:bg-red-700"
        >
          Register
        </button>

        {/* Terms & Conditions */}
        <p className="text-sm text-gray-600 text-center mt-4">
          By continuing you agree to the{" "}
          <a href="#" className="text-red-600 underline">
            Terms & Conditions
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
