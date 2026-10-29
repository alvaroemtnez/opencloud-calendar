import type { Messages } from './en'

const et: Messages = {
  // Navigation
  Today: 'Täna',
  Month: 'Kuu',
  Week: 'Nädal',
  Day: 'Päev',

  // Sidebar
  Calendars: 'Kalendrid',
  'Create new calendar': 'Loo uus kalender',
  'Loading calendars...': 'Kalendrite laadimine...',
  'No calendars found': 'Kalendreid ei leitud',
  'Delete calendar': 'Kustuta kalender',
  'Share calendar': 'Jaga kalendrit',
  'Pending Invitations': 'Ootel kutsed',
  'From:': 'Saatja:',
  Accept: 'Nõustu',
  Decline: 'Keeldu',

  // Event Dialog
  'Edit Event': 'Muuda sündmust',
  'New Event': 'Uus sündmus',
  Title: 'Pealkiri',
  Calendar: 'Kalender',
  'All day event': 'Terve päev',
  'Start Date': 'Alguskuupäev',
  'Start Time': 'Algusaeg',
  'End Date': 'Lõppkuupäev',
  'End Time': 'Lõpuaeg',
  Location: 'Asukoht',
  Description: 'Kirjeldus',
  'Event title': 'Sündmuse pealkiri',
  'Add location': 'Lisa asukoht',
  'Add description': 'Lisa kirjeldus',
  Delete: 'Kustuta',
  Cancel: 'Loobu',
  'Saving...': 'Salvestamine...',
  Save: 'Salvesta',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Seda sündmust muutis teine klient. Vali, kuidas konflikt lahendada:',
  'Keep my changes': 'Säilita minu muudatused',
  'Use server version': 'Kasuta serveri versiooni',

  // Calendar Dialog
  'New Calendar': 'Uus kalender',
  'Calendar Name': 'Kalendri nimi',
  'Description (optional)': 'Kirjeldus (valikuline)',
  Color: 'Värv',
  'Calendar description': 'Kalendri kirjeldus',
  'My Calendar': 'Minu kalender',
  'Creating...': 'Loomine...',
  Create: 'Loo',

  // Recurrence
  'Edit Recurring Event': 'Muuda korduvat sündmust',
  'This is a recurring event. What would you like to edit?':
    'See on korduv sündmus. Mida soovid muuta?',
  'This event only': 'Ainult seda sündmust',
  'All events in series': 'Kõiki sarja sündmusi',
  'this occurrence': 'see kordus',
  'entire series': 'kogu sari',
  Repeat: 'Korda',
  Every: 'Iga',
  'day(s)': 'päeva järel',
  'week(s)': 'nädala järel',
  'month(s)': 'kuu järel',
  'year(s)': 'aasta järel',
  Mon: 'E',
  Tue: 'T',
  Wed: 'K',
  Thu: 'N',
  Fri: 'R',
  Sat: 'L',
  Sun: 'P',
  Ends: 'Lõpeb',
  Never: 'Mitte kunagi',
  After: 'Pärast',
  occurrences: 'kordust',
  On: 'Kuupäeval',
  'Delete this event': 'Kustuta see sündmus',
  'Export .ics': 'Ekspordi .ics',
  'Download this occurrence as .ics': 'Laadi see kordus alla .ics-failina',
  'Download as .ics': 'Laadi alla .ics-failina',

  // ICS Import
  'Import Calendar': 'Impordi kalender',
  'Import calendar': 'Impordi kalender',
  'ICS File': 'ICS-fail',
  'Import mode': 'Impordirežiim',
  'Merge into existing calendar': 'Ühenda olemasoleva kalendriga',
  'Target calendar': 'Sihtkalender',
  'Select calendar': 'Vali kalender',
  'Enter calendar name': 'Sisesta kalendri nimi',
  Import: 'Impordi',
  Close: 'Sulge',
  'Reading file...': 'Faili lugemine...',
  'Parsing events...': 'Sündmuste töötlemine...',
  'Analyzing for duplicates...': 'Duplikaatide otsimine...',
  'Importing events...': 'Sündmuste importimine...',
  Created: 'Loodud',
  Updated: 'Uuendatud',
  Skipped: 'Vahele jäetud',
  Failed: 'Ebaõnnestunud',
  'Imported %{count} events into "%{name}"': '%{count} sündmust imporditi kalendrisse „%{name}”',
  'Parse warnings': 'Lugemise hoiatused',
  'Show details': 'Näita üksikasju',
  'Hide details': 'Peida üksikasjad',

  // Sharing
  'Share calendar: %{name}': 'Jaga kalendrit: %{name}',
  'Share with users': 'Jaga kasutajatega',
  'User ID or Email': 'Kasutaja ID või e-post',
  Read: 'Lugemine',
  'Read & Write': 'Lugemine ja kirjutamine',
  Invite: 'Kutsu',
  'Read only': 'Ainult lugemiseks',
  'Public links': 'Avalikud ja kutselingid',
  'Invite & Public links': 'Avalikud ja kutselingid',
  'Create link': 'Loo link',
  'Create invite link': 'Loo kutselink',
  'Read only link': 'Ainult lugemiseks link',
  'Read & Write link': 'Lugemis- ja kirjutamislink',
  'Web Invite Link': 'Veebikutse link',
  'CalDAV Link': 'CalDAV-link',
  'Copy Web Invite': 'Kopeeri veebikutse',
  'Copy CalDAV URL': 'Kopeeri CalDAV-i URL',
  'Copied!': 'Kopeeritud!',
  Copy: 'Kopeeri',
  'No public links created yet': 'Avalikke linke pole veel loodud',
  'Revoke link': 'Tühista link',
  'Shared via link': 'Jagatud lingiga',
  'Join Shared Calendar': 'Liitu jagatud kalendriga',
  'You have been invited to join the calendar "%{name}".':
    'Sind kutsuti liituma kalendriga „%{name}”.',
  'Permission: %{perm}': 'Õigus: %{perm}',
  'Join Calendar': 'Liitu kalendriga',
  'You are already subscribed to this calendar.': 'Oled selle kalendri juba tellinud.',
  'Joined calendar successfully': 'Liitusid kalendriga',
  'Leave calendar': 'Lahku kalendrist',

  // Confirm Dialog
  Confirm: 'Kinnita',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Kustuta kalender',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Kas soovid kindlasti kustutada kalendri '%{name}'? Kõik selle sündmused kustutatakse jäädavalt.",

  // Shared calendars
  Refresh: 'Värskenda',
  'Toggle sidebar': 'Näita või peida külgriba',
  'Shared by:': 'Jagaja:',
  'Shared Calendar': 'Jagatud kalender',
  Accepted: 'Nõustunud',
  Invited: 'Kutsutud',
  Left: 'Lahkunud',
  'Remove share': 'Eemalda jagamine',
  Leave: 'Lahku',
  'Leave Calendar': 'Lahku kalendrist',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Kas soovid kindlasti lahkuda kalendrist '%{name}'? Sul pole sellele enam ligipääsu."
}

export default et
