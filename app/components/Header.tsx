"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import { translations } from '../i18n/translations';
import { navigation } from '../constants/navigation';
import { whatsappLink } from '../constants/links';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-surface dark:bg-surface-dark shadow-md z-40"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary dark:text-primary-dark">
            {language === 'ar' ? 'مستر مايكل يوسف' : 'Mr. Michael Youssef'}
          </h1>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors"
            >
              {t.nav.bookNow}
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}