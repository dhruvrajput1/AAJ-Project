import { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [isBusinessWithGST, setIsBusinessWithGST] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [gstNumber, setGSTNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email Id
          
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="mobileNo">
          Mobile No.
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mobileNo"
          type="tel"
          placeholder="Enter your mobile number"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="isBusinessWithGST">
          Are you a business which needs GST invoice
        </label>
        <div className="flex items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="isBusinessWithGST"
              value="yes"
              checked={isBusinessWithGST}
              onChange={() => setIsBusinessWithGST(true)}
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio"
              name="isBusinessWithGST"
              value="no"
              checked={!isBusinessWithGST}
              onChange={() => setIsBusinessWithGST(false)}
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
          Company Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="companyName"
          type="text"
          placeholder="Enter your company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="companyAddress">
          Company Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="companyAddress"
          type="text"
          placeholder="Enter your company address"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        />
      </div>
      <div className="mb-4 flex">
        <div className="w-1/2 mr-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
            State
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            placeholder="Enter your state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="pincode">
            Pincode
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pincode"
            type="text"
            placeholder="Enter your pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="gstNumber">
          GST Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="gstNumber"
          type="text"
          placeholder="Enter your GST number"
          value={gstNumber}
          onChange={(e) => setGSTNumber(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800" href="#">
          Add New GST
        </a>
      </div>
    </form>
  );
};

export default RegistrationForm;