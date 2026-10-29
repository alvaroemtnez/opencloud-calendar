import type { Messages } from './en'

const ig: Messages = {
  // Navigation
  Today: 'Taa',
  Month: 'Ọnwa',
  Week: 'Izu',
  Day: 'Ụbọchị',

  // Sidebar
  Calendars: 'Kalenda',
  'Create new calendar': 'Mepụta kalenda ọhụrụ',
  'Loading calendars...': 'Na-ebunye kalenda...',
  'No calendars found': 'Ahụghị kalenda ọ bụla',
  'Delete calendar': 'Hichapụ kalenda',
  'Share calendar': 'Kekọrịta kalenda',
  'Pending Invitations': 'Akwụkwọ ịkpọ òkù na-echere',
  'From:': "Site n'aka:",
  Accept: 'Nabata',
  Decline: 'Jụ',

  // Event Dialog
  'Edit Event': 'Dezie mmemme',
  'New Event': 'Mmemme ọhụrụ',
  Title: 'Aha',
  Calendar: 'Kalenda',
  'All day event': 'Ụbọchị niile',
  'Start Date': 'Ụbọchị mmalite',
  'Start Time': 'Oge mmalite',
  'End Date': 'Ụbọchị njedebe',
  'End Time': 'Oge njedebe',
  Location: 'Ebe',
  Description: 'Nkọwa',
  'Event title': 'Aha mmemme',
  'Add location': 'Tinye ebe',
  'Add description': 'Tinye nkọwa',
  Delete: 'Hichapụ',
  Cancel: 'Kagbuo',
  'Saving...': 'Na-echekwa...',
  Save: 'Chekwaa',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Onye ahịa ọzọ gbanwere mmemme a. Họrọ ka a ga-esi dozie ya:',
  'Keep my changes': 'Debe mgbanwe m',
  'Use server version': 'Jiri ụdị dị na sava',

  // Calendar Dialog
  'New Calendar': 'Kalenda ọhụrụ',
  'Calendar Name': 'Aha kalenda',
  'Description (optional)': 'Nkọwa (nhọrọ)',
  Color: 'Agba',
  'Calendar description': 'Nkọwa kalenda',
  'My Calendar': 'Kalenda m',
  'Creating...': 'Na-emepụta...',
  Create: 'Mepụta',

  // Recurrence
  'Edit Recurring Event': 'Dezie mmemme na-emegharị',
  'This is a recurring event. What would you like to edit?':
    'Nke a bụ mmemme na-emegharị. Gịnị ka ị chọrọ idezi?',
  'This event only': 'Naanị mmemme a',
  'All events in series': "Mmemme niile dị n'usoro ahụ",
  'this occurrence': 'oge a',
  'entire series': 'usoro niile',
  Repeat: 'Megharịa',
  Every: 'Kwa',
  'day(s)': 'ụbọchị',
  'week(s)': 'izu',
  'month(s)': 'ọnwa',
  'year(s)': 'afọ',
  Mon: 'Mọn',
  Tue: 'Tiu',
  Wed: 'Wen',
  Thu: 'Tọọ',
  Fri: 'Fraị',
  Sat: 'Sat',
  Sun: 'Sọn',
  Ends: 'Na-akwụsị',
  Never: 'Ọ dịghị mgbe',
  After: 'Mgbe',
  occurrences: 'ugboro',
  On: "N'ụbọchị",
  'Delete this event': 'Hichapụ mmemme a',
  'Export .ics': 'Bupụ .ics',
  'Download this occurrence as .ics': 'Budata oge a dị ka .ics',
  'Download as .ics': 'Budata dị ka .ics',

  // ICS Import
  'Import Calendar': 'Bubata kalenda',
  'Import calendar': 'Bubata kalenda',
  'ICS File': 'Faịlụ ICS',
  'Import mode': 'Ụdị mbubata',
  'Merge into existing calendar': 'Jikọta na kalenda dị adị',
  'Target calendar': 'Kalenda ebe a na-eziga',
  'Select calendar': 'Họrọ kalenda',
  'Enter calendar name': 'Tinye aha kalenda',
  Import: 'Bubata',
  Close: 'Mechie',
  'Reading file...': 'Na-agụ faịlụ...',
  'Parsing events...': 'Na-enyocha mmemme...',
  'Analyzing for duplicates...': 'Na-achọ nke abụọ...',
  'Importing events...': 'Na-ebubata mmemme...',
  Created: 'Emepụtara',
  Updated: 'Emelitere',
  Skipped: 'Agafere',
  Failed: 'Dara',
  'Imported %{count} events into "%{name}"': 'Ebubatala mmemme %{count} na "%{name}"',
  'Parse warnings': 'Ịdọ aka na ntị mgbe a na-agụ',
  'Show details': 'Gosi nkọwa zuru ezu',
  'Hide details': 'Zoo nkọwa zuru ezu',

  // Sharing
  'Share calendar: %{name}': 'Kekọrịta kalenda: %{name}',
  'Share with users': 'Kekọrịta ya na ndị ọrụ',
  'User ID or Email': 'ID onye ọrụ ma ọ bụ email',
  Read: 'Ịgụ',
  'Read & Write': 'Ịgụ na ide',
  Invite: 'Kpọọ òkù',
  'Read only': 'Naanị ịgụ',
  'Public links': 'Njikọ ọha na njikọ òkù',
  'Invite & Public links': 'Njikọ ọha na njikọ òkù',
  'Create link': 'Mepụta njikọ',
  'Create invite link': 'Mepụta njikọ òkù',
  'Read only link': 'Njikọ naanị ịgụ',
  'Read & Write link': 'Njikọ ịgụ na ide',
  'Web Invite Link': 'Njikọ òkù weebụ',
  'CalDAV Link': 'Njikọ CalDAV',
  'Copy Web Invite': 'Detuo òkù weebụ',
  'Copy CalDAV URL': 'Detuo URL CalDAV',
  'Copied!': 'Edetuola!',
  Copy: 'Detuo',
  'No public links created yet': 'Enwebeghị njikọ ọha emepụtara',
  'Revoke link': 'Kagbuo njikọ',
  'Shared via link': 'Ekekọrịtara site na njikọ',
  'Join Shared Calendar': 'Sonye na kalenda ekekọrịtara',
  'You have been invited to join the calendar "%{name}".':
    'A kpọrọ gị òkù isonye na kalenda "%{name}".',
  'Permission: %{perm}': 'Ikike: %{perm}',
  'Join Calendar': 'Sonye na kalenda',
  'You are already subscribed to this calendar.': 'Ị debanyelarị aha na kalenda a.',
  'Joined calendar successfully': 'Isonyela na kalenda',
  'Leave calendar': 'Hapụ kalenda',

  // Confirm Dialog
  Confirm: 'Kwado',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Hichapụ kalenda',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Ị ji n'aka na ị chọrọ ihichapụ '%{name}'? A ga-ehichapụ mmemme niile dị na kalenda a kpamkpam.",

  // Shared calendars
  Refresh: 'Mee ka ọ dị ọhụrụ',
  'Toggle sidebar': 'Gosi/zoo mmanya akụkụ',
  'Shared by:': 'Onye kekọrịtara:',
  'Shared Calendar': 'Kalenda ekekọrịtara',
  Accepted: 'Anabatara',
  Invited: 'A kpọrọ òkù',
  Left: 'Hapụrụ',
  'Remove share': 'Wepụ nkekọrịta',
  Leave: 'Hapụ',
  'Leave Calendar': 'Hapụ kalenda',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Ị ji n'aka na ị chọrọ ịhapụ '%{name}'? Ị gaghị enwe ike ịbanye na kalenda a ọzọ."
}

export default ig
