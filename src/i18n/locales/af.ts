import type { Messages } from './en'

const af: Messages = {
  // Navigation
  Today: 'Vandag',
  Month: 'Maand',
  Week: 'Week',
  Day: 'Dag',

  // Sidebar
  Calendars: 'Kalenders',
  'Create new calendar': 'Skep nuwe kalender',
  'Loading calendars...': 'Laai kalenders...',
  'No calendars found': 'Geen kalenders gevind nie',
  'Delete calendar': 'Skrap kalender',
  'Share calendar': 'Deel kalender',
  'Pending Invitations': 'Hangende uitnodigings',
  'From:': 'Van:',
  Accept: 'Aanvaar',
  Decline: 'Weier',

  // Event Dialog
  'Edit Event': 'Wysig afspraak',
  'New Event': 'Nuwe afspraak',
  Title: 'Titel',
  Calendar: 'Kalender',
  'All day event': 'Heeldag',
  'Start Date': 'Begindatum',
  'Start Time': 'Begintyd',
  'End Date': 'Einddatum',
  'End Time': 'Eindtyd',
  Location: 'Ligging',
  Description: 'Beskrywing',
  'Event title': 'Afspraaktitel',
  'Add location': 'Voeg ligging by',
  'Add description': 'Voeg beskrywing by',
  Delete: 'Skrap',
  Cancel: 'Kanselleer',
  'Saving...': 'Stoor tans...',
  Save: 'Stoor',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    "Hierdie afspraak is deur 'n ander kliënt gewysig. Kies hoe om dit op te los:",
  'Keep my changes': 'Hou my veranderinge',
  'Use server version': 'Gebruik die bediener se weergawe',

  // Calendar Dialog
  'New Calendar': 'Nuwe kalender',
  'Calendar Name': 'Kalendernaam',
  'Description (optional)': 'Beskrywing (opsioneel)',
  Color: 'Kleur',
  'Calendar description': 'Kalenderbeskrywing',
  'My Calendar': 'My kalender',
  'Creating...': 'Skep tans...',
  Create: 'Skep',

  // Recurrence
  'Edit Recurring Event': 'Wysig herhalende afspraak',
  'This is a recurring event. What would you like to edit?':
    "Dit is 'n herhalende afspraak. Wat wil jy wysig?",
  'This event only': 'Slegs hierdie afspraak',
  'All events in series': 'Alle afsprake in die reeks',
  'this occurrence': 'hierdie keer',
  'entire series': 'hele reeks',
  Repeat: 'Herhaal',
  Every: 'Elke',
  'day(s)': 'dag(e)',
  'week(s)': 'week/weke',
  'month(s)': 'maand(e)',
  'year(s)': 'jaar/jare',
  Mon: 'Ma',
  Tue: 'Di',
  Wed: 'Wo',
  Thu: 'Do',
  Fri: 'Vr',
  Sat: 'Sa',
  Sun: 'So',
  Ends: 'Eindig',
  Never: 'Nooit',
  After: 'Na',
  occurrences: 'keer',
  On: 'Op',
  'Delete this event': 'Skrap hierdie afspraak',
  'Export .ics': 'Voer uit as .ics',
  'Download this occurrence as .ics': 'Laai hierdie keer af as .ics',
  'Download as .ics': 'Laai af as .ics',

  // ICS Import
  'Import Calendar': 'Voer kalender in',
  'Import calendar': 'Voer kalender in',
  'ICS File': 'ICS-lêer',
  'Import mode': 'Invoermodus',
  'Merge into existing calendar': 'Voeg saam met bestaande kalender',
  'Target calendar': 'Teikenkalender',
  'Select calendar': 'Kies kalender',
  'Enter calendar name': 'Voer kalendernaam in',
  Import: 'Voer in',
  Close: 'Maak toe',
  'Reading file...': 'Lees lêer...',
  'Parsing events...': 'Verwerk afsprake...',
  'Analyzing for duplicates...': 'Soek na duplikate...',
  'Importing events...': 'Voer afsprake in...',
  Created: 'Geskep',
  Updated: 'Bygewerk',
  Skipped: 'Oorgeslaan',
  Failed: 'Misluk',
  'Imported %{count} events into "%{name}"': '%{count} afsprake in "%{name}" ingevoer',
  'Parse warnings': 'Waarskuwings tydens lees',
  'Show details': 'Wys besonderhede',
  'Hide details': 'Versteek besonderhede',

  // Sharing
  'Share calendar: %{name}': 'Deel kalender: %{name}',
  'Share with users': 'Deel met gebruikers',
  'User ID or Email': 'Gebruiker-ID of e-pos',
  Read: 'Lees',
  'Read & Write': 'Lees en skryf',
  Invite: 'Nooi',
  'Read only': 'Slegs lees',
  'Public links': 'Openbare en uitnodigingskakels',
  'Invite & Public links': 'Openbare en uitnodigingskakels',
  'Create link': 'Skep skakel',
  'Create invite link': 'Skep uitnodigingskakel',
  'Read only link': 'Leesalleen-skakel',
  'Read & Write link': 'Lees-en-skryf-skakel',
  'Web Invite Link': 'Webuitnodigingskakel',
  'CalDAV Link': 'CalDAV-skakel',
  'Copy Web Invite': 'Kopieer webuitnodiging',
  'Copy CalDAV URL': 'Kopieer CalDAV-URL',
  'Copied!': 'Gekopieer!',
  Copy: 'Kopieer',
  'No public links created yet': 'Nog geen openbare skakels geskep nie',
  'Revoke link': 'Herroep skakel',
  'Shared via link': 'Gedeel via skakel',
  'Join Shared Calendar': 'Sluit aan by gedeelde kalender',
  'You have been invited to join the calendar "%{name}".':
    'Jy is genooi om by die kalender "%{name}" aan te sluit.',
  'Permission: %{perm}': 'Toestemming: %{perm}',
  'Join Calendar': 'Sluit aan by kalender',
  'You are already subscribed to this calendar.': 'Jy is reeds op hierdie kalender ingeteken.',
  'Joined calendar successfully': 'Suksesvol by kalender aangesluit',
  'Leave calendar': 'Verlaat kalender',

  // Confirm Dialog
  Confirm: 'Bevestig',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Skrap kalender',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Is jy seker jy wil '%{name}' skrap? Alle afsprake in hierdie kalender sal permanent geskrap word.",

  // Shared calendars
  Refresh: 'Verfris',
  'Toggle sidebar': 'Wys/versteek sybalk',
  'Shared by:': 'Gedeel deur:',
  'Shared Calendar': 'Gedeelde kalender',
  Accepted: 'Aanvaar',
  Invited: 'Genooi',
  Left: 'Verlaat',
  'Remove share': 'Verwyder deling',
  Leave: 'Verlaat',
  'Leave Calendar': 'Verlaat kalender',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Is jy seker jy wil '%{name}' verlaat? Jy sal nie meer toegang tot hierdie kalender hê nie."
}

export default af
