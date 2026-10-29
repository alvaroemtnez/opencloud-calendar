import { describe, it, expect } from 'vitest'
import { en, loadMessages, supportedLanguages } from '../../src/i18n/translations'
import { appNames } from '../../src/i18n/app-names'
import { fullCalendarLocales } from '../../src/i18n/fullcalendar'

const placeholders = (s: string) => (s.match(/%\{\w+\}/g) || []).sort()

describe('translations', () => {
  it.each(supportedLanguages)('%s translates every English string', async (lang) => {
    const messages = await loadMessages(lang)
    expect(Object.keys(messages).sort()).toEqual(Object.keys(en).sort())
    for (const [key, value] of Object.entries(messages)) {
      expect(value.trim(), `${lang}: ${key}`).not.toBe('')
      expect(placeholders(value), `${lang}: ${key}`).toEqual(
        placeholders(en[key as keyof typeof en])
      )
    }
    expect(appNames[lang]).toBe(messages.Calendar)
  })

  it('has a FullCalendar locale for every language', () => {
    expect(Object.keys(fullCalendarLocales).sort()).toEqual([...supportedLanguages].sort())
  })
})
