"use client";

import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

interface ExperienceProps {
  title: string;
  company: string;
}

export default function Experience({ title, company }: ExperienceProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start space-x-4 space-x-reverse mb-4"
    >
      <BriefcaseIcon className="w-6 h-6 text-[#FF6F61] flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-[#4A5568]">{title}</h3>
        <p className="text-gray-600">{company}</p>
      </div>
    </motion.div>
  );
}