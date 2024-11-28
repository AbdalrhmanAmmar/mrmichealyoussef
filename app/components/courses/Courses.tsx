"use client";

import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import LevelTest from './LevelTest';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { courses } from '@/app/data/courses';

export default function Courses() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#4A5568] mb-4">{t.courses.title}</h2>
          <p className="text-gray-600">{t.courses.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={index} 
              {...course} 
              language={language}
            />
          ))}
        </div>

        <LevelTest />
      </div>
    </section>
  );
}