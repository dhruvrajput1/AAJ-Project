import React, { useState } from 'react';

// Replace with actual image imports or URLs
import TynorLogo from '/tynor.png';
import PearsonLogo from '/pearson.png';
import User1 from '/janpeet.png';
import User2 from '/mark.png';

const testimonials = [
  {
    text: "It was a tough time when they started operation, considering restrictions on road entries, new customers and high expectations of dealers etc., was the big challenges to them. But, the team of AAJ enterprises has been focused on their duties since the 1st day.",
    name: "Jaspreet Singh",
    position: "Senior Manager",
    company: "Tynor Orthotics Pvt. Ltd.",
    logo: TynorLogo,
    image: User1,
  },
  {
    text: "AAJ and their employees were very attentive to our needs even during times of minimal notice. For protection of our sales during the relocation, we set up parallel shipping operation with AAJ and the agreed upon project time lines were met both from operations and systems standpoint. In future we won’t hesitate to avail services of AAJ if required.",
    name: "Glenn Cipriani",
    position: "VP Distribution",
    company: "Pearson India Education Services Pvt. Ltd.",
    logo: PearsonLogo,
    image: User2,
  },
  // Add more testimonials as needed
];


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation buttons
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 bg-black rounded-md text-white relative mx-20">
      <h2 className="text-3xl mx-6 mb-8">Client Testimonials</h2>

      {/* Testimonial Card */}
      <div className="flex justify-center">
        <div className="max-w-2xl flex bg-white rounded-lg shadow-lg p-8 space-x-4">
          {/* Left Side - Testimonial Text */}
          <div className="flex-1 pr-4 border-r border-gray-200">
            <p className="text-gray-700 mb-6 italic">{testimonials[currentIndex].text}</p>
          </div>

          {/* Right Side - Image and Info */}
          <div className="flex flex-col items-center pl-4 ">
            {/* User Image */}
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Name and Position */}
            <div className="text-center">
              <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p>
            </div>

            {/* Company Logo and Name */}
            <div className="flex flex-col items-center">
              <img src={testimonials[currentIndex].logo} alt={testimonials[currentIndex].company} className="h-6 mb-1" />
              <p className="text-xs text-gray-500">{testimonials[currentIndex].company}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-12 right-4 flex space-x-2">
        <button
          onClick={handlePrev}
          className="bg-gray-800 border-2 hover:bg-red-700 hover:border-transparent text-white rounded-full size-9"
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 border-2 hover:bg-red-700 hover:border-transparent text-white rounded-full size-9"
          aria-label="Next testimonial" 
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;