import type { Messages } from './en'

const no: Messages = {
  // Navigation
  Today: 'I dag',
  Month: 'Måned',
  Week: 'Uke',
  Day: 'Dag',

  // Sidebar
  Calendars: 'Kalendere',
  'Create new calendar': 'Opprett ny kalender',
  'Loading calendars...': 'Laster inn kalendere...',
  'No calendars found': 'Fant ingen kalendere',
  'Delete calendar': 'Slett kalender',
  'Share calendar': 'Del kalender',
  'Pending Invitations': 'Ventende invitasjoner',
  'From:': 'Fra:',
  Accept: 'Godta',
  Decline: 'Avslå',

  // Event Dialog
  'Edit Event': 'Rediger hendelse',
  'New Event': 'Ny hendelse',
  Title: 'Tittel',
  Calendar: 'Kalender',
  'All day event': 'Hele dagen',
  'Start Date': 'Startdato',
  'Start Time': 'Starttid',
  'End Date': 'Sluttdato',
  'End Time': 'Slutttid',
  Location: 'Sted',
  Description: 'Beskrivelse',
  'Event title': 'Tittel på hendelsen',
  'Add location': 'Legg til sted',
  'Add description': 'Legg til beskrivelse',
  Delete: 'Slett',
  Cancel: 'Avbryt',
  'Saving...': 'Lagrer...',
  Save: 'Lagre',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Denne hendelsen er endret av en annen klient. Velg hvordan konflikten skal løses:',
  'Keep my changes': 'Behold endringene mine',
  'Use server version': 'Bruk serverens versjon',

  // Calendar Dialog
  'New Calendar': 'Ny kalender',
  'Calendar Name': 'Kalendernavn',
  'Description (optional)': 'Beskrivelse (valgfritt)',
  Color: 'Farge',
  'Calendar description': 'Kalenderbeskrivelse',
  'My Calendar': 'Min kalender',
  'Creating...': 'Oppretter...',
  Create: 'Opprett',

  // Recurrence
  'Edit Recurring Event': 'Rediger gjentakende hendelse',
  'This is a recurring event. What would you like to edit?':
    'Dette er en gjentakende hendelse. Hva vil du redigere?',
  'This event only': 'Bare denne hendelsen',
  'All events in series': 'Alle hendelser i serien',
  'this occurrence': 'denne forekomsten',
  'entire series': 'hele serien',
  Repeat: 'Gjenta',
  Every: 'Hver',
  'day(s)': 'dag(er)',
  'week(s)': 'uke(r)',
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
  Never: 'Aldri',
  After: 'Etter',
  occurrences: 'ganger',
  On: 'Den',
  'Delete this event': 'Slett denne hendelsen',
  'Export .ics': 'Eksporter .ics',
  'Download this occurrence as .ics': 'Last ned denne forekomsten som .ics',
  'Download as .ics': 'Last ned som .ics',

  // ICS Import
  'Import Calendar': 'Importer kalender',
  'Import calendar': 'Importer kalender',
  'ICS File': 'ICS-fil',
  'Import mode': 'Importmodus',
  'Merge into existing calendar': 'Slå sammen med eksisterende kalender',
  'Target calendar': 'Målkalender',
  'Select calendar': 'Velg kalender',
  'Enter calendar name': 'Skriv inn kalendernavn',
  Import: 'Importer',
  Close: 'Lukk',
  'Reading file...': 'Leser fil...',
  'Parsing events...': 'Behandler hendelser...',
  'Analyzing for duplicates...': 'Ser etter duplikater...',
  'Importing events...': 'Importerer hendelser...',
  Created: 'Opprettet',
  Updated: 'Oppdatert',
  Skipped: 'Hoppet over',
  Failed: 'Mislyktes',
  'Imported %{count} events into "%{name}"': '%{count} hendelser importert til «%{name}»',
  'Parse warnings': 'Advarsler ved innlesing',
  'Show details': 'Vis detaljer',
  'Hide details': 'Skjul detaljer',

  // Sharing
  'Share calendar: %{name}': 'Del kalender: %{name}',
  'Share with users': 'Del med brukere',
  'User ID or Email': 'Bruker-ID eller e-post',
  Read: 'Lese',
  'Read & Write': 'Lese og skrive',
  Invite: 'Inviter',
  'Read only': 'Skrivebeskyttet',
  'Public links': 'Offentlige lenker og invitasjonslenker',
  'Invite & Public links': 'Offentlige lenker og invitasjonslenker',
  'Create link': 'Opprett lenke',
  'Create invite link': 'Opprett invitasjonslenke',
  'Read only link': 'Skrivebeskyttet lenke',
  'Read & Write link': 'Lenke med lese- og skrivetilgang',
  'Web Invite Link': 'Nettinvitasjonslenke',
  'CalDAV Link': 'CalDAV-lenke',
  'Copy Web Invite': 'Kopier nettinvitasjon',
  'Copy CalDAV URL': 'Kopier CalDAV-URL',
  'Copied!': 'Kopiert!',
  Copy: 'Kopier',
  'No public links created yet': 'Ingen offentlige lenker er opprettet ennå',
  'Revoke link': 'Tilbakekall lenke',
  'Shared via link': 'Delt via lenke',
  'Join Shared Calendar': 'Bli med i delt kalender',
  'You have been invited to join the calendar "%{name}".':
    'Du er invitert til kalenderen «%{name}».',
  'Permission: %{perm}': 'Tillatelse: %{perm}',
  'Join Calendar': 'Bli med i kalender',
  'You are already subscribed to this calendar.': 'Du abonnerer allerede på denne kalenderen.',
  'Joined calendar successfully': 'Du er lagt til i kalenderen',
  'Leave calendar': 'Forlat kalender',

  // Confirm Dialog
  Confirm: 'Bekreft',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Slett kalender',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Er du sikker på at du vil slette «%{name}»? Alle hendelser i denne kalenderen blir slettet permanent.',

  // Shared calendars
  Refresh: 'Oppdater',
  'Toggle sidebar': 'Vis/skjul sidepanel',
  'Shared by:': 'Delt av:',
  'Shared Calendar': 'Delt kalender',
  Accepted: 'Godtatt',
  Invited: 'Invitert',
  Left: 'Har forlatt',
  'Remove share': 'Fjern deling',
  Leave: 'Forlat',
  'Leave Calendar': 'Forlat kalender',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Er du sikker på at du vil forlate «%{name}»? Du vil ikke lenger ha tilgang til denne kalenderen.'
}

export default no
