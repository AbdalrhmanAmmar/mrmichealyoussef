// Course Types
export interface Course {
  title: string;
  description: string;
  level: string;
  prerequisite?: string;
}

// Testimonial Types
export interface Testimonial {
  name: string;
  course: string;
  content: string;
  rating: number;
}

// Form Types
export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Contact Info Types
export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
}