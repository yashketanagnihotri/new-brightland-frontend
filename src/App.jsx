// App.jsx
import React,{ useState } from 'react';
import QuerySection from './QuerySection';
import AboutSection from './AboutSection';
import AmenitiesSection from './AmenitiesSection';
import CoursesSection from './CoursesSection';
import AddressSection from './AddressSection';
import GallerySection from './GallerySection';
import GamesSection from './GamesSection';
import Header from './Header';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <QuerySection language={language} />
      <AmenitiesSection language={language} />
      <GallerySection />
      <CoursesSection language={language} />
      <GamesSection language={language} />
      <AddressSection language={language} />
    </div>
  );
}

export default App;