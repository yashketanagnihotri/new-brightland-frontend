import React, { useEffect } from 'react';

export default function GallerySection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup if you ever remove the component
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-red-100 p-6 rounded-xl m-4 text-center">
      <h2 className="text-4xl font-bold text-red-700 mb-6">Our Lovely Students</h2>
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        {/* Elfsight Instagram Feed Embed */}
        <div className="elfsight-app-f88f9658-e17c-4e38-9fe6-009c765871dd" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}
