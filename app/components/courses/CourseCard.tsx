"use client";

import { motion } from 'framer-motion';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { Language } from '@/app/i18n/translations';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  prerequisite?: string;
  translations: {
    ar: {
      title: string;
      description: string;
      level: string;
      prerequisite?: string;
    };
    en: {
      title: string;
      description: string;
      level: string;
      prerequisite?: string;
    };
  };
  language: Language;
}

export default function CourseCard({ translations, language }: CourseCardProps) {
  const content = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <BookOpenIcon className="w-8 h-8 text-[#2C7A7B] mr-3" />
        <h3 className="text-xl font-bold text-[#4A5568]">{content.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{content.description}</p>
      <div className="space-y-2">
        <p className="text-sm">
          <span className="font-semibold">{language === 'ar' ? 'المستوى:' : 'Level:'}</span> {content.level}
        </p>
        {content.prerequisite && (
          <p className="text-sm">
            <span className="font-semibold">{language === 'ar' ? 'المتطلب السابق:' : 'Prerequisite:'}</span> {content.prerequisite}
          </p>
        )}
      </div>
    </motion.div>
  );
}