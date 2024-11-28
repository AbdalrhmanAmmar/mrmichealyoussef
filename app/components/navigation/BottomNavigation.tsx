'use client';

import { HomeIcon, UserIcon, AcademicCapIcon, ChatBubbleLeftRightIcon, PhoneIcon, LanguageIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/app/context/LanguageContext';
import { useTheme } from '@/app/hooks/useTheme';
import { translations } from '@/app/i18n/translations';

export default function BottomNavigation() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  const navigationItems = [
    { key: 'home', href: '#', Icon: HomeIcon, label: language === 'ar' ? 'الرئيسية' : 'Home' },
    { key: 'about', href: '#about', Icon: UserIcon, label: t.nav.about },
    { key: 'courses', href: '#courses', Icon: AcademicCapIcon, label: t.nav.courses },
    { key: 'contact', href: '#contact', Icon: PhoneIcon, label: t.nav.contact },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
      <div className="grid grid-cols-6 h-16">
        {navigationItems.map(({ key, href, Icon, label }) => (
          <a
            key={key}
            href={href}
            className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-primary-dark"
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] mt-1">{label}</span>
          </a>
        ))}
        <button
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-200"
        >
          <LanguageIcon className="h-5 w-5" />
          <span className="text-[10px] mt-1">
            {language === 'ar' ? 'English' : 'العربية'}
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-200"
        >
          {theme === 'dark' ? (
            <>
              <SunIcon className="h-5 w-5 text-yellow-500" />
              <span className="text-[10px] mt-1">{language === 'ar' ? 'فاتح' : 'Light'}</span>
            </>
          ) : (
            <>
              <MoonIcon className="h-5 w-5" />
              <span className="text-[10px] mt-1">{language === 'ar' ? 'داكن' : 'Dark'}</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}