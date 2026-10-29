import type { Messages } from './en'

const da: Messages = {
  // Navigation
  Today: 'I dag',
  Month: 'Måned',
  Week: 'Uge',
  Day: 'Dag',

  // Sidebar
  Calendars: 'Kalendere',
  'Create new calendar': 'Opret ny kalender',
  'Loading calendars...': 'Indlæser kalendere...',
  'No calendars found': 'Ingen kalendere fundet',
  'Delete calendar': 'Slet kalender',
  'Share calendar': 'Del kalender',
  'Pending Invitations': 'Ventende invitationer',
  'From:': 'Fra:',
  Accept: 'Accepter',
  Decline: 'Afvis',

  // Event Dialog
  'Edit Event': 'Rediger begivenhed',
  'New Event': 'Ny begivenhed',
  Title: 'Titel',
  Calendar: 'Kalender',
  'All day event': 'Hele dagen',
  'Start Date': 'Startdato',
  'Start Time': 'Starttidspunkt',
  'End Date': 'Slutdato',
  'End Time': 'Sluttidspunkt',
  Location: 'Sted',
  Description: 'Beskrivelse',
  'Event title': 'Begivenhedens titel',
  'Add location': 'Tilføj sted',
  'Add description': 'Tilføj beskrivelse',
  Delete: 'Slet',
  Cancel: 'Annuller',
  'Saving...': 'Gemmer...',
  Save: 'Gem',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Denne begivenhed er ændret af en anden klient. Vælg, hvordan konflikten skal løses:',
  'Keep my changes': 'Behold mine ændringer',
  'Use server version': 'Brug serverens version',

  // Calendar Dialog
  'New Calendar': 'Ny kalender',
  'Calendar Name': 'Kalendernavn',
  'Description (optional)': 'Beskrivelse (valgfri)',
  Color: 'Farve',
  'Calendar description': 'Kalenderbeskrivelse',
  'My Calendar': 'Min kalender',
  'Creating...': 'Opretter...',
  Create: 'Opret',

  // Recurrence
  'Edit Recurring Event': 'Rediger tilbagevendende begivenhed',
  'This is a recurring event. What would you like to edit?':
    'Dette er en tilbagevendende begivenhed. Hvad vil du redigere?',
  'This event only': 'Kun denne begivenhed',
  'All events in series': 'Alle begivenheder i serien',
  'this occurrence': 'denne forekomst',
  'entire series': 'hele serien',
  Repeat: 'Gentag',
  Every: 'Hver',
  'day(s)': 'dag(e)',
  'week(s)': 'uge(r)',
  'month(s)': 'måned(er)',
  'year(s)': 'år',
  Mon: 'man',
  Tue: 'tir',
  Wed: 'ons',
  Thu: 'tor',
  Fri: 'fre',
  Sat: 'lør',
  Sun: 'søn',
  Ends: 'Slutter',
  Never: 'Aldrig',
  After: 'Efter',
  occurrences: 'gange',
  On: 'Den',
  'Delete this event': 'Slet denne begivenhed',
  'Export .ics': 'Eksportér .ics',
  'Download this occurrence as .ics': 'Download denne forekomst som .ics',
  'Download as .ics': 'Download som .ics',

  // ICS Import
  'Import Calendar': 'Importér kalender',
  'Import calendar': 'Importér kalender',
  'ICS File': 'ICS-fil',
  'Import mode': 'Importtilstand',
  'Merge into existing calendar': 'Flet ind i eksisterende kalender',
  'Target calendar': 'Destinationskalender',
  'Select calendar': 'Vælg kalender',
  'Enter calendar name': 'Indtast kalendernavn',
  Import: 'Importér',
  Close: 'Luk',
  'Reading file...': 'Læser fil...',
  'Parsing events...': 'Behandler begivenheder...',
  'Analyzing for duplicates...': 'Søger efter dubletter...',
  'Importing events...': 'Importerer begivenheder...',
  Created: 'Oprettet',
  Updated: 'Opdateret',
  Skipped: 'Sprunget over',
  Failed: 'Mislykkedes',
  'Imported %{count} events into "%{name}"': '%{count} begivenheder importeret i "%{name}"',
  'Parse warnings': 'Advarsler ved indlæsning',
  'Show details': 'Vis detaljer',
  'Hide details': 'Skjul detaljer',

  // Sharing
  'Share calendar: %{name}': 'Del kalender: %{name}',
  'Share with users': 'Del med brugere',
  'User ID or Email': 'Bruger-id eller e-mail',
  Read: 'Læse',
  'Read & Write': 'Læse og skrive',
  Invite: 'Inviter',
  'Read only': 'Skrivebeskyttet',
  'Public links': 'Offentlige links og invitationslinks',
  'Invite & Public links': 'Offentlige links og invitationslinks',
  'Create link': 'Opret link',
  'Create invite link': 'Opret invitationslink',
  'Read only link': 'Skrivebeskyttet link',
  'Read & Write link': 'Link med læse- og skriveadgang',
  'Web Invite Link': 'Webinvitationslink',
  'CalDAV Link': 'CalDAV-link',
  'Copy Web Invite': 'Kopiér webinvitation',
  'Copy CalDAV URL': 'Kopiér CalDAV-URL',
  'Copied!': 'Kopieret!',
  Copy: 'Kopiér',
  'No public links created yet': 'Der er endnu ikke oprettet offentlige links',
  'Revoke link': 'Tilbagekald link',
  'Shared via link': 'Delt via link',
  'Join Shared Calendar': 'Tilmeld delt kalender',
  'You have been invited to join the calendar "%{name}".':
    'Du er inviteret til kalenderen "%{name}".',
  'Permission: %{perm}': 'Tilladelse: %{perm}',
  'Join Calendar': 'Tilmeld kalender',
  'You are already subscribed to this calendar.': 'Du abonnerer allerede på denne kalender.',
  'Joined calendar successfully': 'Kalenderen er tilføjet',
  'Leave calendar': 'Forlad kalender',

  // Confirm Dialog
  Confirm: 'Bekræft',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Slet kalender',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Er du sikker på, at du vil slette '%{name}'? Alle begivenheder i kalenderen slettes permanent.",

  // Shared calendars
  Refresh: 'Opdater',
  'Toggle sidebar': 'Vis/skjul sidepanel',
  'Shared by:': 'Delt af:',
  'Shared Calendar': 'Delt kalender',
  Accepted: 'Accepteret',
  Invited: 'Inviteret',
  Left: 'Forladt',
  'Remove share': 'Fjern deling',
  Leave: 'Forlad',
  'Leave Calendar': 'Forlad kalender',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Er du sikker på, at du vil forlade '%{name}'? Du vil ikke længere have adgang til kalenderen."
}

export default da
