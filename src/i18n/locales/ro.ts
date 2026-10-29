import type { Messages } from './en'

const ro: Messages = {
  // Navigation
  Today: 'Astăzi',
  Month: 'Lună',
  Week: 'Săptămână',
  Day: 'Zi',

  // Sidebar
  Calendars: 'Calendare',
  'Create new calendar': 'Creează un calendar nou',
  'Loading calendars...': 'Se încarcă calendarele...',
  'No calendars found': 'Nu s-au găsit calendare',
  'Delete calendar': 'Șterge calendarul',
  'Share calendar': 'Partajează calendarul',
  'Pending Invitations': 'Invitații în așteptare',
  'From:': 'De la:',
  Accept: 'Acceptă',
  Decline: 'Refuză',

  // Event Dialog
  'Edit Event': 'Editează evenimentul',
  'New Event': 'Eveniment nou',
  Title: 'Titlu',
  Calendar: 'Calendar',
  'All day event': 'Toată ziua',
  'Start Date': 'Data de început',
  'Start Time': 'Ora de început',
  'End Date': 'Data de sfârșit',
  'End Time': 'Ora de sfârșit',
  Location: 'Locație',
  Description: 'Descriere',
  'Event title': 'Titlul evenimentului',
  'Add location': 'Adaugă locație',
  'Add description': 'Adaugă descriere',
  Delete: 'Șterge',
  Cancel: 'Anulează',
  'Saving...': 'Se salvează...',
  Save: 'Salvează',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Acest eveniment a fost modificat de alt client. Alege cum rezolvi conflictul:',
  'Keep my changes': 'Păstrează modificările mele',
  'Use server version': 'Folosește versiunea de pe server',

  // Calendar Dialog
  'New Calendar': 'Calendar nou',
  'Calendar Name': 'Numele calendarului',
  'Description (optional)': 'Descriere (opțional)',
  Color: 'Culoare',
  'Calendar description': 'Descrierea calendarului',
  'My Calendar': 'Calendarul meu',
  'Creating...': 'Se creează...',
  Create: 'Creează',

  // Recurrence
  'Edit Recurring Event': 'Editează evenimentul recurent',
  'This is a recurring event. What would you like to edit?':
    'Acesta este un eveniment recurent. Ce vrei să editezi?',
  'This event only': 'Doar acest eveniment',
  'All events in series': 'Toate evenimentele din serie',
  'this occurrence': 'această apariție',
  'entire series': 'întreaga serie',
  Repeat: 'Repetă',
  Every: 'La fiecare',
  'day(s)': 'zi(le)',
  'week(s)': 'săptămână(i)',
  'month(s)': 'lună(i)',
  'year(s)': 'an(i)',
  Mon: 'lun.',
  Tue: 'mar.',
  Wed: 'mie.',
  Thu: 'joi',
  Fri: 'vin.',
  Sat: 'sâm.',
  Sun: 'dum.',
  Ends: 'Se termină',
  Never: 'Niciodată',
  After: 'După',
  occurrences: 'apariții',
  On: 'Pe',
  'Delete this event': 'Șterge acest eveniment',
  'Export .ics': 'Exportă .ics',
  'Download this occurrence as .ics': 'Descarcă această apariție ca .ics',
  'Download as .ics': 'Descarcă ca .ics',

  // ICS Import
  'Import Calendar': 'Importă calendar',
  'Import calendar': 'Importă calendar',
  'ICS File': 'Fișier ICS',
  'Import mode': 'Mod de import',
  'Merge into existing calendar': 'Combină cu un calendar existent',
  'Target calendar': 'Calendar de destinație',
  'Select calendar': 'Selectează calendarul',
  'Enter calendar name': 'Introdu numele calendarului',
  Import: 'Importă',
  Close: 'Închide',
  'Reading file...': 'Se citește fișierul...',
  'Parsing events...': 'Se analizează evenimentele...',
  'Analyzing for duplicates...': 'Se caută duplicate...',
  'Importing events...': 'Se importă evenimentele...',
  Created: 'Create',
  Updated: 'Actualizate',
  Skipped: 'Omise',
  Failed: 'Eșuate',
  'Imported %{count} events into "%{name}"': 'Au fost importate %{count} evenimente în „%{name}”',
  'Parse warnings': 'Avertismente la citire',
  'Show details': 'Afișează detaliile',
  'Hide details': 'Ascunde detaliile',

  // Sharing
  'Share calendar: %{name}': 'Partajează calendarul: %{name}',
  'Share with users': 'Partajează cu utilizatori',
  'User ID or Email': 'ID utilizator sau e-mail',
  Read: 'Citire',
  'Read & Write': 'Citire și scriere',
  Invite: 'Invită',
  'Read only': 'Doar citire',
  'Public links': 'Linkuri publice și de invitație',
  'Invite & Public links': 'Linkuri publice și de invitație',
  'Create link': 'Creează link',
  'Create invite link': 'Creează link de invitație',
  'Read only link': 'Link doar pentru citire',
  'Read & Write link': 'Link pentru citire și scriere',
  'Web Invite Link': 'Link de invitație web',
  'CalDAV Link': 'Link CalDAV',
  'Copy Web Invite': 'Copiază invitația web',
  'Copy CalDAV URL': 'Copiază URL-ul CalDAV',
  'Copied!': 'Copiat!',
  Copy: 'Copiază',
  'No public links created yet': 'Nu s-au creat încă linkuri publice',
  'Revoke link': 'Revocă linkul',
  'Shared via link': 'Partajat prin link',
  'Join Shared Calendar': 'Alătură-te calendarului partajat',
  'You have been invited to join the calendar "%{name}".':
    'Ai fost invitat să te alături calendarului „%{name}”.',
  'Permission: %{perm}': 'Permisiune: %{perm}',
  'Join Calendar': 'Alătură-te calendarului',
  'You are already subscribed to this calendar.': 'Ești deja abonat la acest calendar.',
  'Joined calendar successfully': 'Te-ai alăturat calendarului',
  'Leave calendar': 'Părăsește calendarul',

  // Confirm Dialog
  Confirm: 'Confirmă',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Șterge calendarul',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Sigur vrei să ștergi „%{name}”? Toate evenimentele din acest calendar vor fi șterse definitiv.',

  // Shared calendars
  Refresh: 'Reîmprospătează',
  'Toggle sidebar': 'Afișează/ascunde bara laterală',
  'Shared by:': 'Partajat de:',
  'Shared Calendar': 'Calendar partajat',
  Accepted: 'Acceptat',
  Invited: 'Invitat',
  Left: 'A părăsit',
  'Remove share': 'Elimină partajarea',
  Leave: 'Părăsește',
  'Leave Calendar': 'Părăsește calendarul',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Sigur vrei să părăsești „%{name}”? Nu vei mai avea acces la acest calendar.'
}

export default ro
