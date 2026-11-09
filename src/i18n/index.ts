import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ar from './locales/ar.json'

export const languages = ['en', 'ar'] as const
export type Language = (typeof languages)[number]

const applyDocument = (lng: string) => {
    document.documentElement.lang = lng
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
}

i18n.on('languageChanged', applyDocument)

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: { en: { translation: en }, ar: { translation: ar } },
        fallbackLng: 'en',
        supportedLngs: languages,
        interpolation: { escapeValue: false },
    })

export default i18n