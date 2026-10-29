import type { Messages } from './en'

const el: Messages = {
  // Navigation
  Today: 'Σήμερα',
  Month: 'Μήνας',
  Week: 'Εβδομάδα',
  Day: 'Ημέρα',

  // Sidebar
  Calendars: 'Ημερολόγια',
  'Create new calendar': 'Δημιουργία νέου ημερολογίου',
  'Loading calendars...': 'Φόρτωση ημερολογίων...',
  'No calendars found': 'Δεν βρέθηκαν ημερολόγια',
  'Delete calendar': 'Διαγραφή ημερολογίου',
  'Share calendar': 'Κοινή χρήση ημερολογίου',
  'Pending Invitations': 'Εκκρεμείς προσκλήσεις',
  'From:': 'Από:',
  Accept: 'Αποδοχή',
  Decline: 'Απόρριψη',

  // Event Dialog
  'Edit Event': 'Επεξεργασία συμβάντος',
  'New Event': 'Νέο συμβάν',
  Title: 'Τίτλος',
  Calendar: 'Ημερολόγιο',
  'All day event': 'Ολοήμερο',
  'Start Date': 'Ημερομηνία έναρξης',
  'Start Time': 'Ώρα έναρξης',
  'End Date': 'Ημερομηνία λήξης',
  'End Time': 'Ώρα λήξης',
  Location: 'Τοποθεσία',
  Description: 'Περιγραφή',
  'Event title': 'Τίτλος συμβάντος',
  'Add location': 'Προσθήκη τοποθεσίας',
  'Add description': 'Προσθήκη περιγραφής',
  Delete: 'Διαγραφή',
  Cancel: 'Ακύρωση',
  'Saving...': 'Αποθήκευση...',
  Save: 'Αποθήκευση',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Αυτό το συμβάν τροποποιήθηκε από άλλη εφαρμογή. Επιλέξτε πώς θα επιλυθεί η διένεξη:',
  'Keep my changes': 'Διατήρηση των αλλαγών μου',
  'Use server version': 'Χρήση της έκδοσης του διακομιστή',

  // Calendar Dialog
  'New Calendar': 'Νέο ημερολόγιο',
  'Calendar Name': 'Όνομα ημερολογίου',
  'Description (optional)': 'Περιγραφή (προαιρετικά)',
  Color: 'Χρώμα',
  'Calendar description': 'Περιγραφή ημερολογίου',
  'My Calendar': 'Το ημερολόγιό μου',
  'Creating...': 'Δημιουργία...',
  Create: 'Δημιουργία',

  // Recurrence
  'Edit Recurring Event': 'Επεξεργασία επαναλαμβανόμενου συμβάντος',
  'This is a recurring event. What would you like to edit?':
    'Αυτό είναι επαναλαμβανόμενο συμβάν. Τι θέλετε να επεξεργαστείτε;',
  'This event only': 'Μόνο αυτό το συμβάν',
  'All events in series': 'Όλα τα συμβάντα της σειράς',
  'this occurrence': 'αυτή η επανάληψη',
  'entire series': 'ολόκληρη η σειρά',
  Repeat: 'Επανάληψη',
  Every: 'Κάθε',
  'day(s)': 'ημέρα/ες',
  'week(s)': 'εβδομάδα/ες',
  'month(s)': 'μήνα/ες',
  'year(s)': 'έτος/η',
  Mon: 'Δευ',
  Tue: 'Τρί',
  Wed: 'Τετ',
  Thu: 'Πέμ',
  Fri: 'Παρ',
  Sat: 'Σάβ',
  Sun: 'Κυρ',
  Ends: 'Λήξη',
  Never: 'Ποτέ',
  After: 'Μετά από',
  occurrences: 'επαναλήψεις',
  On: 'Στις',
  'Delete this event': 'Διαγραφή αυτού του συμβάντος',
  'Export .ics': 'Εξαγωγή .ics',
  'Download this occurrence as .ics': 'Λήψη αυτής της επανάληψης ως .ics',
  'Download as .ics': 'Λήψη ως .ics',

  // ICS Import
  'Import Calendar': 'Εισαγωγή ημερολογίου',
  'Import calendar': 'Εισαγωγή ημερολογίου',
  'ICS File': 'Αρχείο ICS',
  'Import mode': 'Λειτουργία εισαγωγής',
  'Merge into existing calendar': 'Συγχώνευση σε υπάρχον ημερολόγιο',
  'Target calendar': 'Ημερολόγιο προορισμού',
  'Select calendar': 'Επιλογή ημερολογίου',
  'Enter calendar name': 'Εισαγάγετε όνομα ημερολογίου',
  Import: 'Εισαγωγή',
  Close: 'Κλείσιμο',
  'Reading file...': 'Ανάγνωση αρχείου...',
  'Parsing events...': 'Επεξεργασία συμβάντων...',
  'Analyzing for duplicates...': 'Αναζήτηση διπλότυπων...',
  'Importing events...': 'Εισαγωγή συμβάντων...',
  Created: 'Δημιουργήθηκαν',
  Updated: 'Ενημερώθηκαν',
  Skipped: 'Παραλείφθηκαν',
  Failed: 'Απέτυχαν',
  'Imported %{count} events into "%{name}"': 'Εισήχθησαν %{count} συμβάντα στο «%{name}»',
  'Parse warnings': 'Προειδοποιήσεις ανάγνωσης',
  'Show details': 'Εμφάνιση λεπτομερειών',
  'Hide details': 'Απόκρυψη λεπτομερειών',

  // Sharing
  'Share calendar: %{name}': 'Κοινή χρήση ημερολογίου: %{name}',
  'Share with users': 'Κοινή χρήση με χρήστες',
  'User ID or Email': 'ID χρήστη ή email',
  Read: 'Ανάγνωση',
  'Read & Write': 'Ανάγνωση και εγγραφή',
  Invite: 'Πρόσκληση',
  'Read only': 'Μόνο ανάγνωση',
  'Public links': 'Δημόσιοι σύνδεσμοι και σύνδεσμοι πρόσκλησης',
  'Invite & Public links': 'Δημόσιοι σύνδεσμοι και σύνδεσμοι πρόσκλησης',
  'Create link': 'Δημιουργία συνδέσμου',
  'Create invite link': 'Δημιουργία συνδέσμου πρόσκλησης',
  'Read only link': 'Σύνδεσμος μόνο για ανάγνωση',
  'Read & Write link': 'Σύνδεσμος ανάγνωσης και εγγραφής',
  'Web Invite Link': 'Σύνδεσμος πρόσκλησης web',
  'CalDAV Link': 'Σύνδεσμος CalDAV',
  'Copy Web Invite': 'Αντιγραφή πρόσκλησης web',
  'Copy CalDAV URL': 'Αντιγραφή URL CalDAV',
  'Copied!': 'Αντιγράφηκε!',
  Copy: 'Αντιγραφή',
  'No public links created yet': 'Δεν έχουν δημιουργηθεί ακόμη δημόσιοι σύνδεσμοι',
  'Revoke link': 'Ανάκληση συνδέσμου',
  'Shared via link': 'Κοινή χρήση μέσω συνδέσμου',
  'Join Shared Calendar': 'Συμμετοχή σε κοινόχρηστο ημερολόγιο',
  'You have been invited to join the calendar "%{name}".':
    'Έχετε προσκληθεί στο ημερολόγιο «%{name}».',
  'Permission: %{perm}': 'Δικαίωμα: %{perm}',
  'Join Calendar': 'Συμμετοχή στο ημερολόγιο',
  'You are already subscribed to this calendar.': 'Είστε ήδη συνδρομητής σε αυτό το ημερολόγιο.',
  'Joined calendar successfully': 'Προστεθήκατε στο ημερολόγιο',
  'Leave calendar': 'Αποχώρηση από το ημερολόγιο',

  // Confirm Dialog
  Confirm: 'Επιβεβαίωση',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Διαγραφή ημερολογίου',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Θέλετε σίγουρα να διαγράψετε το «%{name}»; Όλα τα συμβάντα αυτού του ημερολογίου θα διαγραφούν οριστικά.',

  // Shared calendars
  Refresh: 'Ανανέωση',
  'Toggle sidebar': 'Εμφάνιση/απόκρυψη πλευρικής στήλης',
  'Shared by:': 'Κοινή χρήση από:',
  'Shared Calendar': 'Κοινόχρηστο ημερολόγιο',
  Accepted: 'Αποδεκτή',
  Invited: 'Προσκεκλημένος',
  Left: 'Αποχώρησε',
  'Remove share': 'Κατάργηση κοινής χρήσης',
  Leave: 'Αποχώρηση',
  'Leave Calendar': 'Αποχώρηση από το ημερολόγιο',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Θέλετε σίγουρα να αποχωρήσετε από το «%{name}»; Δεν θα έχετε πλέον πρόσβαση σε αυτό το ημερολόγιο.'
}

export default el
