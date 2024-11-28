"use client";

import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';
import LanguageSwitcher from '../LanguageSwitcher';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-4 pt-5 text-right shadow-xl transition-all w-full sm:max-w-lg sm:p-6">
                <div className="absolute left-0 top-0 pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src="/images/373535942_2243386619183717_2255790354304461354_n.jpg"
                      alt={language === 'ar' ? 'صورة المدرس' : "Teacher's Photo"}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white">
                    {language === 'ar' ? 'مستر مايكل يوسف' : 'Mr. Michael Youssef'}
                  </h2>
                </div>

                <div className="mt-5 space-y-6">
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}