# Changelog

Each `## X.Y.Z` entry is the text of that version's release. Versions up to
1.2.1 were released by the upstream forks
([LordGuenni](https://github.com/LordGuenni/opencloud-web-calendar),
[mschneider82](https://github.com/mschneider82/opencloud-web-calendar)).

## 1.4.0

- Calendar now speaks every language OpenCloud does: Afrikaans, Albanian, Arabic,
  Bosnian, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English,
  Esperanto, Estonian, Finnish, French, Galician, Georgian, German, Greek, Hebrew,
  Hungarian, Igbo, Indonesian, Italian, Japanese, Korean, Lao, Latvian, Malay,
  Norwegian (Bokmål and Nynorsk), Persian, Polish, Portuguese, Romanian, Russian,
  Serbian, Sinhala, Slovak, Slovenian, Spanish, Swedish, Tamil, Turkish, Uyghur,
  Ukrainian and Vietnamese. It follows the language set in your OpenCloud profile.
- The calendar grid (week start, "all day", "+N more") follows the language too.
- Regional profile languages such as `pt_BR` or `zh_CN` now pick their base
  language instead of falling back to English.
- Buttons and messages for shared calendars (refresh, leave, share status) are
  now translated; they were English-only before.

## 1.3.0

- The app is now called **Calendar** (it was "Web Calendar"). It still installs
  into `apps/web-calendar/`, so existing installs and links keep working.
- The sidebar only lists calendars: task lists, journals and other CalDAV
  collections that cannot hold events are hidden.
- New calendars are created for events only, so other CalDAV clients don't
  offer them as task lists.
- Releases are published on [Forgejo](https://code.alvaroedo.io/alvaroemtnez/opencloud-calendar/releases)
  and on the [GitHub mirror](https://github.com/alvaroemtnez/opencloud-calendar/releases),
  as `opencloud-calendar-X.Y.Z.zip` with a `SHA256SUMS` file.
