import type { Messages } from './en'

const eo: Messages = {
  // Navigation
  Today: 'Hodiaŭ',
  Month: 'Monato',
  Week: 'Semajno',
  Day: 'Tago',

  // Sidebar
  Calendars: 'Kalendaroj',
  'Create new calendar': 'Krei novan kalendaron',
  'Loading calendars...': 'Ŝargante kalendarojn...',
  'No calendars found': 'Neniu kalendaro trovita',
  'Delete calendar': 'Forigi kalendaron',
  'Share calendar': 'Kunhavigi kalendaron',
  'Pending Invitations': 'Atendantaj invitoj',
  'From:': 'De:',
  Accept: 'Akcepti',
  Decline: 'Rifuzi',

  // Event Dialog
  'Edit Event': 'Redakti eventon',
  'New Event': 'Nova evento',
  Title: 'Titolo',
  Calendar: 'Kalendaro',
  'All day event': 'Tuttaga',
  'Start Date': 'Komenca dato',
  'Start Time': 'Komenca horo',
  'End Date': 'Fina dato',
  'End Time': 'Fina horo',
  Location: 'Loko',
  Description: 'Priskribo',
  'Event title': 'Titolo de la evento',
  'Add location': 'Aldoni lokon',
  'Add description': 'Aldoni priskribon',
  Delete: 'Forigi',
  Cancel: 'Nuligi',
  'Saving...': 'Konservante...',
  Save: 'Konservi',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Alia kliento modifis ĉi tiun eventon. Elektu kiel solvi la konflikton:',
  'Keep my changes': 'Teni miajn ŝanĝojn',
  'Use server version': 'Uzi la servilan version',

  // Calendar Dialog
  'New Calendar': 'Nova kalendaro',
  'Calendar Name': 'Nomo de la kalendaro',
  'Description (optional)': 'Priskribo (nedeviga)',
  Color: 'Koloro',
  'Calendar description': 'Priskribo de la kalendaro',
  'My Calendar': 'Mia kalendaro',
  'Creating...': 'Kreante...',
  Create: 'Krei',

  // Recurrence
  'Edit Recurring Event': 'Redakti ripetiĝantan eventon',
  'This is a recurring event. What would you like to edit?':
    'Ĉi tio estas ripetiĝanta evento. Kion vi volas redakti?',
  'This event only': 'Nur ĉi tiun eventon',
  'All events in series': 'Ĉiujn eventojn de la serio',
  'this occurrence': 'ĉi tiu okazo',
  'entire series': 'la tuta serio',
  Repeat: 'Ripeti',
  Every: 'Ĉiun',
  'day(s)': 'tago(j)n',
  'week(s)': 'semajno(j)n',
  'month(s)': 'monato(j)n',
  'year(s)': 'jaro(j)n',
  Mon: 'lu',
  Tue: 'ma',
  Wed: 'me',
  Thu: 'ĵa',
  Fri: 've',
  Sat: 'sa',
  Sun: 'di',
  Ends: 'Finiĝas',
  Never: 'Neniam',
  After: 'Post',
  occurrences: 'okazoj',
  On: 'Je',
  'Delete this event': 'Forigi ĉi tiun eventon',
  'Export .ics': 'Eksporti .ics',
  'Download this occurrence as .ics': 'Elŝuti ĉi tiun okazon kiel .ics',
  'Download as .ics': 'Elŝuti kiel .ics',

  // ICS Import
  'Import Calendar': 'Importi kalendaron',
  'Import calendar': 'Importi kalendaron',
  'ICS File': 'ICS-dosiero',
  'Import mode': 'Importreĝimo',
  'Merge into existing calendar': 'Kunfandi en ekzistantan kalendaron',
  'Target calendar': 'Cela kalendaro',
  'Select calendar': 'Elekti kalendaron',
  'Enter calendar name': 'Enigu nomon de kalendaro',
  Import: 'Importi',
  Close: 'Fermi',
  'Reading file...': 'Legante dosieron...',
  'Parsing events...': 'Analizante eventojn...',
  'Analyzing for duplicates...': 'Serĉante duoblaĵojn...',
  'Importing events...': 'Importante eventojn...',
  Created: 'Kreitaj',
  Updated: 'Ĝisdatigitaj',
  Skipped: 'Preterlasitaj',
  Failed: 'Malsukcesaj',
  'Imported %{count} events into "%{name}"': '%{count} eventoj importitaj en „%{name}“',
  'Parse warnings': 'Avertoj dum legado',
  'Show details': 'Montri detalojn',
  'Hide details': 'Kaŝi detalojn',

  // Sharing
  'Share calendar: %{name}': 'Kunhavigi kalendaron: %{name}',
  'Share with users': 'Kunhavigi kun uzantoj',
  'User ID or Email': 'Uzant-identigilo aŭ retpoŝto',
  Read: 'Legi',
  'Read & Write': 'Legi kaj skribi',
  Invite: 'Inviti',
  'Read only': 'Nur legebla',
  'Public links': 'Publikaj kaj invitaj ligiloj',
  'Invite & Public links': 'Publikaj kaj invitaj ligiloj',
  'Create link': 'Krei ligilon',
  'Create invite link': 'Krei invitan ligilon',
  'Read only link': 'Nurlega ligilo',
  'Read & Write link': 'Leg-skriba ligilo',
  'Web Invite Link': 'Reta invita ligilo',
  'CalDAV Link': 'CalDAV-ligilo',
  'Copy Web Invite': 'Kopii retan inviton',
  'Copy CalDAV URL': 'Kopii CalDAV-URL',
  'Copied!': 'Kopiite!',
  Copy: 'Kopii',
  'No public links created yet': 'Ankoraŭ neniu publika ligilo kreita',
  'Revoke link': 'Revoki ligilon',
  'Shared via link': 'Kunhavigita per ligilo',
  'Join Shared Calendar': 'Aliĝi al kunhavigita kalendaro',
  'You have been invited to join the calendar "%{name}".':
    'Vi estas invitita aliĝi al la kalendaro „%{name}“.',
  'Permission: %{perm}': 'Permeso: %{perm}',
  'Join Calendar': 'Aliĝi al kalendaro',
  'You are already subscribed to this calendar.': 'Vi jam abonas ĉi tiun kalendaron.',
  'Joined calendar successfully': 'Vi aliĝis al la kalendaro',
  'Leave calendar': 'Forlasi kalendaron',

  // Confirm Dialog
  Confirm: 'Konfirmi',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Forigi kalendaron',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Ĉu vi certe volas forigi „%{name}“? Ĉiuj eventoj en ĉi tiu kalendaro estos definitive forigitaj.',

  // Shared calendars
  Refresh: 'Aktualigi',
  'Toggle sidebar': 'Montri/kaŝi flankan breton',
  'Shared by:': 'Kunhavigita de:',
  'Shared Calendar': 'Kunhavigita kalendaro',
  Accepted: 'Akceptita',
  Invited: 'Invitita',
  Left: 'Foriris',
  'Remove share': 'Ĉesi kunhavigon',
  Leave: 'Forlasi',
  'Leave Calendar': 'Forlasi kalendaron',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Ĉu vi certe volas forlasi „%{name}“? Vi ne plu havos aliron al ĉi tiu kalendaro.'
}

export default eo
