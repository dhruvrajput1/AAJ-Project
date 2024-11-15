import { useState } from 'react';

const ClientTestimonials = () => {
  const testimonials = [
    {
      text: 'It was a tough time when they started operation, considering restrictions on road entries, new customers and high expectations of dealers etc., was the big challenges to them. But, the team of AAJ enterprises has been focused on their duties since the 1st day.',
      author: 'Jasprit Singh, Senior Manager',
      company: 'Tynor Orthotics Pvt. Ltd.',
      image: '/janpeet.png'
    },
    {
      text: 'AAJ and their employees were very attentive to our needs even during times of minimal notice. For protection of our sales during the relocation we set up parallel shipping operation with AAJ and the agreed-upon project time lines were met both from operations and systems standpoint. In future we wont hesitate to avail services of AAJ if required.',
      author: 'Glenn Grzani, VP Distribution',
      company: 'Pearson India Education Services Pvt. Ltd.',
    },
    {
      text: '"We have processed more than 1 million units from AAJ warehouse since Feb 2022, we just started operations from AAJ in March 2022 and this was 4th month of our operations. What makes more satisfying is the bulk outward units for Feb 2023 were close to 800,000 and our achievement was 97.34% on budgeted 95%, this too with only 3 less days."',
      author: 'Glenn Grzani, VP Distribution',
      company: 'Pearson India Education Services Pvt. Ltd.',
      image: '/mark.png'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Client Testimonials</h2>
          <div className="flex space-x-4">
            <button
              onClick={handlePrevious}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-8">
            <img src={testimonials[currentIndex].image}></img>
          <p className="text-gray-400 italic mb-4">{testimonials[currentIndex].text}</p>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">{testimonials[currentIndex].author}</h3>
              <p className="text-gray-500">{testimonials[currentIndex].company}</p>
            </div>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-red-500' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;