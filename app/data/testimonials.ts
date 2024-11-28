import { Testimonial } from '../types';

export const testimonials: Record<'ar' | 'en', Testimonial[]> = {
  ar: [
    {
      name: "أحمد محمد",
      course: "كورس IELTS",
      content: "بفضل الأستاذ حصلت على درجة 7.5 في اختبار IELTS. أسلوبه في الشرح ممتاز وواضح.",
      rating: 5
    },
    {
      name: "سارة أحمد",
      course: "كورس المحادثة",
      content: "تحسنت مهارات المحادثة لدي بشكل كبير. الدروس ممتعة وعملية جداً.",
      rating: 5
    },
    {
      name: "محمد علي",
      course: "كورس المبتدئين",
      content: "بدأت من الصفر وخلال 3 أشهر أصبحت قادر على التحدث باللغة الإنجليزية.",
      rating: 5
    }
  ],
  en: [
    {
      name: "Ahmed Mohamed",
      course: "IELTS Course",
      content: "Thanks to the teacher, I achieved a 7.5 score in IELTS. His teaching method is excellent and clear.",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      course: "Conversation Course",
      content: "My conversation skills have improved significantly. The lessons are fun and practical.",
      rating: 5
    },
    {
      name: "Mohamed Ali",
      course: "Beginners Course",
      content: "I started from zero and within 3 months I became able to speak English.",
      rating: 5
    }
  ]
};