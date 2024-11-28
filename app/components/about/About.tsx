"use client";

import { motion } from 'framer-motion';
import Qualification from './Qualification';
import Experience from './Experience';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-[#F0F8FF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-[#4A5568] mb-12">{t.about.title}</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#2C7A7B] mb-6">{t.about.experience.title}</h3>
              <Experience 
                title={t.about.experience.teacher}
                company={t.about.experience.company.english}
              />
              <Experience 
                title={t.about.experience.translator}
                company={t.about.experience.company.translator}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2C7A7B] mb-6">{t.about.qualifications.title}</h3>
              {Object.entries(t.about.qualifications.items).map(([key, value]) => (
                <Qualification 
                  key={key}
                  title={value}
                  institution={
                    key === 'bachelor' 
                      ? (language === 'ar' ? 'جامعة القاهرة' : 'Cairo University')
                      : key.includes('diploma') || key === 'ielts'
                        ? 'London Teacher Training College'
                        : 'University of Cambridge'
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}