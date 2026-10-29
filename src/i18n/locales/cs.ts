import type { Messages } from './en'

const cs: Messages = {
  // Navigation
  Today: 'Dnes',
  Month: 'Měsíc',
  Week: 'Týden',
  Day: 'Den',

  // Sidebar
  Calendars: 'Kalendáře',
  'Create new calendar': 'Vytvořit nový kalendář',
  'Loading calendars...': 'Načítání kalendářů...',
  'No calendars found': 'Nebyly nalezeny žádné kalendáře',
  'Delete calendar': 'Smazat kalendář',
  'Share calendar': 'Sdílet kalendář',
  'Pending Invitations': 'Čekající pozvánky',
  'From:': 'Od:',
  Accept: 'Přijmout',
  Decline: 'Odmítnout',

  // Event Dialog
  'Edit Event': 'Upravit událost',
  'New Event': 'Nová událost',
  Title: 'Název',
  Calendar: 'Kalendář',
  'All day event': 'Celý den',
  'Start Date': 'Datum začátku',
  'Start Time': 'Čas začátku',
  'End Date': 'Datum konce',
  'End Time': 'Čas konce',
  Location: 'Místo',
  Description: 'Popis',
  'Event title': 'Název události',
  'Add location': 'Přidat místo',
  'Add description': 'Přidat popis',
  Delete: 'Smazat',
  Cancel: 'Zrušit',
  'Saving...': 'Ukládání...',
  Save: 'Uložit',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Tuto událost změnil jiný klient. Zvolte, jak konflikt vyřešit:',
  'Keep my changes': 'Ponechat mé změny',
  'Use server version': 'Použít verzi ze serveru',

  // Calendar Dialog
  'New Calendar': 'Nový kalendář',
  'Calendar Name': 'Název kalendáře',
  'Description (optional)': 'Popis (volitelný)',
  Color: 'Barva',
  'Calendar description': 'Popis kalendáře',
  'My Calendar': 'Můj kalendář',
  'Creating...': 'Vytváření...',
  Create: 'Vytvořit',

  // Recurrence
  'Edit Recurring Event': 'Upravit opakovanou událost',
  'This is a recurring event. What would you like to edit?':
    'Toto je opakovaná událost. Co chcete upravit?',
  'This event only': 'Pouze tuto událost',
  'All events in series': 'Všechny události v řadě',
  'this occurrence': 'tento výskyt',
  'entire series': 'celá řada',
  Repeat: 'Opakovat',
  Every: 'Každý',
  'day(s)': 'den/dny',
  'week(s)': 'týden/týdny',
  'month(s)': 'měsíc/měsíce',
  'year(s)': 'rok/roky',
  Mon: 'po',
  Tue: 'út',
  Wed: 'st',
  Thu: 'čt',
  Fri: 'pá',
  Sat: 'so',
  Sun: 'ne',
  Ends: 'Končí',
  Never: 'Nikdy',
  After: 'Po',
  occurrences: 'opakováních',
  On: 'Dne',
  'Delete this event': 'Smazat tuto událost',
  'Export .ics': 'Exportovat .ics',
  'Download this occurrence as .ics': 'Stáhnout tento výskyt jako .ics',
  'Download as .ics': 'Stáhnout jako .ics',

  // ICS Import
  'Import Calendar': 'Importovat kalendář',
  'Import calendar': 'Importovat kalendář',
  'ICS File': 'Soubor ICS',
  'Import mode': 'Režim importu',
  'Merge into existing calendar': 'Sloučit do existujícího kalendáře',
  'Target calendar': 'Cílový kalendář',
  'Select calendar': 'Vybrat kalendář',
  'Enter calendar name': 'Zadejte název kalendáře',
  Import: 'Importovat',
  Close: 'Zavřít',
  'Reading file...': 'Čtení souboru...',
  'Parsing events...': 'Zpracování událostí...',
  'Analyzing for duplicates...': 'Hledání duplicit...',
  'Importing events...': 'Importování událostí...',
  Created: 'Vytvořeno',
  Updated: 'Aktualizováno',
  Skipped: 'Přeskočeno',
  Failed: 'Selhalo',
  'Imported %{count} events into "%{name}"': 'Do „%{name}“ importováno událostí: %{count}',
  'Parse warnings': 'Upozornění při čtení',
  'Show details': 'Zobrazit podrobnosti',
  'Hide details': 'Skrýt podrobnosti',

  // Sharing
  'Share calendar: %{name}': 'Sdílet kalendář: %{name}',
  'Share with users': 'Sdílet s uživateli',
  'User ID or Email': 'ID uživatele nebo e-mail',
  Read: 'Čtení',
  'Read & Write': 'Čtení a zápis',
  Invite: 'Pozvat',
  'Read only': 'Pouze ke čtení',
  'Public links': 'Veřejné odkazy a pozvánky',
  'Invite & Public links': 'Veřejné odkazy a pozvánky',
  'Create link': 'Vytvořit odkaz',
  'Create invite link': 'Vytvořit odkaz s pozvánkou',
  'Read only link': 'Odkaz pouze ke čtení',
  'Read & Write link': 'Odkaz pro čtení a zápis',
  'Web Invite Link': 'Webový odkaz s pozvánkou',
  'CalDAV Link': 'Odkaz CalDAV',
  'Copy Web Invite': 'Kopírovat webovou pozvánku',
  'Copy CalDAV URL': 'Kopírovat adresu CalDAV',
  'Copied!': 'Zkopírováno!',
  Copy: 'Kopírovat',
  'No public links created yet': 'Zatím nebyly vytvořeny žádné veřejné odkazy',
  'Revoke link': 'Zrušit odkaz',
  'Shared via link': 'Sdíleno odkazem',
  'Join Shared Calendar': 'Připojit se ke sdílenému kalendáři',
  'You have been invited to join the calendar "%{name}".':
    'Byli jste pozváni do kalendáře „%{name}“.',
  'Permission: %{perm}': 'Oprávnění: %{perm}',
  'Join Calendar': 'Připojit se ke kalendáři',
  'You are already subscribed to this calendar.': 'Tento kalendář už odebíráte.',
  'Joined calendar successfully': 'Připojeno ke kalendáři',
  'Leave calendar': 'Opustit kalendář',

  // Confirm Dialog
  Confirm: 'Potvrdit',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Smazat kalendář',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Opravdu chcete smazat „%{name}“? Všechny události v tomto kalendáři budou trvale smazány.',

  // Shared calendars
  Refresh: 'Obnovit',
  'Toggle sidebar': 'Zobrazit/skrýt postranní panel',
  'Shared by:': 'Sdílí:',
  'Shared Calendar': 'Sdílený kalendář',
  Accepted: 'Přijato',
  Invited: 'Pozváno',
  Left: 'Odešel',
  'Remove share': 'Zrušit sdílení',
  Leave: 'Opustit',
  'Leave Calendar': 'Opustit kalendář',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Opravdu chcete opustit „%{name}“? Ztratíte přístup k tomuto kalendáři.'
}

export default cs
