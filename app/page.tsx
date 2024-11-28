'use client';

import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import BottomNavigation from './components/navigation/BottomNavigation';

export default function Home() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-white pb-16 md:pb-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <Hero />
      <Services />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
      <BottomNavigation />
    </main>
  );
}