"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { whatsappLink } from '../constants/links';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pt-20 md:pt-32 pb-20 bg-gradient-to-b from-[#F0F8FF] to-white">
      <div className="container mx-auto px-4">
        {/* Mobile Image (shown only on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mb-8"
        >
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/373535942_2243386619183717_2255790354304461354_n.jpg"
              alt={language === 'ar' ? 'صورة المدرس' : "Teacher's Photo"}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full"
              priority
            />
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 text-center md:text-right"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A5568] mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6F61] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#ff8577] transition-colors text-center"
              >
                {t.hero.startLearning}
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#2C7A7B] text-[#2C7A7B] px-8 py-3 rounded-lg text-lg hover:bg-[#2C7A7B] hover:text-white transition-colors text-center"
              >
                {t.hero.contactUs}
              </a>
            </div>
          </motion.div>
          
          {/* Desktop Image (hidden on mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block md:w-1/2"
          >
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/373535942_2243386619183717_2255790354304461354_n.jpg"
                alt={language === 'ar' ? 'صورة المدرس' : "Teacher's Photo"}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}