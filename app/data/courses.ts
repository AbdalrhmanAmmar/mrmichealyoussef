import { Course } from '../types';

interface LocalizedCourse extends Course {
  translations: {
    ar: {
      title: string;
      description: string;
      level: string;
      prerequisite?: string;
    };
    en: {
      title: string;
      description: string;
      level: string;
      prerequisite?: string;
    };
  };
}

export const courses: LocalizedCourse[] = [
  {
    title: "كورس المبتدئين",
    description: "كورس مصمم خصيصاً للمبتدئين وأصحاب المستوى الضعيف في اللغة الإنجليزية",
    level: "مبتدئ",
    translations: {
      ar: {
        title: "كورس المبتدئين",
        description: "كورس مصمم خصيصاً للمبتدئين وأصحاب المستوى الضعيف في اللغة الإنجليزية",
        level: "مبتدئ"
      },
      en: {
        title: "Beginners Course",
        description: "A course specially designed for beginners and those with basic English skills",
        level: "Beginner"
      }
    }
  },
  {
    title: "كورس المحادثة",
    description: "تطوير مهارات المحادثة والتواصل باللغة الإنجليزية",
    level: "متوسط",
    prerequisite: "كورس المبتدئين",
    translations: {
      ar: {
        title: "كورس المحادثة",
        description: "تطوير مهارات المحادثة والتواصل باللغة الإنجليزية",
        level: "متوسط",
        prerequisite: "كورس المبتدئين"
      },
      en: {
        title: "Conversation Course",
        description: "Develop English conversation and communication skills",
        level: "Intermediate",
        prerequisite: "Beginners Course"
      }
    }
  },
  {
    title: "الكورس المتوسط",
    description: "تعزيز المهارات اللغوية والوصول إلى مستوى متقدم",
    level: "متوسط متقدم",
    prerequisite: "كورس المحادثة",
    translations: {
      ar: {
        title: "الكورس المتوسط",
        description: "تعزيز المهارات اللغوية والوصول إلى مستوى متقدم",
        level: "متوسط متقدم",
        prerequisite: "كورس المحادثة"
      },
      en: {
        title: "Intermediate Course",
        description: "Enhance language skills and reach an advanced level",
        level: "Upper Intermediate",
        prerequisite: "Conversation Course"
      }
    }
  },
  {
    title: "تحضير IELTS",
    description: "إعداد شامل لاختبار IELTS مع التركيز على جميع مهارات الاختبار",
    level: "متقدم",
    prerequisite: "الكورس المتوسط",
    translations: {
      ar: {
        title: "تحضير IELTS",
        description: "إعداد شامل لاختبار IELTS مع التركيز على جميع مهارات الاختبار",
        level: "متقدم",
        prerequisite: "الكورس المتوسط"
      },
      en: {
        title: "IELTS Preparation",
        description: "Comprehensive preparation for IELTS exam focusing on all test skills",
        level: "Advanced",
        prerequisite: "Intermediate Course"
      }
    }
  }
];