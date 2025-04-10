import React, { useState } from 'react';

const amenities = [
  {
    title: '🏫 Modern Building',
    title_hi: '🏫 आधुनिक भवन',
    description:
      'Our campus is designed with safety and creativity in mind, offering bright classrooms, safe flooring, child-height facilities, and natural lighting.',
    description_hi:
      'हमारा कैंपस सुरक्षा और रचनात्मकता को ध्यान में रखते हुए डिज़ाइन किया गया है, जिसमें उज्ज्वल कक्षाएं, सुरक्षित फर्श, बच्चों की ऊंचाई के अनुसार सुविधाएं और प्राकृतिक रोशनी है।'
  },
  {
    title: '👩‍🏫 Great Teachers',
    title_hi: '👩‍🏫 उत्कृष्ट शिक्षक',
    description:
      'Our educators are trained in early childhood development and make learning exciting, compassionate, and individualized for each child.',
    description_hi:
      'हमारे शिक्षक प्रारंभिक बाल्यावस्था विकास में प्रशिक्षित हैं और प्रत्येक बच्चे के लिए सीखने को रोमांचक, संवेदनशील और व्यक्तिगत बनाते हैं।'
  },
  {
    title: '🧠 Sophisticated Architecture',
    title_hi: '🧠 परिष्कृत वास्तुकला',
    description:
      'The school layout promotes curiosity, comfort, and collaborative learning. Children move freely between play zones, reading nooks, and creative spaces.',
    description_hi:
      'स्कूल की रूपरेखा जिज्ञासा, सुविधा और सामूहिक सीख को बढ़ावा देती है। बच्चे खेल क्षेत्र, पढ़ने की जगह और रचनात्मक क्षेत्रों में स्वतंत्र रूप से घूमते हैं।'
  },
  {
    title: '🛝 Safe & Engaging Play Area',
    title_hi: '🛝 सुरक्षित और रोमांचक खेल क्षेत्र',
    description:
      'Our outdoor and indoor play zones are built with padded flooring, secure boundaries, and age-appropriate toys to help develop motor and social skills.',
    description_hi:
      'हमारे इनडोर और आउटडोर खेल क्षेत्र गद्देदार फर्श, सुरक्षित सीमाओं और उम्र-उपयुक्त खिलौनों के साथ बनाए गए हैं ताकि मोटर और सामाजिक कौशल विकसित किए जा सकें।'
  },
  {
    title: '🎨 Extracurricular Activities',
    title_hi: '🎨 अतिरिक्त पाठ्यक्रम गतिविधियाँ',
    description:
      'We encourage holistic development through music, art, drama, dance, puppet shows, and story enactments—helping children explore their creativity and express themselves freely.',
    description_hi:
      'हम संगीत, कला, नाटक, नृत्य, कठपुतली शो और कहानी अभिनय जैसी गतिविधियों के माध्यम से समग्र विकास को प्रोत्साहित करते हैं—जिससे बच्चे अपनी रचनात्मकता को खोजें और स्वतंत्र रूप से अभिव्यक्त करें।'
  }
];

export default function AmenitiesSection({ language }) {
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const isHindi = language === 'hi';

  return (
    <section className="bg-yellow-100 p-6 rounded-xl m-4 text-center">
      <h2 className="text-4xl font-bold text-yellow-700 mb-6">
        {isHindi ? 'हमारी सुविधाएँ' : 'Our Amenities'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto place-items-center">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            onClick={() => setSelectedAmenity(amenity)}
            className="bg-white cursor-pointer hover:scale-105 transition-transform duration-300 p-6 rounded-2xl shadow-lg text-yellow-800 text-xl font-semibold text-center w-full"
          >
            {isHindi ? amenity.title_hi : amenity.title}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAmenity && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedAmenity(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md p-8 rounded-2xl shadow-xl text-yellow-900 text-left animate-fade-in space-y-4"
          >
            <h3 className="text-2xl font-bold">
              {isHindi ? selectedAmenity.title_hi : selectedAmenity.title}
            </h3>
            <p className="text-lg leading-relaxed">
              {isHindi ? selectedAmenity.description_hi : selectedAmenity.description}
            </p>
            <button
              onClick={() => setSelectedAmenity(null)}
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-xl transition"
            >
              {isHindi ? 'बंद करें' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
