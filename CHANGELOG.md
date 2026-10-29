# Changelog

Each `## X.Y.Z` entry is the text of that version's release. Versions up to
1.2.1 were released by the upstream forks
([LordGuenni](https://github.com/LordGuenni/opencloud-web-calendar),
[mschneider82](https://github.com/mschneider82/opencloud-web-calendar)).

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
