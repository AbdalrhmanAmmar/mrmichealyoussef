"use client";

import { motion } from 'framer-motion';
import { AcademicCapIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: t.services.individual.title,
      description: t.services.individual.description,
      icon: AcademicCapIcon,
    },
    {
      title: t.services.group.title,
      description: t.services.group.description,
      icon: UserGroupIcon,
    },
    {
      title: t.services.ielts.title,
      description: t.services.ielts.description,
      icon: DocumentTextIcon,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#4A5568] mb-12">{t.services.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F0F8FF] p-6 rounded-lg shadow-md"
            >
              <service.icon className="w-12 h-12 text-[#2C7A7B] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A5568] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}