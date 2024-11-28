"use client";

import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

interface QualificationProps {
  title: string;
  institution: string;
}

export default function Qualification({ title, institution }: QualificationProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start space-x-4 space-x-reverse mb-4"
    >
      <AcademicCapIcon className="w-6 h-6 text-[#2C7A7B] flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-[#4A5568]">{title}</h3>
        <p className="text-gray-600">{institution}</p>
      </div>
    </motion.div>
  );
}