import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const courseDetails = [
  {
    title: '🎓 Alphabet Fun & Phonics',
    title_hi: '🎓 अक्षर मस्ती और फॉनिक्स',
    description:
      'This course introduces children to the English alphabet using colorful flashcards, songs, and games. Each letter is associated with a fun image and sound to improve letter recognition and phonemic awareness.',
    description_hi:
      'यह कोर्स बच्चों को रंग-बिरंगे फ्लैशकार्ड्स, गानों और खेलों के माध्यम से अंग्रेजी वर्णमाला से परिचित कराता है। प्रत्येक अक्षर को एक मजेदार चित्र और ध्वनि से जोड़ा जाता है ताकि बच्चे अक्षरों को पहचानना और उनका उच्चारण करना सीखें।',
    benefit:
      'Helps develop foundational reading and speaking skills. Phonics at an early age prepares students to decode words and speak confidently.',
    benefit_hi:
      'मूल पढ़ने और बोलने के कौशल को विकसित करता है। प्रारंभिक अवस्था में फॉनिक्स सीखने से बच्चे शब्दों को पहचानना और आत्मविश्वास के साथ बोलना सीखते हैं।'
  },
  {
    title: '🔢 Basic Numbers & Counting',
    title_hi: '🔢 मूल संख्या और गिनती',
    description:
      'A playful approach to understanding numbers through stories, songs, finger counting, and hands-on objects like toys and beads.',
    description_hi:
      'कहानियों, गीतों, उंगलियों से गिनती और खिलौनों व मोतियों जैसे वस्तुओं का उपयोग करके संख्याओं को मज़ेदार तरीके से सिखाया जाता है।',
    benefit:
      'Strengthens mathematical thinking, logical reasoning, and prepares children for higher arithmetic learning later.',
    benefit_hi:
      'गणितीय सोच और तर्क शक्ति को मजबूत करता है और आगे की अंकगणितीय शिक्षा के लिए बच्चों को तैयार करता है।'
  },
  {
    title: '📚 Storytelling & Rhymes',
    title_hi: '📚 कहानी सुनाना और कविताएं',
    description:
      'Imaginative stories and rhymes told in group settings using puppets, flashcards, and expressive play to engage young minds.',
    description_hi:
      'कल्पनाशील कहानियों और कविताओं को समूह में कठपुतलियों, फ्लैशकार्ड्स और नाटकीय खेल के माध्यम से प्रस्तुत किया जाता है ताकि बच्चों की रुचि बनी रहे।',
    benefit:
      'Boosts vocabulary, listening comprehension, emotional intelligence, and enhances memory retention.',
    benefit_hi:
      'शब्दावली, सुनने की समझ, भावनात्मक बुद्धिमत्ता और स्मरण शक्ति को बढ़ाता है।'
  },
  {
    title: '🎨 Art & Craft Time',
    title_hi: '🎨 कला और शिल्प का समय',
    description:
      'Fun sessions where children use paint, clay, paper, and recycled items to create art. Includes themed crafts for festivals and seasons.',
    description_hi:
      'बच्चे रंग, मिट्टी, कागज और पुनर्नवीनीकरण वस्तुओं से कला बनाना सीखते हैं। इसमें त्योहारों और मौसमों से संबंधित थीम वाले शिल्प भी शामिल होते हैं।',
    benefit:
      'Improves hand-eye coordination, boosts imagination, and gives children a sense of accomplishment and pride.',
    benefit_hi:
      'हाथ-आंख समन्वय को बेहतर बनाता है, कल्पनाशक्ति को प्रोत्साहित करता है और बच्चों को गर्व की अनुभूति देता है।'
  },
  {
    title: '🎶 Music & Dance',
    title_hi: '🎶 संगीत और नृत्य',
    description:
      'Interactive musical sessions where kids sing, clap, play simple instruments, and dance to rhythm-based activities.',
    description_hi:
      'संगीत सत्रों में बच्चे गाते हैं, ताली बजाते हैं, सरल वाद्ययंत्र बजाते हैं और ताल आधारित गतिविधियों पर नाचते हैं।',
    benefit:
      'Helps with rhythm recognition, emotional expression, and confidence building through joyful movement.',
    benefit_hi:
      'ताल की पहचान, भावनाओं की अभिव्यक्ति और आत्मविश्वास को बढ़ावा देता है।'
  },
  {
    title: '⚽ Physical Play & Motor Skills',
    title_hi: '⚽ शारीरिक खेल और मोटर कौशल',
    description:
      'Structured outdoor play, obstacle courses, balance games, and team-based movement sessions to promote physical health.',
    description_hi:
      'संरचित आउटडोर खेल, बाधा कोर्स, संतुलन खेल और टीम आधारित गतिविधियों के माध्यम से शारीरिक स्वास्थ्य को बढ़ावा दिया जाता है।',
    benefit:
      'Enhances strength, coordination, and social bonding. Also channels energy positively and builds healthy habits.',
    benefit_hi:
      'शक्ति, समन्वय और सामाजिक संबंधों को बढ़ावा देता है। साथ ही ऊर्जा को सकारात्मक रूप से दिशा देता है और स्वस्थ आदतें विकसित करता है।'
  }
];

export default function CoursesSection({ language }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isHindi = language === 'hi';

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-green-100 p-6 rounded-xl m-4 text-center">
      <h2 className="text-4xl font-bold text-green-700 mb-6">
        {isHindi ? 'हमारे पाठ्यक्रम' : 'Courses We Offer'}
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto text-left">
        {courseDetails.map((course, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center px-6 py-6 text-xl font-semibold text-green-800 hover:bg-green-200 transition-all duration-200"
            >
              {isHindi ? course.title_hi : course.title}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="px-8 py-6 text-green-900 bg-green-50 space-y-5 animate-fade-in">
                <p className="text-lg leading-relaxed">
                  <strong>{isHindi ? 'क्या है ये:' : 'What it means:'}</strong> <br />
                  {isHindi ? course.description_hi : course.description}
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>{isHindi ? 'फायदा क्या है:' : 'How it helps:'}</strong> <br />
                  {isHindi ? course.benefit_hi : course.benefit}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
