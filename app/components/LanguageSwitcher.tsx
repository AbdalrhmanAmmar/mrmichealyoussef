'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-semibold"
    >
      {language === 'ar' ? 'English' : 'العربية'}
    </button>
  );
}