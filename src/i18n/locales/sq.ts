import type { Messages } from './en'

const sq: Messages = {
  // Navigation
  Today: 'Sot',
  Month: 'Muaj',
  Week: 'Javë',
  Day: 'Ditë',

  // Sidebar
  Calendars: 'Kalendarët',
  'Create new calendar': 'Krijo kalendar të ri',
  'Loading calendars...': 'Po ngarkohen kalendarët...',
  'No calendars found': 'Nuk u gjet asnjë kalendar',
  'Delete calendar': 'Fshi kalendarin',
  'Share calendar': 'Ndaj kalendarin',
  'Pending Invitations': 'Ftesa në pritje',
  'From:': 'Nga:',
  Accept: 'Prano',
  Decline: 'Refuzo',

  // Event Dialog
  'Edit Event': 'Ndrysho ngjarjen',
  'New Event': 'Ngjarje e re',
  Title: 'Titulli',
  Calendar: 'Kalendari',
  'All day event': 'Gjithë ditën',
  'Start Date': 'Data e fillimit',
  'Start Time': 'Ora e fillimit',
  'End Date': 'Data e mbarimit',
  'End Time': 'Ora e mbarimit',
  Location: 'Vendndodhja',
  Description: 'Përshkrimi',
  'Event title': 'Titulli i ngjarjes',
  'Add location': 'Shto vendndodhje',
  'Add description': 'Shto përshkrim',
  Delete: 'Fshi',
  Cancel: 'Anulo',
  'Saving...': 'Po ruhet...',
  Save: 'Ruaj',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Kjo ngjarje u ndryshua nga një klient tjetër. Zgjidh si ta zgjidhësh konfliktin:',
  'Keep my changes': 'Mbaj ndryshimet e mia',
  'Use server version': 'Përdor versionin e serverit',

  // Calendar Dialog
  'New Calendar': 'Kalendar i ri',
  'Calendar Name': 'Emri i kalendarit',
  'Description (optional)': 'Përshkrimi (opsional)',
  Color: 'Ngjyra',
  'Calendar description': 'Përshkrimi i kalendarit',
  'My Calendar': 'Kalendari im',
  'Creating...': 'Po krijohet...',
  Create: 'Krijo',

  // Recurrence
  'Edit Recurring Event': 'Ndrysho ngjarjen e përsëritur',
  'This is a recurring event. What would you like to edit?':
    'Kjo është një ngjarje e përsëritur. Çfarë dëshiron të ndryshosh?',
  'This event only': 'Vetëm këtë ngjarje',
  'All events in series': 'Të gjitha ngjarjet e serisë',
  'this occurrence': 'këtë përsëritje',
  'entire series': 'të gjithë serinë',
  Repeat: 'Përsërit',
  Every: 'Çdo',
  'day(s)': 'ditë',
  'week(s)': 'javë',
  'month(s)': 'muaj',
  'year(s)': 'vit',
  Mon: 'Hën',
  Tue: 'Mar',
  Wed: 'Mër',
  Thu: 'Enj',
  Fri: 'Pre',
  Sat: 'Sht',
  Sun: 'Die',
  Ends: 'Përfundon',
  Never: 'Asnjëherë',
  After: 'Pas',
  occurrences: 'përsëritjesh',
  On: 'Më',
  'Delete this event': 'Fshi këtë ngjarje',
  'Export .ics': 'Eksporto .ics',
  'Download this occurrence as .ics': 'Shkarko këtë përsëritje si .ics',
  'Download as .ics': 'Shkarko si .ics',

  // ICS Import
  'Import Calendar': 'Importo kalendar',
  'Import calendar': 'Importo kalendar',
  'ICS File': 'Skedar ICS',
  'Import mode': 'Mënyra e importit',
  'Merge into existing calendar': 'Bashko me një kalendar ekzistues',
  'Target calendar': 'Kalendari i synuar',
  'Select calendar': 'Zgjidh kalendarin',
  'Enter calendar name': 'Shkruaj emrin e kalendarit',
  Import: 'Importo',
  Close: 'Mbyll',
  'Reading file...': 'Po lexohet skedari...',
  'Parsing events...': 'Po analizohen ngjarjet...',
  'Analyzing for duplicates...': 'Po kërkohen dublikatat...',
  'Importing events...': 'Po importohen ngjarjet...',
  Created: 'Të krijuara',
  Updated: 'Të përditësuara',
  Skipped: 'Të anashkaluara',
  Failed: 'Të dështuara',
  'Imported %{count} events into "%{name}"': 'U importuan %{count} ngjarje në „%{name}“',
  'Parse warnings': 'Paralajmërime gjatë leximit',
  'Show details': 'Shfaq detajet',
  'Hide details': 'Fshih detajet',

  // Sharing
  'Share calendar: %{name}': 'Ndaj kalendarin: %{name}',
  'Share with users': 'Ndaj me përdoruesit',
  'User ID or Email': 'ID e përdoruesit ose email',
  Read: 'Lexim',
  'Read & Write': 'Lexim dhe shkrim',
  Invite: 'Fto',
  'Read only': 'Vetëm lexim',
  'Public links': 'Lidhje publike dhe ftese',
  'Invite & Public links': 'Lidhje publike dhe ftese',
  'Create link': 'Krijo lidhje',
  'Create invite link': 'Krijo lidhje ftese',
  'Read only link': 'Lidhje vetëm për lexim',
  'Read & Write link': 'Lidhje për lexim dhe shkrim',
  'Web Invite Link': 'Lidhje ftese në ueb',
  'CalDAV Link': 'Lidhje CalDAV',
  'Copy Web Invite': 'Kopjo ftesën në ueb',
  'Copy CalDAV URL': 'Kopjo URL-në CalDAV',
  'Copied!': 'U kopjua!',
  Copy: 'Kopjo',
  'No public links created yet': 'Ende nuk është krijuar asnjë lidhje publike',
  'Revoke link': 'Revoko lidhjen',
  'Shared via link': 'Ndarë përmes lidhjes',
  'Join Shared Calendar': 'Bashkohu me kalendarin e ndarë',
  'You have been invited to join the calendar "%{name}".':
    'Je ftuar të bashkohesh me kalendarin „%{name}“.',
  'Permission: %{perm}': 'Leje: %{perm}',
  'Join Calendar': 'Bashkohu me kalendarin',
  'You are already subscribed to this calendar.': 'Je abonuar tashmë në këtë kalendar.',
  'Joined calendar successfully': 'U bashkove me kalendarin',
  'Leave calendar': 'Largohu nga kalendari',

  // Confirm Dialog
  Confirm: 'Konfirmo',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Fshi kalendarin',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Je i sigurt që dëshiron të fshish „%{name}“? Të gjitha ngjarjet në këtë kalendar do të fshihen përgjithmonë.',

  // Shared calendars
  Refresh: 'Rifresko',
  'Toggle sidebar': 'Shfaq/fshih shiritin anësor',
  'Shared by:': 'Ndarë nga:',
  'Shared Calendar': 'Kalendar i ndarë',
  Accepted: 'E pranuar',
  Invited: 'I ftuar',
  Left: 'U largua',
  'Remove share': 'Hiq ndarjen',
  Leave: 'Largohu',
  'Leave Calendar': 'Largohu nga kalendari',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Je i sigurt që dëshiron të largohesh nga „%{name}“? Nuk do të kesh më qasje në këtë kalendar.'
}

export default sq
