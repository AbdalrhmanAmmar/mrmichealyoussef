"use client";

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { whatsappLink } from '@/app/constants/links';
import { contactInfo } from '@/app/data/contact';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#4A5568] mb-12">{t.contact.title}</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <EnvelopeIcon className="w-8 h-8 text-[#2C7A7B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.contact.email}</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-[#2C7A7B] hover:text-[#236B6B]">
                {contactInfo.email}
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <PhoneIcon className="w-8 h-8 text-[#2C7A7B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.contact.phone}</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-[#2C7A7B] hover:text-[#236B6B]">
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <WhatsAppIcon className="w-8 h-8 text-[#2C7A7B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.contact.whatsapp}</h3>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C7A7B] hover:text-[#236B6B]"
              >
                {t.contact.whatsappLink}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}