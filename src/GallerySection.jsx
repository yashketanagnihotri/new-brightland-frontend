import React from 'react';

const images = [
  'https://content3.jdmagicbox.com/comp/bhopal/b4/0755px755.x755.160405135747.t6b4/catalogue/bright-land-primary-school-jawahar-chowk-bhopal-primary-schools-q2s39vklsb.jpg',
  'https://www.bachpanglobal.com/img/nursey.webp',
  'https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/enjoyable-picnic-games-870x570.jpg',
  'https://go.clueylearning.com.au/codeCampResources/images/fun-indoor-activities-for-kids.jpg',
];

export default function GallerySection() {
  return (
    <section className="bg-red-100 p-6 rounded-xl m-4 text-center">
      <h2 className="text-4xl font-bold text-red-700 mb-6">Our Lovely Students</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Student ${index + 1}`}
            className="rounded-2xl w-full h-52 object-cover shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}
