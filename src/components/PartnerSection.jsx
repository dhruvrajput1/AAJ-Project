

// Image imports (replace with your actual image paths or URLs)
// import NextEducation from './images/next-education.png';
// import Khaitan from './images/khaitan.png';
// import TalkingSox from './images/talking-sox.png';
// import Verde from './images/verde.png';
// import Synergy from './images/synergy.png';
// import FruitnRoot from './images/fruitn-root.png';
// import Tynor from './images/tynor.png';

const PartnerSection = () => {
  const partners = [
    { name: 'Next Education' },
    { name: 'Khaitan' },
    { name: 'Talking Sox'},
    { name: 'Verde' },
    { name: 'Synergy' },
    { name: 'Fruit n Root' },
    { name: 'Tynor'},
  ];

  return (
    <section className="py-12 text-center bg-gray-50">
      <h2 className="text-2xl font-bold">Logistics Partner for Exponential Growth</h2>
      <p className="text-gray-500 mt-2">Trusted by top brands and small businesses alike</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 mx-auto max-w-4xl">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-white shadow-md rounded-md">
            <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;