import React, { useState } from 'react';

export default function QueryAndAboutSection({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('API_URL_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Query submitted:', data);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row w-full bg-blue-50 rounded-2xl shadow-lg overflow-hidden">
      {/* About Section */}
      <div className="lg:w-1/2 p-8 bg-blue-100 text-center flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            {language === 'hi' ? 'हमारे बारे में' : 'About Us'}
          </h2>
          <p className="text-lg text-blue-900 leading-relaxed mb-6">
            {language === 'hi'
              ? 'New Brightland School बच्चों के लिए एक प्यार भरा और सुरक्षित वातावरण प्रदान करता है जहाँ वे सीखते हैं, खेलते हैं और बढ़ते हैं। हम 5 साल तक की उम्र के बच्चों के लिए खासकर एक मजबूत नींव बनाने पर ध्यान केंद्रित करते हैं।'
              : 'New Brightland School provides a loving and safe environment where children learn, play, and grow. We focus on building a strong foundation specifically for children up to the age of 5.'}
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/abc-background-illustration_23-2150562172.jpg?semt=ais_country_boost&w=740"
          alt="Preschool Illustration"
          className="w-full max-w-xs mx-auto rounded-xl mt-4"
        />
      </div>

      {/* Query Section */}
      <div className="lg:w-1/2 p-8 bg-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          {language === 'hi' ? 'संपर्क करें / प्रश्न पूछें' : 'Contact Us / Ask a Query'}
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={language === 'hi' ? 'आपका नाम' : 'Your Name'}
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-blue-300 text-lg"
          />
          <input
            type="email"
            name="email"
            placeholder={language === 'hi' ? 'ईमेल' : 'Email'}
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-blue-300 text-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder={language === 'hi' ? 'फोन नंबर' : 'Phone Number'}
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-blue-300 text-lg"
          />
          <textarea
            name="query"
            placeholder={language === 'hi' ? 'अपना प्रश्न लिखें...' : 'Type your query...'}
            value={formData.query}
            onChange={handleChange}
            className="w-full p-4 border border-blue-300 rounded-lg h-36 text-lg"
          />

          <button
            onClick={handleSubmit}
            className="mt-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {language === 'hi' ? 'प्रस्तुत करें' : 'Submit'}
          </button>
        </div>
      </div>
    </section>
  );
}
