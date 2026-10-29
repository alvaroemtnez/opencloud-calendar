// FullCalendar's own strings (all-day, "+N more", week start) for each app language.
// FullCalendar has no locale for Igbo, Lao, Sinhala or Tamil: those keep its English
// strings, while dates are still formatted in the language by the browser.
import type { LocaleInput } from '@fullcalendar/core'
import af from '@fullcalendar/core/locales/af'
import ar from '@fullcalendar/core/locales/ar'
import bs from '@fullcalendar/core/locales/bs'
import bg from '@fullcalendar/core/locales/bg'
import ca from '@fullcalendar/core/locales/ca'
import cs from '@fullcalendar/core/locales/cs'
import da from '@fullcalendar/core/locales/da'
import de from '@fullcalendar/core/locales/de'
import el from '@fullcalendar/core/locales/el'
import eo from '@fullcalendar/core/locales/eo'
import es from '@fullcalendar/core/locales/es'
import et from '@fullcalendar/core/locales/et'
import fa from '@fullcalendar/core/locales/fa'
import fi from '@fullcalendar/core/locales/fi'
import fr from '@fullcalendar/core/locales/fr'
import gl from '@fullcalendar/core/locales/gl'
import he from '@fullcalendar/core/locales/he'
import hr from '@fullcalendar/core/locales/hr'
import hu from '@fullcalendar/core/locales/hu'
import id from '@fullcalendar/core/locales/id'
import it from '@fullcalendar/core/locales/it'
import ja from '@fullcalendar/core/locales/ja'
import ka from '@fullcalendar/core/locales/ka'
import ko from '@fullcalendar/core/locales/ko'
import lv from '@fullcalendar/core/locales/lv'
import ms from '@fullcalendar/core/locales/ms'
import nb from '@fullcalendar/core/locales/nb'
import nl from '@fullcalendar/core/locales/nl'
import nn from '@fullcalendar/core/locales/nn'
import pl from '@fullcalendar/core/locales/pl'
import pt from '@fullcalendar/core/locales/pt'
import ro from '@fullcalendar/core/locales/ro'
import ru from '@fullcalendar/core/locales/ru'
import sl from '@fullcalendar/core/locales/sl'
import sk from '@fullcalendar/core/locales/sk'
import sq from '@fullcalendar/core/locales/sq'
import sv from '@fullcalendar/core/locales/sv'
import srCyrl from '@fullcalendar/core/locales/sr-cyrl'
import tr from '@fullcalendar/core/locales/tr'
import ug from '@fullcalendar/core/locales/ug'
import uk from '@fullcalendar/core/locales/uk'
import vi from '@fullcalendar/core/locales/vi'
import zhCn from '@fullcalendar/core/locales/zh-cn'
import type { SupportedLanguage } from './translations'

export const fullCalendarLocales: Record<SupportedLanguage, LocaleInput> = {
  af,
  ar,
  bs,
  bg,
  ca,
  cs,
  da,
  de,
  el,
  en: { code: 'en' },
  eo,
  es,
  et,
  fa,
  fi,
  fr,
  gl,
  he,
  hr,
  hu,
  id,
  ig: { code: 'ig' },
  it,
  ja,
  ka,
  ko,
  lo: { code: 'lo' },
  lv,
  ms,
  nl,
  nn,
  no: nb,
  pl,
  pt,
  ro,
  ru,
  si: { code: 'si' },
  sl,
  sk,
  sq,
  sv,
  sr: srCyrl,
  ta: { code: 'ta' },
  tr,
  ug,
  uk,
  vi,
  zh: zhCn
}
