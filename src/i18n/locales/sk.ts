import type { Messages } from './en'

const sk: Messages = {
  // Navigation
  Today: 'Dnes',
  Month: 'Mesiac',
  Week: 'Týždeň',
  Day: 'Deň',

  // Sidebar
  Calendars: 'Kalendáre',
  'Create new calendar': 'Vytvoriť nový kalendár',
  'Loading calendars...': 'Načítavajú sa kalendáre...',
  'No calendars found': 'Nenašli sa žiadne kalendáre',
  'Delete calendar': 'Odstrániť kalendár',
  'Share calendar': 'Zdieľať kalendár',
  'Pending Invitations': 'Čakajúce pozvánky',
  'From:': 'Od:',
  Accept: 'Prijať',
  Decline: 'Odmietnuť',

  // Event Dialog
  'Edit Event': 'Upraviť udalosť',
  'New Event': 'Nová udalosť',
  Title: 'Názov',
  Calendar: 'Kalendár',
  'All day event': 'Celý deň',
  'Start Date': 'Dátum začiatku',
  'Start Time': 'Čas začiatku',
  'End Date': 'Dátum konca',
  'End Time': 'Čas konca',
  Location: 'Miesto',
  Description: 'Popis',
  'Event title': 'Názov udalosti',
  'Add location': 'Pridať miesto',
  'Add description': 'Pridať popis',
  Delete: 'Odstrániť',
  Cancel: 'Zrušiť',
  'Saving...': 'Ukladá sa...',
  Save: 'Uložiť',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Túto udalosť zmenil iný klient. Vyberte, ako konflikt vyriešiť:',
  'Keep my changes': 'Ponechať moje zmeny',
  'Use server version': 'Použiť verziu zo servera',

  // Calendar Dialog
  'New Calendar': 'Nový kalendár',
  'Calendar Name': 'Názov kalendára',
  'Description (optional)': 'Popis (voliteľný)',
  Color: 'Farba',
  'Calendar description': 'Popis kalendára',
  'My Calendar': 'Môj kalendár',
  'Creating...': 'Vytvára sa...',
  Create: 'Vytvoriť',

  // Recurrence
  'Edit Recurring Event': 'Upraviť opakovanú udalosť',
  'This is a recurring event. What would you like to edit?':
    'Toto je opakovaná udalosť. Čo chcete upraviť?',
  'This event only': 'Iba túto udalosť',
  'All events in series': 'Všetky udalosti v sérii',
  'this occurrence': 'tento výskyt',
  'entire series': 'celá séria',
  Repeat: 'Opakovať',
  Every: 'Každý',
  'day(s)': 'deň/dni',
  'week(s)': 'týždeň/týždne',
  'month(s)': 'mesiac/mesiace',
  'year(s)': 'rok/roky',
  Mon: 'po',
  Tue: 'ut',
  Wed: 'st',
  Thu: 'št',
  Fri: 'pi',
  Sat: 'so',
  Sun: 'ne',
  Ends: 'Končí',
  Never: 'Nikdy',
  After: 'Po',
  occurrences: 'opakovaniach',
  On: 'Dňa',
  'Delete this event': 'Odstrániť túto udalosť',
  'Export .ics': 'Exportovať .ics',
  'Download this occurrence as .ics': 'Stiahnuť tento výskyt ako .ics',
  'Download as .ics': 'Stiahnuť ako .ics',

  // ICS Import
  'Import Calendar': 'Importovať kalendár',
  'Import calendar': 'Importovať kalendár',
  'ICS File': 'Súbor ICS',
  'Import mode': 'Režim importu',
  'Merge into existing calendar': 'Zlúčiť do existujúceho kalendára',
  'Target calendar': 'Cieľový kalendár',
  'Select calendar': 'Vybrať kalendár',
  'Enter calendar name': 'Zadajte názov kalendára',
  Import: 'Importovať',
  Close: 'Zavrieť',
  'Reading file...': 'Číta sa súbor...',
  'Parsing events...': 'Spracúvajú sa udalosti...',
  'Analyzing for duplicates...': 'Hľadajú sa duplikáty...',
  'Importing events...': 'Importujú sa udalosti...',
  Created: 'Vytvorené',
  Updated: 'Aktualizované',
  Skipped: 'Preskočené',
  Failed: 'Zlyhané',
  'Imported %{count} events into "%{name}"': 'Do „%{name}“ sa importovalo udalostí: %{count}',
  'Parse warnings': 'Upozornenia pri čítaní',
  'Show details': 'Zobraziť podrobnosti',
  'Hide details': 'Skryť podrobnosti',

  // Sharing
  'Share calendar: %{name}': 'Zdieľať kalendár: %{name}',
  'Share with users': 'Zdieľať s používateľmi',
  'User ID or Email': 'ID používateľa alebo e-mail',
  Read: 'Čítanie',
  'Read & Write': 'Čítanie a zápis',
  Invite: 'Pozvať',
  'Read only': 'Iba na čítanie',
  'Public links': 'Verejné odkazy a pozvánky',
  'Invite & Public links': 'Verejné odkazy a pozvánky',
  'Create link': 'Vytvoriť odkaz',
  'Create invite link': 'Vytvoriť odkaz s pozvánkou',
  'Read only link': 'Odkaz iba na čítanie',
  'Read & Write link': 'Odkaz na čítanie a zápis',
  'Web Invite Link': 'Webový odkaz s pozvánkou',
  'CalDAV Link': 'Odkaz CalDAV',
  'Copy Web Invite': 'Kopírovať webovú pozvánku',
  'Copy CalDAV URL': 'Kopírovať adresu CalDAV',
  'Copied!': 'Skopírované!',
  Copy: 'Kopírovať',
  'No public links created yet': 'Zatiaľ nie sú vytvorené žiadne verejné odkazy',
  'Revoke link': 'Zrušiť odkaz',
  'Shared via link': 'Zdieľané cez odkaz',
  'Join Shared Calendar': 'Pripojiť sa k zdieľanému kalendáru',
  'You have been invited to join the calendar "%{name}".':
    'Boli ste pozvaní do kalendára „%{name}“.',
  'Permission: %{perm}': 'Povolenie: %{perm}',
  'Join Calendar': 'Pripojiť sa ku kalendáru',
  'You are already subscribed to this calendar.': 'Tento kalendár už odoberáte.',
  'Joined calendar successfully': 'Pripojenie ku kalendáru bolo úspešné',
  'Leave calendar': 'Opustiť kalendár',

  // Confirm Dialog
  Confirm: 'Potvrdiť',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Odstrániť kalendár',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Naozaj chcete odstrániť „%{name}“? Všetky udalosti v tomto kalendári budú natrvalo odstránené.',

  // Shared calendars
  Refresh: 'Obnoviť',
  'Toggle sidebar': 'Zobraziť/skryť bočný panel',
  'Shared by:': 'Zdieľa:',
  'Shared Calendar': 'Zdieľaný kalendár',
  Accepted: 'Prijaté',
  Invited: 'Pozvaný',
  Left: 'Odišiel',
  'Remove share': 'Zrušiť zdieľanie',
  Leave: 'Opustiť',
  'Leave Calendar': 'Opustiť kalendár',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Naozaj chcete opustiť „%{name}“? Stratíte prístup k tomuto kalendáru.'
}

export default sk
