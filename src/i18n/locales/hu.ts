import type { Messages } from './en'

const hu: Messages = {
  // Navigation
  Today: 'Ma',
  Month: 'Hónap',
  Week: 'Hét',
  Day: 'Nap',

  // Sidebar
  Calendars: 'Naptárak',
  'Create new calendar': 'Új naptár létrehozása',
  'Loading calendars...': 'Naptárak betöltése...',
  'No calendars found': 'Nem található naptár',
  'Delete calendar': 'Naptár törlése',
  'Share calendar': 'Naptár megosztása',
  'Pending Invitations': 'Függő meghívások',
  'From:': 'Feladó:',
  Accept: 'Elfogadás',
  Decline: 'Elutasítás',

  // Event Dialog
  'Edit Event': 'Esemény szerkesztése',
  'New Event': 'Új esemény',
  Title: 'Cím',
  Calendar: 'Naptár',
  'All day event': 'Egész napos',
  'Start Date': 'Kezdő dátum',
  'Start Time': 'Kezdési idő',
  'End Date': 'Záró dátum',
  'End Time': 'Befejezési idő',
  Location: 'Helyszín',
  Description: 'Leírás',
  'Event title': 'Esemény címe',
  'Add location': 'Helyszín hozzáadása',
  'Add description': 'Leírás hozzáadása',
  Delete: 'Törlés',
  Cancel: 'Mégse',
  'Saving...': 'Mentés...',
  Save: 'Mentés',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Ezt az eseményt egy másik kliens módosította. Válassza ki, hogyan oldja fel az ütközést:',
  'Keep my changes': 'Saját módosítások megtartása',
  'Use server version': 'A kiszolgáló verziójának használata',

  // Calendar Dialog
  'New Calendar': 'Új naptár',
  'Calendar Name': 'Naptár neve',
  'Description (optional)': 'Leírás (nem kötelező)',
  Color: 'Szín',
  'Calendar description': 'Naptár leírása',
  'My Calendar': 'Saját naptár',
  'Creating...': 'Létrehozás...',
  Create: 'Létrehozás',

  // Recurrence
  'Edit Recurring Event': 'Ismétlődő esemény szerkesztése',
  'This is a recurring event. What would you like to edit?':
    'Ez egy ismétlődő esemény. Mit szeretne szerkeszteni?',
  'This event only': 'Csak ezt az eseményt',
  'All events in series': 'A sorozat összes eseményét',
  'this occurrence': 'ez az előfordulás',
  'entire series': 'teljes sorozat',
  Repeat: 'Ismétlés',
  Every: 'Minden',
  'day(s)': 'naponta',
  'week(s)': 'hetente',
  'month(s)': 'havonta',
  'year(s)': 'évente',
  Mon: 'H',
  Tue: 'K',
  Wed: 'Sze',
  Thu: 'Cs',
  Fri: 'P',
  Sat: 'Szo',
  Sun: 'V',
  Ends: 'Vége',
  Never: 'Soha',
  After: 'Ennyi után:',
  occurrences: 'előfordulás',
  On: 'Dátum',
  'Delete this event': 'Esemény törlése',
  'Export .ics': 'Exportálás .ics-be',
  'Download this occurrence as .ics': 'Ez az előfordulás letöltése .ics-ként',
  'Download as .ics': 'Letöltés .ics-ként',

  // ICS Import
  'Import Calendar': 'Naptár importálása',
  'Import calendar': 'Naptár importálása',
  'ICS File': 'ICS-fájl',
  'Import mode': 'Importálási mód',
  'Merge into existing calendar': 'Egyesítés meglévő naptárral',
  'Target calendar': 'Célnaptár',
  'Select calendar': 'Naptár kiválasztása',
  'Enter calendar name': 'Adja meg a naptár nevét',
  Import: 'Importálás',
  Close: 'Bezárás',
  'Reading file...': 'Fájl beolvasása...',
  'Parsing events...': 'Események feldolgozása...',
  'Analyzing for duplicates...': 'Ismétlődések keresése...',
  'Importing events...': 'Események importálása...',
  Created: 'Létrehozva',
  Updated: 'Frissítve',
  Skipped: 'Kihagyva',
  Failed: 'Sikertelen',
  'Imported %{count} events into "%{name}"': '%{count} esemény importálva ide: „%{name}”',
  'Parse warnings': 'Beolvasási figyelmeztetések',
  'Show details': 'Részletek megjelenítése',
  'Hide details': 'Részletek elrejtése',

  // Sharing
  'Share calendar: %{name}': 'Naptár megosztása: %{name}',
  'Share with users': 'Megosztás felhasználókkal',
  'User ID or Email': 'Felhasználói azonosító vagy e-mail',
  Read: 'Olvasás',
  'Read & Write': 'Olvasás és írás',
  Invite: 'Meghívás',
  'Read only': 'Csak olvasható',
  'Public links': 'Nyilvános és meghívó hivatkozások',
  'Invite & Public links': 'Nyilvános és meghívó hivatkozások',
  'Create link': 'Hivatkozás létrehozása',
  'Create invite link': 'Meghívó hivatkozás létrehozása',
  'Read only link': 'Csak olvasható hivatkozás',
  'Read & Write link': 'Olvasási és írási hivatkozás',
  'Web Invite Link': 'Webes meghívó hivatkozás',
  'CalDAV Link': 'CalDAV-hivatkozás',
  'Copy Web Invite': 'Webes meghívó másolása',
  'Copy CalDAV URL': 'CalDAV URL másolása',
  'Copied!': 'Másolva!',
  Copy: 'Másolás',
  'No public links created yet': 'Még nincs nyilvános hivatkozás',
  'Revoke link': 'Hivatkozás visszavonása',
  'Shared via link': 'Hivatkozással megosztva',
  'Join Shared Calendar': 'Csatlakozás megosztott naptárhoz',
  'You have been invited to join the calendar "%{name}".':
    'Meghívást kapott a(z) „%{name}” naptárhoz.',
  'Permission: %{perm}': 'Jogosultság: %{perm}',
  'Join Calendar': 'Csatlakozás a naptárhoz',
  'You are already subscribed to this calendar.': 'Már feliratkozott erre a naptárra.',
  'Joined calendar successfully': 'Sikeresen csatlakozott a naptárhoz',
  'Leave calendar': 'Kilépés a naptárból',

  // Confirm Dialog
  Confirm: 'Megerősítés',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Naptár törlése',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Biztosan törli a következőt: „%{name}”? A naptár összes eseménye véglegesen törlődik.',

  // Shared calendars
  Refresh: 'Frissítés',
  'Toggle sidebar': 'Oldalsáv megjelenítése/elrejtése',
  'Shared by:': 'Megosztotta:',
  'Shared Calendar': 'Megosztott naptár',
  Accepted: 'Elfogadva',
  Invited: 'Meghívva',
  Left: 'Kilépett',
  'Remove share': 'Megosztás megszüntetése',
  Leave: 'Kilépés',
  'Leave Calendar': 'Kilépés a naptárból',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Biztosan kilép a következőből: „%{name}”? Többé nem fér hozzá ehhez a naptárhoz.'
}

export default hu
