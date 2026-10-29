import type { Messages } from './en'

const sv: Messages = {
  // Navigation
  Today: 'Idag',
  Month: 'Månad',
  Week: 'Vecka',
  Day: 'Dag',

  // Sidebar
  Calendars: 'Kalendrar',
  'Create new calendar': 'Skapa ny kalender',
  'Loading calendars...': 'Läser in kalendrar...',
  'No calendars found': 'Inga kalendrar hittades',
  'Delete calendar': 'Ta bort kalender',
  'Share calendar': 'Dela kalender',
  'Pending Invitations': 'Väntande inbjudningar',
  'From:': 'Från:',
  Accept: 'Acceptera',
  Decline: 'Avböj',

  // Event Dialog
  'Edit Event': 'Redigera händelse',
  'New Event': 'Ny händelse',
  Title: 'Titel',
  Calendar: 'Kalender',
  'All day event': 'Heldag',
  'Start Date': 'Startdatum',
  'Start Time': 'Starttid',
  'End Date': 'Slutdatum',
  'End Time': 'Sluttid',
  Location: 'Plats',
  Description: 'Beskrivning',
  'Event title': 'Händelsens titel',
  'Add location': 'Lägg till plats',
  'Add description': 'Lägg till beskrivning',
  Delete: 'Ta bort',
  Cancel: 'Avbryt',
  'Saving...': 'Sparar...',
  Save: 'Spara',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Händelsen har ändrats av en annan klient. Välj hur konflikten ska lösas:',
  'Keep my changes': 'Behåll mina ändringar',
  'Use server version': 'Använd serverns version',

  // Calendar Dialog
  'New Calendar': 'Ny kalender',
  'Calendar Name': 'Kalendernamn',
  'Description (optional)': 'Beskrivning (valfritt)',
  Color: 'Färg',
  'Calendar description': 'Kalenderbeskrivning',
  'My Calendar': 'Min kalender',
  'Creating...': 'Skapar...',
  Create: 'Skapa',

  // Recurrence
  'Edit Recurring Event': 'Redigera återkommande händelse',
  'This is a recurring event. What would you like to edit?':
    'Det här är en återkommande händelse. Vad vill du redigera?',
  'This event only': 'Endast den här händelsen',
  'All events in series': 'Alla händelser i serien',
  'this occurrence': 'den här förekomsten',
  'entire series': 'hela serien',
  Repeat: 'Upprepa',
  Every: 'Var',
  'day(s)': 'dag(ar)',
  'week(s)': 'vecka/veckor',
  'month(s)': 'månad(er)',
  'year(s)': 'år',
  Mon: 'mån',
  Tue: 'tis',
  Wed: 'ons',
  Thu: 'tor',
  Fri: 'fre',
  Sat: 'lör',
  Sun: 'sön',
  Ends: 'Slutar',
  Never: 'Aldrig',
  After: 'Efter',
  occurrences: 'gånger',
  On: 'Den',
  'Delete this event': 'Ta bort den här händelsen',
  'Export .ics': 'Exportera .ics',
  'Download this occurrence as .ics': 'Ladda ner den här förekomsten som .ics',
  'Download as .ics': 'Ladda ner som .ics',

  // ICS Import
  'Import Calendar': 'Importera kalender',
  'Import calendar': 'Importera kalender',
  'ICS File': 'ICS-fil',
  'Import mode': 'Importläge',
  'Merge into existing calendar': 'Slå ihop med befintlig kalender',
  'Target calendar': 'Målkalender',
  'Select calendar': 'Välj kalender',
  'Enter calendar name': 'Ange kalendernamn',
  Import: 'Importera',
  Close: 'Stäng',
  'Reading file...': 'Läser fil...',
  'Parsing events...': 'Tolkar händelser...',
  'Analyzing for duplicates...': 'Söker efter dubbletter...',
  'Importing events...': 'Importerar händelser...',
  Created: 'Skapade',
  Updated: 'Uppdaterade',
  Skipped: 'Överhoppade',
  Failed: 'Misslyckade',
  'Imported %{count} events into "%{name}"': '%{count} händelser importerades till "%{name}"',
  'Parse warnings': 'Varningar vid inläsning',
  'Show details': 'Visa detaljer',
  'Hide details': 'Dölj detaljer',

  // Sharing
  'Share calendar: %{name}': 'Dela kalender: %{name}',
  'Share with users': 'Dela med användare',
  'User ID or Email': 'Användar-ID eller e-post',
  Read: 'Läsa',
  'Read & Write': 'Läsa och skriva',
  Invite: 'Bjud in',
  'Read only': 'Skrivskyddad',
  'Public links': 'Offentliga länkar och inbjudningslänkar',
  'Invite & Public links': 'Offentliga länkar och inbjudningslänkar',
  'Create link': 'Skapa länk',
  'Create invite link': 'Skapa inbjudningslänk',
  'Read only link': 'Skrivskyddad länk',
  'Read & Write link': 'Länk med läs- och skrivbehörighet',
  'Web Invite Link': 'Webbinbjudningslänk',
  'CalDAV Link': 'CalDAV-länk',
  'Copy Web Invite': 'Kopiera webbinbjudan',
  'Copy CalDAV URL': 'Kopiera CalDAV-URL',
  'Copied!': 'Kopierad!',
  Copy: 'Kopiera',
  'No public links created yet': 'Inga offentliga länkar har skapats än',
  'Revoke link': 'Återkalla länk',
  'Shared via link': 'Delad via länk',
  'Join Shared Calendar': 'Gå med i delad kalender',
  'You have been invited to join the calendar "%{name}".':
    'Du har bjudits in till kalendern "%{name}".',
  'Permission: %{perm}': 'Behörighet: %{perm}',
  'Join Calendar': 'Gå med i kalender',
  'You are already subscribed to this calendar.': 'Du prenumererar redan på den här kalendern.',
  'Joined calendar successfully': 'Du har gått med i kalendern',
  'Leave calendar': 'Lämna kalender',

  // Confirm Dialog
  Confirm: 'Bekräfta',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Ta bort kalender',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Vill du verkligen ta bort '%{name}'? Alla händelser i kalendern tas bort permanent.",

  // Shared calendars
  Refresh: 'Uppdatera',
  'Toggle sidebar': 'Visa/dölj sidofält',
  'Shared by:': 'Delad av:',
  'Shared Calendar': 'Delad kalender',
  Accepted: 'Accepterad',
  Invited: 'Inbjuden',
  Left: 'Har lämnat',
  'Remove share': 'Ta bort delning',
  Leave: 'Lämna',
  'Leave Calendar': 'Lämna kalender',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Vill du verkligen lämna '%{name}'? Du kommer inte längre att ha åtkomst till kalendern."
}

export default sv
