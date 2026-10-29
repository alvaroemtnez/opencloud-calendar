import type { Messages } from './en'

const sl: Messages = {
  // Navigation
  Today: 'Danes',
  Month: 'Mesec',
  Week: 'Teden',
  Day: 'Dan',

  // Sidebar
  Calendars: 'Koledarji',
  'Create new calendar': 'Ustvari nov koledar',
  'Loading calendars...': 'Nalaganje koledarjev...',
  'No calendars found': 'Ni najdenih koledarjev',
  'Delete calendar': 'Izbriši koledar',
  'Share calendar': 'Deli koledar',
  'Pending Invitations': 'Čakajoča povabila',
  'From:': 'Od:',
  Accept: 'Sprejmi',
  Decline: 'Zavrni',

  // Event Dialog
  'Edit Event': 'Uredi dogodek',
  'New Event': 'Nov dogodek',
  Title: 'Naslov',
  Calendar: 'Koledar',
  'All day event': 'Ves dan',
  'Start Date': 'Datum začetka',
  'Start Time': 'Čas začetka',
  'End Date': 'Datum konca',
  'End Time': 'Čas konca',
  Location: 'Lokacija',
  Description: 'Opis',
  'Event title': 'Naslov dogodka',
  'Add location': 'Dodaj lokacijo',
  'Add description': 'Dodaj opis',
  Delete: 'Izbriši',
  Cancel: 'Prekliči',
  'Saving...': 'Shranjevanje...',
  Save: 'Shrani',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Ta dogodek je spremenil drug odjemalec. Izberite, kako razrešiti spor:',
  'Keep my changes': 'Obdrži moje spremembe',
  'Use server version': 'Uporabi različico s strežnika',

  // Calendar Dialog
  'New Calendar': 'Nov koledar',
  'Calendar Name': 'Ime koledarja',
  'Description (optional)': 'Opis (neobvezno)',
  Color: 'Barva',
  'Calendar description': 'Opis koledarja',
  'My Calendar': 'Moj koledar',
  'Creating...': 'Ustvarjanje...',
  Create: 'Ustvari',

  // Recurrence
  'Edit Recurring Event': 'Uredi ponavljajoči se dogodek',
  'This is a recurring event. What would you like to edit?':
    'To je ponavljajoči se dogodek. Kaj želite urediti?',
  'This event only': 'Samo ta dogodek',
  'All events in series': 'Vse dogodke v nizu',
  'this occurrence': 'ta ponovitev',
  'entire series': 'celoten niz',
  Repeat: 'Ponavljaj',
  Every: 'Vsak',
  'day(s)': 'dan/dni',
  'week(s)': 'teden/tednov',
  'month(s)': 'mesec/mesecev',
  'year(s)': 'leto/let',
  Mon: 'pon',
  Tue: 'tor',
  Wed: 'sre',
  Thu: 'čet',
  Fri: 'pet',
  Sat: 'sob',
  Sun: 'ned',
  Ends: 'Konča se',
  Never: 'Nikoli',
  After: 'Po',
  occurrences: 'ponovitvah',
  On: 'Dne',
  'Delete this event': 'Izbriši ta dogodek',
  'Export .ics': 'Izvozi .ics',
  'Download this occurrence as .ics': 'Prenesi to ponovitev kot .ics',
  'Download as .ics': 'Prenesi kot .ics',

  // ICS Import
  'Import Calendar': 'Uvozi koledar',
  'Import calendar': 'Uvozi koledar',
  'ICS File': 'Datoteka ICS',
  'Import mode': 'Način uvoza',
  'Merge into existing calendar': 'Združi z obstoječim koledarjem',
  'Target calendar': 'Ciljni koledar',
  'Select calendar': 'Izberi koledar',
  'Enter calendar name': 'Vnesite ime koledarja',
  Import: 'Uvozi',
  Close: 'Zapri',
  'Reading file...': 'Branje datoteke...',
  'Parsing events...': 'Obdelava dogodkov...',
  'Analyzing for duplicates...': 'Iskanje dvojnikov...',
  'Importing events...': 'Uvažanje dogodkov...',
  Created: 'Ustvarjeni',
  Updated: 'Posodobljeni',
  Skipped: 'Preskočeni',
  Failed: 'Neuspešni',
  'Imported %{count} events into "%{name}"': 'V »%{name}« je bilo uvoženih dogodkov: %{count}',
  'Parse warnings': 'Opozorila pri branju',
  'Show details': 'Pokaži podrobnosti',
  'Hide details': 'Skrij podrobnosti',

  // Sharing
  'Share calendar: %{name}': 'Deli koledar: %{name}',
  'Share with users': 'Deli z uporabniki',
  'User ID or Email': 'ID uporabnika ali e-pošta',
  Read: 'Branje',
  'Read & Write': 'Branje in pisanje',
  Invite: 'Povabi',
  'Read only': 'Samo za branje',
  'Public links': 'Javne povezave in povabila',
  'Invite & Public links': 'Javne povezave in povabila',
  'Create link': 'Ustvari povezavo',
  'Create invite link': 'Ustvari povezavo s povabilom',
  'Read only link': 'Povezava samo za branje',
  'Read & Write link': 'Povezava za branje in pisanje',
  'Web Invite Link': 'Spletna povezava s povabilom',
  'CalDAV Link': 'Povezava CalDAV',
  'Copy Web Invite': 'Kopiraj spletno povabilo',
  'Copy CalDAV URL': 'Kopiraj URL CalDAV',
  'Copied!': 'Kopirano!',
  Copy: 'Kopiraj',
  'No public links created yet': 'Javne povezave še niso ustvarjene',
  'Revoke link': 'Prekliči povezavo',
  'Shared via link': 'Deljeno prek povezave',
  'Join Shared Calendar': 'Pridruži se deljenemu koledarju',
  'You have been invited to join the calendar "%{name}".':
    'Povabljeni ste bili v koledar »%{name}«.',
  'Permission: %{perm}': 'Dovoljenje: %{perm}',
  'Join Calendar': 'Pridruži se koledarju',
  'You are already subscribed to this calendar.': 'Na ta koledar ste že naročeni.',
  'Joined calendar successfully': 'Pridružili ste se koledarju',
  'Leave calendar': 'Zapusti koledar',

  // Confirm Dialog
  Confirm: 'Potrdi',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Izbriši koledar',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Ali res želite izbrisati »%{name}«? Vsi dogodki v tem koledarju bodo trajno izbrisani.',

  // Shared calendars
  Refresh: 'Osveži',
  'Toggle sidebar': 'Pokaži/skrij stransko vrstico',
  'Shared by:': 'Deli:',
  'Shared Calendar': 'Deljeni koledar',
  Accepted: 'Sprejeto',
  Invited: 'Povabljen',
  Left: 'Zapustil',
  'Remove share': 'Odstrani deljenje',
  Leave: 'Zapusti',
  'Leave Calendar': 'Zapusti koledar',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Ali res želite zapustiti »%{name}«? Do tega koledarja ne boste več imeli dostopa.'
}

export default sl
