const Header = () => {
  return (
    <header className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ml-6">
          <img src="/aaj_swift_logo.png" alt="AAJ Sawfly" className="h-8 mr-2" />
        </div>
        <div className="flex mx-6">
          <a href="#" className="text-black hover:text-red-700 mx-4">
            Company
          </a>
          <a href="#" className="text-black hover:text-red-700 mx-4">
            Calculate Shipping Cost
          </a>
          <a href="#" className="text-black hover:text-red-700 mx-4">
            Blogs
          </a>
          <a href="#" className="text-black hover:text-red-700 mx-4">
            Contact Us
          </a>
        </div>
        <nav className="flex mx-12 items-center">
          <a href="#" className="flex items-center text-red-700 px-4 py-2 rounded hover:bg-gray-200">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M15.2321 7.0492C15.2321 11.8972 8.24378 16.0526 8.24378 16.0526C8.24378 16.0526 1.25549 11.8972 1.25549 7.0492C1.25549 5.39606 1.99176 3.81063 3.30231 2.64169C4.61287 1.47275 6.39037 0.81604 8.24378 0.81604C10.0972 0.81604 11.8747 1.47275 13.1852 2.64169C14.4958 3.81063 15.2321 5.39606 15.2321 7.0492Z" stroke="#C2202B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.2438 9.12687C9.5303 9.12687 10.5732 8.19665 10.5732 7.04915C10.5732 5.90166 9.5303 4.97144 8.2438 4.97144C6.95729 4.97144 5.91437 5.90166 5.91437 7.04915C5.91437 8.19665 6.95729 9.12687 8.2438 9.12687Z" stroke="#C2202B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Track Shipment
          </a>
          <a href="#" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-gray-200">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;