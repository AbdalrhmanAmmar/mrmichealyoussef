"use client";

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { contactInfo } from '@/app/data/contact';
import { FormData } from '@/app/types';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-[#4A5568] mb-12">تواصل معنا</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">معلومات التواصل</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <EnvelopeIcon className="w-6 h-6 text-[#2C7A7B]" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <PhoneIcon className="w-6 h-6 text-[#2C7A7B]" />
                  <span>{contactInfo.phone}</span>
                </div>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#2C7A7B] hover:text-[#236B6B]"
                >
                  <WhatsAppIcon className="w-6 h-6 ml-2" />
                  تواصل عبر واتساب
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#2C7A7B] focus:border-[#2C7A7B]"
                />
                {errors.name && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#2C7A7B] focus:border-[#2C7A7B]"
                />
                {errors.email && <span className="text-red-500 text-sm">بريد إلكتروني غير صحيح</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                <input
                  {...register("phone", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#2C7A7B] focus:border-[#2C7A7B]"
                />
                {errors.phone && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#2C7A7B] focus:border-[#2C7A7B]"
                />
                {errors.message && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#2C7A7B] text-white py-3 rounded-lg hover:bg-[#236B6B] transition-colors"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}