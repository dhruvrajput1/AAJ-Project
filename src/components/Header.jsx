
const Header = () => {
  return (
    <header className=" text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="public/aaj_swift_logo.png" alt="AAJ Sawfly" className="h-8 mr-2" />
        </div>
        <nav className="flex space-x-8">
          <a href="#" className=" text-black hover:text-gray-200">
            Company
          </a>
          <a href="#" className="text-black hover:text-gray-200">
            Calculate Shipping Cost
          </a>
          <a href="#" className="text-black hover:text-gray-200">
            Blogs
          </a>
          <a href="#" className="text-black hover:text-gray-200">
            Contact Us
          </a>
          <a href="#" className=" text-red-500 px-4 py-2 rounded hover:bg-gray-200">
            Track Shipment
          </a>
          <a href="#" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-200">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;