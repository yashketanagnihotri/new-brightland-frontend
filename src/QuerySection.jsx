import React, { useState } from 'react';

export default function QueryAndAboutSection({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.query.trim()) newErrors.query = 'Query cannot be empty';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' })); // Clear error on change
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setEmailStatus(null);

    try {
      const response = await fetch('https://new-brightland-backend-production.up.railway.app/submit-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEmailStatus('success');
        setFormData({ name: '', email: '', phone: '', query: '' });
        setErrors({});
      } else {
        setEmailStatus('error');
      }
    } catch (error) {
      setEmailStatus('error');
    } finally {
      setIsSubmitting(false);
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
          <div>
            <input
              type="text"
              name="name"
              placeholder={language === 'hi' ? 'आपका नाम' : 'Your Name'}
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-blue-300 text-lg"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder={language === 'hi' ? 'ईमेल' : 'Email'}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-blue-300 text-lg"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder={language === 'hi' ? 'फोन नंबर' : 'Phone Number'}
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-blue-300 text-lg"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <textarea
              name="query"
              placeholder={language === 'hi' ? 'अपना प्रश्न लिखें...' : 'Type your query...'}
              value={formData.query}
              onChange={handleChange}
              className="w-full p-4 border border-blue-300 rounded-lg h-36 text-lg"
            />
            {errors.query && <p className="text-red-600 text-sm mt-1">{errors.query}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`mt-2 px-6 py-3 text-white font-semibold rounded-lg transition ${
              isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting
              ? language === 'hi'
                ? 'भेजा जा रहा है...'
                : 'Submitting...'
              : language === 'hi'
              ? 'प्रस्तुत करें'
              : 'Submit'}
          </button>
        </div>

        {/* Status card */}
        {emailStatus && (
          <div
            className={`mt-6 p-4 rounded-xl shadow-md text-lg font-medium ${
              emailStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {emailStatus === 'success'
              ? language === 'hi'
                ? 'ईमेल सफलतापूर्वक भेजा गया!'
                : 'Email sent successfully!'
              : language === 'hi'
              ? 'ईमेल भेजने में विफल। कृपया पुनः प्रयास करें।'
              : 'Failed to send email. Please try again.'}
          </div>
        )}
      </div>
    </section>
  );
}
