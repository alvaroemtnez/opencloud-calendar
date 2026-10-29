import { computed } from 'vue'
import { useUserStore } from '@opencloud-eu/web-pkg'
import {
  en,
  loadMessages,
  supportedLanguages,
  defaultLanguage,
  type Messages,
  type SupportedLanguage
} from '../i18n/translations'
import { appNames } from '../i18n/app-names'

// Singleton state for language
let currentLanguage: SupportedLanguage = defaultLanguage

// Strings of the languages loaded so far; t() falls back to English until loadLanguage() is done
const messages: Partial<Record<SupportedLanguage, Messages>> = { en }

// Browsers report Norwegian Bokmål as nb; OpenCloud calls it no.
const aliases: Record<string, SupportedLanguage> = { nb: 'no' }

/**
 * Matches a language tag (de, de-AT, pt_BR, zh-Hans-CN) to a supported language by its
 * base language.
 */
function matchLanguage(tag: string): SupportedLanguage | undefined {
  const base = tag.split(/[-_]/)[0].toLowerCase()
  if (aliases[base]) return aliases[base]
  return supportedLanguages.includes(base as SupportedLanguage)
    ? (base as SupportedLanguage)
    : undefined
}

/**
 * Detects the user's preferred language from multiple sources:
 * 1. OpenCloud user profile (preferredLanguage)
 * 2. Browser language setting
 * 3. Falls back to English
 */
function detectLanguage(userPreferredLanguage?: string): SupportedLanguage {
  // 1. Check OpenCloud user profile language
  const fromProfile = userPreferredLanguage && matchLanguage(userPreferredLanguage)
  if (fromProfile) return fromProfile

  // 2. Check browser language
  const browserLang = navigator.language || (navigator as any).userLanguage || ''
  const fromBrowser = browserLang && matchLanguage(browserLang)
  if (fromBrowser) return fromBrowser

  // 3. Default to English
  return defaultLanguage
}

/**
 * Initialize language from OpenCloud user profile
 * Call this early in the app lifecycle
 */
export function initLanguage(): SupportedLanguage {
  try {
    const userStore = useUserStore()
    currentLanguage = detectLanguage(userStore.user?.preferredLanguage)
  } catch {
    // userStore might not be available yet, use browser detection
    currentLanguage = detectLanguage()
  }
  return currentLanguage
}

/**
 * Detect the language and load its strings. Await before rendering translated views.
 */
export async function loadLanguage(): Promise<void> {
  const lang = initLanguage()
  if (!messages[lang]) {
    messages[lang] = await loadMessages(lang)
  }
}

/**
 * The app's name in the current language (available before loadLanguage())
 */
export function appName(): string {
  return appNames[currentLanguage]
}

/**
 * Get current language
 */
export function getLanguage(): SupportedLanguage {
  return currentLanguage
}

/**
 * Translate a string to the current language
 */
export function t(key: string, params?: Record<string, string>): string {
  const langStrings = messages[currentLanguage] || en
  let translated = (langStrings as Record<string, string>)[key] || key

  // Replace parameters like %{name}
  if (params) {
    for (const [paramKey, value] of Object.entries(params)) {
      translated = translated.replace(new RegExp(`%\\{${paramKey}\\}`, 'g'), value)
    }
  }

  return translated
}

/**
 * Composable for using translations in Vue components
 */
export function useLanguage() {
  const userStore = useUserStore()

  const language = computed<SupportedLanguage>(() => {
    // Re-detect when user changes (reactive)
    return detectLanguage(userStore.user?.preferredLanguage)
  })

  // Update singleton when language changes
  const updateLanguage = () => {
    currentLanguage = language.value
  }

  return {
    language,
    t,
    updateLanguage
  }
}
