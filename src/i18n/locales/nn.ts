import type { Messages } from './en'

const nn: Messages = {
  // Navigation
  Today: 'I dag',
  Month: 'Månad',
  Week: 'Veke',
  Day: 'Dag',

  // Sidebar
  Calendars: 'Kalendrar',
  'Create new calendar': 'Opprett ny kalender',
  'Loading calendars...': 'Lastar inn kalendrar...',
  'No calendars found': 'Fann ingen kalendrar',
  'Delete calendar': 'Slett kalender',
  'Share calendar': 'Del kalender',
  'Pending Invitations': 'Ventande invitasjonar',
  'From:': 'Frå:',
  Accept: 'Godta',
  Decline: 'Avslå',

  // Event Dialog
  'Edit Event': 'Rediger hending',
  'New Event': 'Ny hending',
  Title: 'Tittel',
  Calendar: 'Kalender',
  'All day event': 'Heile dagen',
  'Start Date': 'Startdato',
  'Start Time': 'Starttid',
  'End Date': 'Sluttdato',
  'End Time': 'Slutttid',
  Location: 'Stad',
  Description: 'Skildring',
  'Event title': 'Tittel på hendinga',
  'Add location': 'Legg til stad',
  'Add description': 'Legg til skildring',
  Delete: 'Slett',
  Cancel: 'Avbryt',
  'Saving...': 'Lagrar...',
  Save: 'Lagre',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Denne hendinga er endra av ein annan klient. Vel korleis konflikten skal løysast:',
  'Keep my changes': 'Behald endringane mine',
  'Use server version': 'Bruk versjonen på tenaren',

  // Calendar Dialog
  'New Calendar': 'Ny kalender',
  'Calendar Name': 'Kalendernamn',
  'Description (optional)': 'Skildring (valfritt)',
  Color: 'Farge',
  'Calendar description': 'Kalenderskildring',
  'My Calendar': 'Kalenderen min',
  'Creating...': 'Opprettar...',
  Create: 'Opprett',

  // Recurrence
  'Edit Recurring Event': 'Rediger gjentakande hending',
  'This is a recurring event. What would you like to edit?':
    'Dette er ei gjentakande hending. Kva vil du redigere?',
  'This event only': 'Berre denne hendinga',
  'All events in series': 'Alle hendingar i serien',
  'this occurrence': 'denne førekomsten',
  'entire series': 'heile serien',
  Repeat: 'Gjenta',
  Every: 'Kvar',
  'day(s)': 'dag(ar)',
  'week(s)': 'veke/veker',
  'month(s)': 'månad(er)',
  'year(s)': 'år',
  Mon: 'mån',
  Tue: 'tys',
  Wed: 'ons',
  Thu: 'tor',
  Fri: 'fre',
  Sat: 'lau',
  Sun: 'sun',
  Ends: 'Sluttar',
  Never: 'Aldri',
  After: 'Etter',
  occurrences: 'gonger',
  On: 'Den',
  'Delete this event': 'Slett denne hendinga',
  'Export .ics': 'Eksporter .ics',
  'Download this occurrence as .ics': 'Last ned denne førekomsten som .ics',
  'Download as .ics': 'Last ned som .ics',

  // ICS Import
  'Import Calendar': 'Importer kalender',
  'Import calendar': 'Importer kalender',
  'ICS File': 'ICS-fil',
  'Import mode': 'Importmodus',
  'Merge into existing calendar': 'Slå saman med eksisterande kalender',
  'Target calendar': 'Målkalender',
  'Select calendar': 'Vel kalender',
  'Enter calendar name': 'Skriv inn kalendernamn',
  Import: 'Importer',
  Close: 'Lukk',
  'Reading file...': 'Les fil...',
  'Parsing events...': 'Handsamar hendingar...',
  'Analyzing for duplicates...': 'Ser etter duplikat...',
  'Importing events...': 'Importerer hendingar...',
  Created: 'Oppretta',
  Updated: 'Oppdatert',
  Skipped: 'Hoppa over',
  Failed: 'Mislukka',
  'Imported %{count} events into "%{name}"': '%{count} hendingar importerte til «%{name}»',
  'Parse warnings': 'Åtvaringar ved innlesing',
  'Show details': 'Vis detaljar',
  'Hide details': 'Skjul detaljar',

  // Sharing
  'Share calendar: %{name}': 'Del kalender: %{name}',
  'Share with users': 'Del med brukarar',
  'User ID or Email': 'Brukar-ID eller e-post',
  Read: 'Lese',
  'Read & Write': 'Lese og skrive',
  Invite: 'Inviter',
  'Read only': 'Skriveverna',
  'Public links': 'Offentlege lenkjer og invitasjonslenkjer',
  'Invite & Public links': 'Offentlege lenkjer og invitasjonslenkjer',
  'Create link': 'Opprett lenkje',
  'Create invite link': 'Opprett invitasjonslenkje',
  'Read only link': 'Skriveverna lenkje',
  'Read & Write link': 'Lenkje med lese- og skrivetilgang',
  'Web Invite Link': 'Nettinvitasjonslenkje',
  'CalDAV Link': 'CalDAV-lenkje',
  'Copy Web Invite': 'Kopier nettinvitasjon',
  'Copy CalDAV URL': 'Kopier CalDAV-URL',
  'Copied!': 'Kopiert!',
  Copy: 'Kopier',
  'No public links created yet': 'Ingen offentlege lenkjer er oppretta enno',
  'Revoke link': 'Trekk tilbake lenkje',
  'Shared via link': 'Delt via lenkje',
  'Join Shared Calendar': 'Bli med i delt kalender',
  'You have been invited to join the calendar "%{name}".':
    'Du er invitert til kalenderen «%{name}».',
  'Permission: %{perm}': 'Løyve: %{perm}',
  'Join Calendar': 'Bli med i kalender',
  'You are already subscribed to this calendar.': 'Du abonnerer allereie på denne kalenderen.',
  'Joined calendar successfully': 'Du er lagd til i kalenderen',
  'Leave calendar': 'Forlat kalender',

  // Confirm Dialog
  Confirm: 'Stadfest',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Slett kalender',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Er du sikker på at du vil slette «%{name}»? Alle hendingar i denne kalenderen blir sletta for godt.',

  // Shared calendars
  Refresh: 'Oppdater',
  'Toggle sidebar': 'Vis/skjul sidepanel',
  'Shared by:': 'Delt av:',
  'Shared Calendar': 'Delt kalender',
  Accepted: 'Godteke',
  Invited: 'Invitert',
  Left: 'Har forlate',
  'Remove share': 'Fjern deling',
  Leave: 'Forlat',
  'Leave Calendar': 'Forlat kalender',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Er du sikker på at du vil forlate «%{name}»? Du vil ikkje lenger ha tilgang til denne kalenderen.'
}

export default nn
