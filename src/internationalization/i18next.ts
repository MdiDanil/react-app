import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en } from './locales';

const resources = { en } as const;

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['auth'],
    debug: false,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources,
  });

export default i18next;
