"use client";

import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { testimonials } from '@/app/data/testimonials';

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20 bg-[#F0F8FF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#4A5568] mb-4">{t.testimonials.title}</h2>
          <p className="text-gray-600">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials[language].map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}