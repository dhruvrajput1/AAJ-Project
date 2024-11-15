
import { FaTruck, FaShippingFast, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center my-20 ">
      <div className="max-w-xl text-center my-10 ">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-left">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-8 text-left">
          Let’s Empower Your Supply Chain with Seamless and Reliable Logistics Solutions
        </p>

        {/* Divider */}
        <hr className="border-t-2 border-gray-200 mb-8" />

        {/* Features */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <FaTruck className=" text-red-700 text-3xl" />
            <div>
              <p className="text-gray-800 font-semibold">Get top-rated transporters</p>
              <p className="text-gray-600 text-sm">at unbeatable price</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <FaShippingFast className="text-red-700 text-3xl" />
            <div>
              <p className="text-gray-800 font-semibold">95% Guaranteed on-time Delivery</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-700 text-3xl" />
            <div>
              <p className="text-gray-800 font-semibold">Live Shipment Tracking</p>
              <p className="text-gray-600 text-sm">and timely updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
