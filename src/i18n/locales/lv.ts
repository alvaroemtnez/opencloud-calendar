import type { Messages } from './en'

const lv: Messages = {
  // Navigation
  Today: 'Šodien',
  Month: 'Mēnesis',
  Week: 'Nedēļa',
  Day: 'Diena',

  // Sidebar
  Calendars: 'Kalendāri',
  'Create new calendar': 'Izveidot jaunu kalendāru',
  'Loading calendars...': 'Ielādē kalendārus...',
  'No calendars found': 'Kalendāri nav atrasti',
  'Delete calendar': 'Dzēst kalendāru',
  'Share calendar': 'Kopīgot kalendāru',
  'Pending Invitations': 'Gaidošie ielūgumi',
  'From:': 'No:',
  Accept: 'Pieņemt',
  Decline: 'Noraidīt',

  // Event Dialog
  'Edit Event': 'Rediģēt notikumu',
  'New Event': 'Jauns notikums',
  Title: 'Nosaukums',
  Calendar: 'Kalendārs',
  'All day event': 'Visu dienu',
  'Start Date': 'Sākuma datums',
  'Start Time': 'Sākuma laiks',
  'End Date': 'Beigu datums',
  'End Time': 'Beigu laiks',
  Location: 'Vieta',
  Description: 'Apraksts',
  'Event title': 'Notikuma nosaukums',
  'Add location': 'Pievienot vietu',
  'Add description': 'Pievienot aprakstu',
  Delete: 'Dzēst',
  Cancel: 'Atcelt',
  'Saving...': 'Saglabā...',
  Save: 'Saglabāt',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Šo notikumu mainīja cits klients. Izvēlieties, kā atrisināt konfliktu:',
  'Keep my changes': 'Paturēt manas izmaiņas',
  'Use server version': 'Izmantot servera versiju',

  // Calendar Dialog
  'New Calendar': 'Jauns kalendārs',
  'Calendar Name': 'Kalendāra nosaukums',
  'Description (optional)': 'Apraksts (neobligāts)',
  Color: 'Krāsa',
  'Calendar description': 'Kalendāra apraksts',
  'My Calendar': 'Mans kalendārs',
  'Creating...': 'Izveido...',
  Create: 'Izveidot',

  // Recurrence
  'Edit Recurring Event': 'Rediģēt atkārtotu notikumu',
  'This is a recurring event. What would you like to edit?':
    'Šis ir atkārtots notikums. Ko vēlaties rediģēt?',
  'This event only': 'Tikai šo notikumu',
  'All events in series': 'Visus sērijas notikumus',
  'this occurrence': 'šī reize',
  'entire series': 'visa sērija',
  Repeat: 'Atkārtot',
  Every: 'Ik pēc',
  'day(s)': 'dienas(-ām)',
  'week(s)': 'nedēļas(-ām)',
  'month(s)': 'mēneša(-iem)',
  'year(s)': 'gada(-iem)',
  Mon: 'P',
  Tue: 'O',
  Wed: 'T',
  Thu: 'C',
  Fri: 'Pk',
  Sat: 'S',
  Sun: 'Sv',
  Ends: 'Beidzas',
  Never: 'Nekad',
  After: 'Pēc',
  occurrences: 'reizēm',
  On: 'Datumā',
  'Delete this event': 'Dzēst šo notikumu',
  'Export .ics': 'Eksportēt .ics',
  'Download this occurrence as .ics': 'Lejupielādēt šo reizi kā .ics',
  'Download as .ics': 'Lejupielādēt kā .ics',

  // ICS Import
  'Import Calendar': 'Importēt kalendāru',
  'Import calendar': 'Importēt kalendāru',
  'ICS File': 'ICS fails',
  'Import mode': 'Importēšanas režīms',
  'Merge into existing calendar': 'Apvienot ar esošu kalendāru',
  'Target calendar': 'Mērķa kalendārs',
  'Select calendar': 'Izvēlēties kalendāru',
  'Enter calendar name': 'Ievadiet kalendāra nosaukumu',
  Import: 'Importēt',
  Close: 'Aizvērt',
  'Reading file...': 'Nolasa failu...',
  'Parsing events...': 'Apstrādā notikumus...',
  'Analyzing for duplicates...': 'Meklē dublikātus...',
  'Importing events...': 'Importē notikumus...',
  Created: 'Izveidoti',
  Updated: 'Atjaunināti',
  Skipped: 'Izlaisti',
  Failed: 'Neizdevās',
  'Imported %{count} events into "%{name}"': 'Kalendārā “%{name}” importēti notikumi: %{count}',
  'Parse warnings': 'Nolasīšanas brīdinājumi',
  'Show details': 'Rādīt detaļas',
  'Hide details': 'Slēpt detaļas',

  // Sharing
  'Share calendar: %{name}': 'Kopīgot kalendāru: %{name}',
  'Share with users': 'Kopīgot ar lietotājiem',
  'User ID or Email': 'Lietotāja ID vai e-pasts',
  Read: 'Lasīt',
  'Read & Write': 'Lasīt un rakstīt',
  Invite: 'Uzaicināt',
  'Read only': 'Tikai lasīšanai',
  'Public links': 'Publiskās un ielūguma saites',
  'Invite & Public links': 'Publiskās un ielūguma saites',
  'Create link': 'Izveidot saiti',
  'Create invite link': 'Izveidot ielūguma saiti',
  'Read only link': 'Saite tikai lasīšanai',
  'Read & Write link': 'Lasīšanas un rakstīšanas saite',
  'Web Invite Link': 'Tīmekļa ielūguma saite',
  'CalDAV Link': 'CalDAV saite',
  'Copy Web Invite': 'Kopēt tīmekļa ielūgumu',
  'Copy CalDAV URL': 'Kopēt CalDAV URL',
  'Copied!': 'Nokopēts!',
  Copy: 'Kopēt',
  'No public links created yet': 'Publiskās saites vēl nav izveidotas',
  'Revoke link': 'Atsaukt saiti',
  'Shared via link': 'Kopīgots ar saiti',
  'Join Shared Calendar': 'Pievienoties kopīgotam kalendāram',
  'You have been invited to join the calendar "%{name}".':
    'Jūs esat uzaicināts pievienoties kalendāram “%{name}”.',
  'Permission: %{perm}': 'Atļauja: %{perm}',
  'Join Calendar': 'Pievienoties kalendāram',
  'You are already subscribed to this calendar.': 'Jūs jau abonējat šo kalendāru.',
  'Joined calendar successfully': 'Jūs pievienojāties kalendāram',
  'Leave calendar': 'Pamest kalendāru',

  // Confirm Dialog
  Confirm: 'Apstiprināt',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Dzēst kalendāru',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Vai tiešām vēlaties dzēst “%{name}”? Visi šī kalendāra notikumi tiks neatgriezeniski dzēsti.',

  // Shared calendars
  Refresh: 'Atsvaidzināt',
  'Toggle sidebar': 'Rādīt/slēpt sānjoslu',
  'Shared by:': 'Kopīgoja:',
  'Shared Calendar': 'Kopīgots kalendārs',
  Accepted: 'Pieņemts',
  Invited: 'Uzaicināts',
  Left: 'Pameta',
  'Remove share': 'Noņemt kopīgošanu',
  Leave: 'Pamest',
  'Leave Calendar': 'Pamest kalendāru',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Vai tiešām vēlaties pamest “%{name}”? Jums vairs nebūs piekļuves šim kalendāram.'
}

export default lv
