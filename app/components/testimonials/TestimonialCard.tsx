"use client";

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface TestimonialCardProps {
  name: string;
  course: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, course, content, rating }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-[#4A5568]">{name}</p>
        <p className="text-sm text-gray-500">{course}</p>
      </div>
    </motion.div>
  );
}