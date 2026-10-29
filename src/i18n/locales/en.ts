// The source strings: every other language translates these keys.
const en = {
  // Navigation
  Today: 'Today',
  Month: 'Month',
  Week: 'Week',
  Day: 'Day',

  // Sidebar
  Calendars: 'Calendars',
  'Create new calendar': 'Create new calendar',
  'Loading calendars...': 'Loading calendars...',
  'No calendars found': 'No calendars found',
  'Delete calendar': 'Delete calendar',
  'Share calendar': 'Share calendar',
  'Pending Invitations': 'Pending Invitations',
  'From:': 'From:',
  Accept: 'Accept',
  Decline: 'Decline',

  // Event Dialog
  'Edit Event': 'Edit Event',
  'New Event': 'New Event',
  Title: 'Title',
  Calendar: 'Calendar',
  'All day event': 'All day event',
  'Start Date': 'Start Date',
  'Start Time': 'Start Time',
  'End Date': 'End Date',
  'End Time': 'End Time',
  Location: 'Location',
  Description: 'Description',
  'Event title': 'Event title',
  'Add location': 'Add location',
  'Add description': 'Add description',
  Delete: 'Delete',
  Cancel: 'Cancel',
  'Saving...': 'Saving...',
  Save: 'Save',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'This event was modified by another client. Choose how to resolve:',
  'Keep my changes': 'Keep my changes',
  'Use server version': 'Use server version',

  // Calendar Dialog
  'New Calendar': 'New Calendar',
  'Calendar Name': 'Calendar Name',
  'Description (optional)': 'Description (optional)',
  Color: 'Color',
  'Calendar description': 'Calendar description',
  'My Calendar': 'My Calendar',
  'Creating...': 'Creating...',
  Create: 'Create',

  // Recurrence
  'Edit Recurring Event': 'Edit Recurring Event',
  'This is a recurring event. What would you like to edit?':
    'This is a recurring event. What would you like to edit?',
  'This event only': 'This event only',
  'All events in series': 'All events in series',
  'this occurrence': 'this occurrence',
  'entire series': 'entire series',
  Repeat: 'Repeat',
  Every: 'Every',
  'day(s)': 'day(s)',
  'week(s)': 'week(s)',
  'month(s)': 'month(s)',
  'year(s)': 'year(s)',
  Mon: 'Mon',
  Tue: 'Tue',
  Wed: 'Wed',
  Thu: 'Thu',
  Fri: 'Fri',
  Sat: 'Sat',
  Sun: 'Sun',
  Ends: 'Ends',
  Never: 'Never',
  After: 'After',
  occurrences: 'occurrences',
  On: 'On',
  'Delete this event': 'Delete this event',
  'Export .ics': 'Export .ics',
  'Download this occurrence as .ics': 'Download this occurrence as .ics',
  'Download as .ics': 'Download as .ics',

  // ICS Import
  'Import Calendar': 'Import Calendar',
  'Import calendar': 'Import calendar',
  'ICS File': 'ICS File',
  'Import mode': 'Import mode',
  'Merge into existing calendar': 'Merge into existing calendar',
  'Target calendar': 'Target calendar',
  'Select calendar': 'Select calendar',
  'Enter calendar name': 'Enter calendar name',
  Import: 'Import',
  Close: 'Close',
  'Reading file...': 'Reading file...',
  'Parsing events...': 'Parsing events...',
  'Analyzing for duplicates...': 'Analyzing for duplicates...',
  'Importing events...': 'Importing events...',
  Created: 'Created',
  Updated: 'Updated',
  Skipped: 'Skipped',
  Failed: 'Failed',
  'Imported %{count} events into "%{name}"': 'Imported %{count} events into "%{name}"',
  'Parse warnings': 'Parse warnings',
  'Show details': 'Show details',
  'Hide details': 'Hide details',

  // Sharing
  'Share calendar: %{name}': 'Share calendar: %{name}',
  'Share with users': 'Share with users',
  'User ID or Email': 'User ID or Email',
  Read: 'Read',
  'Read & Write': 'Read & Write',
  Invite: 'Invite',
  'Read only': 'Read only',
  'Public links': 'Public & Invite links',
  'Invite & Public links': 'Invite & Public links',
  'Create link': 'Create link',
  'Create invite link': 'Create invite link',
  'Read only link': 'Read only link',
  'Read & Write link': 'Read & Write link',
  'Web Invite Link': 'Web Invite Link',
  'CalDAV Link': 'CalDAV Link',
  'Copy Web Invite': 'Copy Web Invite',
  'Copy CalDAV URL': 'Copy CalDAV URL',
  'Copied!': 'Copied!',
  Copy: 'Copy',
  'No public links created yet': 'No public links created yet',
  'Revoke link': 'Revoke link',
  'Shared via link': 'Shared via link',
  'Join Shared Calendar': 'Join Shared Calendar',
  'You have been invited to join the calendar "%{name}".':
    'You have been invited to join the calendar "%{name}".',
  'Permission: %{perm}': 'Permission: %{perm}',
  'Join Calendar': 'Join Calendar',
  'You are already subscribed to this calendar.': 'You are already subscribed to this calendar.',
  'Joined calendar successfully': 'Joined calendar successfully',
  'Leave calendar': 'Leave calendar',

  // Confirm Dialog
  Confirm: 'Confirm',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Delete Calendar',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.",

  // Shared calendars
  Refresh: 'Refresh',
  'Toggle sidebar': 'Toggle sidebar',
  'Shared by:': 'Shared by:',
  'Shared Calendar': 'Shared Calendar',
  Accepted: 'Accepted',
  Invited: 'Invited',
  Left: 'Left',
  'Remove share': 'Remove share',
  Leave: 'Leave',
  'Leave Calendar': 'Leave Calendar',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar."
}

export type Messages = Record<keyof typeof en, string>

export default en
