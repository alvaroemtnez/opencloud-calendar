import type { Messages } from './en'

const si: Messages = {
  // Navigation
  Today: 'අද',
  Month: 'මාසය',
  Week: 'සතිය',
  Day: 'දිනය',

  // Sidebar
  Calendars: 'දින දර්ශන',
  'Create new calendar': 'නව දින දර්ශනයක් සාදන්න',
  'Loading calendars...': 'දින දර්ශන පූරණය වෙමින්...',
  'No calendars found': 'දින දර්ශන හමු නොවීය',
  'Delete calendar': 'දින දර්ශනය මකන්න',
  'Share calendar': 'දින දර්ශනය බෙදාගන්න',
  'Pending Invitations': 'පොරොත්තු ආරාධනා',
  'From:': 'වෙතින්:',
  Accept: 'පිළිගන්න',
  Decline: 'ප්‍රතික්ෂේප කරන්න',

  // Event Dialog
  'Edit Event': 'සිදුවීම සංස්කරණය කරන්න',
  'New Event': 'නව සිදුවීම',
  Title: 'මාතෘකාව',
  Calendar: 'දින දර්ශනය',
  'All day event': 'දවස පුරා',
  'Start Date': 'ආරම්භක දිනය',
  'Start Time': 'ආරම්භක වේලාව',
  'End Date': 'අවසන් දිනය',
  'End Time': 'අවසන් වේලාව',
  Location: 'ස්ථානය',
  Description: 'විස්තරය',
  'Event title': 'සිදුවීමේ මාතෘකාව',
  'Add location': 'ස්ථානය එක් කරන්න',
  'Add description': 'විස්තරය එක් කරන්න',
  Delete: 'මකන්න',
  Cancel: 'අවලංගු කරන්න',
  'Saving...': 'සුරකිමින්...',
  Save: 'සුරකින්න',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'මෙම සිදුවීම වෙනත් සේවාලාභියෙකු විසින් වෙනස් කර ඇත. විසඳන ආකාරය තෝරන්න:',
  'Keep my changes': 'මගේ වෙනස්කම් තබාගන්න',
  'Use server version': 'සේවාදායකයේ අනුවාදය භාවිත කරන්න',

  // Calendar Dialog
  'New Calendar': 'නව දින දර්ශනය',
  'Calendar Name': 'දින දර්ශනයේ නම',
  'Description (optional)': 'විස්තරය (විකල්ප)',
  Color: 'වර්ණය',
  'Calendar description': 'දින දර්ශනයේ විස්තරය',
  'My Calendar': 'මගේ දින දර්ශනය',
  'Creating...': 'සාදමින්...',
  Create: 'සාදන්න',

  // Recurrence
  'Edit Recurring Event': 'පුනරාවර්තන සිදුවීම සංස්කරණය කරන්න',
  'This is a recurring event. What would you like to edit?':
    'මෙය පුනරාවර්තන සිදුවීමකි. ඔබට සංස්කරණය කිරීමට අවශ්‍ය කුමක්ද?',
  'This event only': 'මෙම සිදුවීම පමණක්',
  'All events in series': 'මාලාවේ සියලු සිදුවීම්',
  'this occurrence': 'මෙම වාරය',
  'entire series': 'සම්පූර්ණ මාලාව',
  Repeat: 'පුනරාවර්තනය',
  Every: 'සෑම',
  'day(s)': 'දින',
  'week(s)': 'සති',
  'month(s)': 'මාස',
  'year(s)': 'වසර',
  Mon: 'සඳු',
  Tue: 'අඟ',
  Wed: 'බදා',
  Thu: 'බ්‍රහ',
  Fri: 'සිකු',
  Sat: 'සෙන',
  Sun: 'ඉරි',
  Ends: 'අවසන් වේ',
  Never: 'කිසිදා නැත',
  After: 'පසු',
  occurrences: 'වාර',
  On: 'දිනයේ',
  'Delete this event': 'මෙම සිදුවීම මකන්න',
  'Export .ics': '.ics ලෙස අපනයනය කරන්න',
  'Download this occurrence as .ics': 'මෙම වාරය .ics ලෙස බාගන්න',
  'Download as .ics': '.ics ලෙස බාගන්න',

  // ICS Import
  'Import Calendar': 'දින දර්ශනය ආයාත කරන්න',
  'Import calendar': 'දින දර්ශනය ආයාත කරන්න',
  'ICS File': 'ICS ගොනුව',
  'Import mode': 'ආයාත ක්‍රමය',
  'Merge into existing calendar': 'පවතින දින දර්ශනයට ඒකාබද්ධ කරන්න',
  'Target calendar': 'ඉලක්ක දින දර්ශනය',
  'Select calendar': 'දින දර්ශනය තෝරන්න',
  'Enter calendar name': 'දින දර්ශනයේ නම ඇතුළත් කරන්න',
  Import: 'ආයාත කරන්න',
  Close: 'වසන්න',
  'Reading file...': 'ගොනුව කියවමින්...',
  'Parsing events...': 'සිදුවීම් විශ්ලේෂණය කරමින්...',
  'Analyzing for duplicates...': 'අනුපිටපත් පරීක්ෂා කරමින්...',
  'Importing events...': 'සිදුවීම් ආයාත කරමින්...',
  Created: 'සාදන ලදී',
  Updated: 'යාවත්කාලීන කළා',
  Skipped: 'මඟ හැරියා',
  Failed: 'අසාර්ථකයි',
  'Imported %{count} events into "%{name}"': '"%{name}" වෙත සිදුවීම් %{count} ක් ආයාත කළා',
  'Parse warnings': 'කියවීමේ අනතුරු ඇඟවීම්',
  'Show details': 'විස්තර පෙන්වන්න',
  'Hide details': 'විස්තර සඟවන්න',

  // Sharing
  'Share calendar: %{name}': 'දින දර්ශනය බෙදාගන්න: %{name}',
  'Share with users': 'පරිශීලකයින් සමඟ බෙදාගන්න',
  'User ID or Email': 'පරිශීලක ID හෝ ඊමේල්',
  Read: 'කියවීම',
  'Read & Write': 'කියවීම සහ ලිවීම',
  Invite: 'ආරාධනා කරන්න',
  'Read only': 'කියවීමට පමණි',
  'Public links': 'පොදු සහ ආරාධනා සබැඳි',
  'Invite & Public links': 'පොදු සහ ආරාධනා සබැඳි',
  'Create link': 'සබැඳියක් සාදන්න',
  'Create invite link': 'ආරාධනා සබැඳියක් සාදන්න',
  'Read only link': 'කියවීමට පමණක් සබැඳිය',
  'Read & Write link': 'කියවීම සහ ලිවීම සබැඳිය',
  'Web Invite Link': 'වෙබ් ආරාධනා සබැඳිය',
  'CalDAV Link': 'CalDAV සබැඳිය',
  'Copy Web Invite': 'වෙබ් ආරාධනාව පිටපත් කරන්න',
  'Copy CalDAV URL': 'CalDAV URL පිටපත් කරන්න',
  'Copied!': 'පිටපත් කළා!',
  Copy: 'පිටපත් කරන්න',
  'No public links created yet': 'තවම පොදු සබැඳි සාදා නැත',
  'Revoke link': 'සබැඳිය අහෝසි කරන්න',
  'Shared via link': 'සබැඳියක් හරහා බෙදාගත්',
  'Join Shared Calendar': 'බෙදාගත් දින දර්ශනයට එක්වන්න',
  'You have been invited to join the calendar "%{name}".':
    '"%{name}" දින දර්ශනයට එක්වීමට ඔබට ආරාධනා කර ඇත.',
  'Permission: %{perm}': 'අවසරය: %{perm}',
  'Join Calendar': 'දින දර්ශනයට එක්වන්න',
  'You are already subscribed to this calendar.': 'ඔබ දැනටමත් මෙම දින දර්ශනයට දායක වී ඇත.',
  'Joined calendar successfully': 'දින දර්ශනයට සාර්ථකව එක්විය',
  'Leave calendar': 'දින දර්ශනයෙන් ඉවත් වන්න',

  // Confirm Dialog
  Confirm: 'තහවුරු කරන්න',

  // Delete Calendar Confirmation
  'Delete Calendar': 'දින දර්ශනය මකන්න',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "ඔබට '%{name}' මැකීමට අවශ්‍ය බව විශ්වාසද? මෙම දින දර්ශනයේ සියලු සිදුවීම් ස්ථිරවම මැකෙනු ඇත.",

  // Shared calendars
  Refresh: 'නැවුම් කරන්න',
  'Toggle sidebar': 'පැති තීරුව පෙන්වන්න/සඟවන්න',
  'Shared by:': 'බෙදාගත්තේ:',
  'Shared Calendar': 'බෙදාගත් දින දර්ශනය',
  Accepted: 'පිළිගත්තා',
  Invited: 'ආරාධිතයි',
  Left: 'ඉවත් විය',
  'Remove share': 'බෙදාගැනීම ඉවත් කරන්න',
  Leave: 'ඉවත් වන්න',
  'Leave Calendar': 'දින දර්ශනයෙන් ඉවත් වන්න',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "ඔබට '%{name}' වෙතින් ඉවත් වීමට අවශ්‍ය බව විශ්වාසද? ඔබට තවදුරටත් මෙම දින දර්ශනයට ප්‍රවේශය නොලැබේ."
}

export default si
