
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto px-6 md:px-16">
                <div className=" flex-wrap justify-between gap-6 my-6">
                    {/* Logo and Tagline */}
                        <div>
                            <img className="w-52 " src="/aaj_swift_logo.png"></img>
                        </div>
                        <div className="mx-auto my-12">
                            <p className="text-gray-600 mt-2">Optimizing supply chains through warehousing and transportation services</p>
                        </div>


                    <hr />

                    <div className='flex'>
                        {/* Company Section */}
                        <div className="w-full md:w-1/6">
                            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Our Story</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Careers at AAJ</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Services Section */}
                        <div className="w-full md:w-1/6">
                            <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-red-600">E Commerce Fulfillment</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Transport-AAJ Swift</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Returns Management</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Value Added Services</a></li>
                            </ul>
                        </div>

                        {/* Resources Section */}
                        <div className="w-full md:w-1/6">
                            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Case Studies</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Blogs</a></li>
                            </ul>
                        </div>

                        {/* Support Section */}
                        <div className="w-full md:w-1/6">
                            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Track Your Order</a></li>
                            </ul>
                        </div>

                        {/* Transportation Network Section */}
                        <div className="w-full md:w-1/6">
                            <h3 className="font-semibold text-gray-800 mb-4">Transportation Network</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Transportation in Mumbai</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Transportation in Bangalore</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Transportation in Delhi</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Transportation in Hyderabad</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Transportation in Ghaziabad</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-red-600">Transportation in Sonipat NCR</a></li>
                            </ul>
                        </div>
                    </div>


                </div>


                <div className="mt-10 flex flex-wrap justify-between items-center border-t border-gray-300 pt-6">
                    {/* Copyright and Certifications */}
                    <p className="text-gray-600 text-sm">
                        ©2024 AAJ Swift. All Rights Reserved <br />
                        ISO 9001: 2015, ISO 27001: 2013 Certified Company CIN: L63090DL2011PLC221234
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-600 hover:text-red-600">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-600">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-600">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
