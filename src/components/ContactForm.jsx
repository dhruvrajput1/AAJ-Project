
const ContactForm = () => {
  return (
    <div className="flex justify-center mt-24">
      <div className=" bg-rose-50 p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-center text-gray-700 text-lg font-medium mb-6">
          Fill the form and our sales representative will call you back within 24 hours
        </h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Phone Input */}
          <div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Dropdown */}
          <div>
            <select
              className="w-full border border-gray-300 rounded-md p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option>Contact Support</option>
              <option>Technical Support</option>
              <option>Sales Inquiry</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message Input */}
          <div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-800 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
