import React from 'react';

export default function Header({ language, setLanguage }) {
  return (
    <header className="bg-yellow-300 p-4 flex flex-col sm:flex-row justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold text-yellow-800">New Brightland School</h1>
      <div className="mt-2 sm:mt-0">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-l-full ${language === 'en' ? 'bg-yellow-600 text-white' : 'bg-white text-yellow-800'} border border-yellow-600`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={`px-4 py-2 rounded-r-full ${language === 'hi' ? 'bg-yellow-600 text-white' : 'bg-white text-yellow-800'} border border-yellow-600`}
        >
          हिन्दी
        </button>
      </div>
    </header>
  );
}