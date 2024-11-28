"use client";

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';
import { levelTestLink } from '@/app/constants/links';

export default function LevelTest() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#F0F8FF] dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center mt-12"
    >
      <h3 className="text-2xl font-bold text-[#4A5568] dark:text-gray-100 mb-4">
        {t.courses.levelTest.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {t.courses.levelTest.description}
      </p>
      <a
        href={levelTestLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-[#2C7A7B] text-white px-6 py-3 rounded-lg hover:bg-[#236B6B] transition-colors"
      >
        {t.courses.levelTest.button}
        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
      </a>
    </motion.div>
  );
}