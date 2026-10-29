// Translations for the calendar application, one file per language in ./locales.
// The languages are OpenCloud's own (web-runtime's supportedLanguages); English is the
// source and always bundled, the others load on demand.
import en, { type Messages } from './locales/en'

export type { Messages }

export const supportedLanguages = [
  'af',
  'ar',
  'bs',
  'bg',
  'ca',
  'cs',
  'da',
  'de',
  'el',
  'en',
  'eo',
  'es',
  'et',
  'fa',
  'fi',
  'fr',
  'gl',
  'he',
  'hr',
  'hu',
  'id',
  'ig',
  'it',
  'ja',
  'ka',
  'ko',
  'lo',
  'lv',
  'ms',
  'nl',
  'nn',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'si',
  'sl',
  'sk',
  'sq',
  'sv',
  'sr',
  'ta',
  'tr',
  'ug',
  'uk',
  'vi',
  'zh'
] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]
export const defaultLanguage: SupportedLanguage = 'en'

const loaders = import.meta.glob<{ default: Messages }>(['./locales/*.ts', '!./locales/en.ts'])

export async function loadMessages(lang: SupportedLanguage): Promise<Messages> {
  if (lang === 'en') return en
  return (await loaders[`./locales/${lang}.ts`]()).default
}

export { en }
