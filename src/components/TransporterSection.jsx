

const TransporterSection = () => {
  return (
    <div className="bg-white py-12 flex items-center mx-auto">
      <div className="container px-4 mx-20">
        <h2 className="text-3xl font-bold mb-4">
          Is Your Business Held Hostage by a Single Transporter?
        </h2>
        <p className="text-gray-600 mb-12">
          With our wide range of transporter network, you gain the flexibility to switch and save on every shipment.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center my-52">
        {/* Inner Image */}
        <img
          src="/transporter.png"
          alt="Transporter"
          className="absolute w-[500px] h-[500px]" // Adjust size as needed
        />
      </div>
    </div>
  );
};

export default TransporterSection;