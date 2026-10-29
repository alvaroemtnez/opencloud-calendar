import type { Messages } from './en'

const de: Messages = {
  // Navigation
  Today: 'Heute',
  Month: 'Monat',
  Week: 'Woche',
  Day: 'Tag',

  // Sidebar
  Calendars: 'Kalender',
  'Create new calendar': 'Neuen Kalender erstellen',
  'Loading calendars...': 'Kalender werden geladen...',
  'No calendars found': 'Keine Kalender gefunden',
  'Delete calendar': 'Kalender löschen',
  'Share calendar': 'Kalender teilen',
  'Pending Invitations': 'Ausstehende Einladungen',
  'From:': 'Von:',
  Accept: 'Annehmen',
  Decline: 'Ablehnen',

  // Event Dialog
  'Edit Event': 'Termin bearbeiten',
  'New Event': 'Neuer Termin',
  Title: 'Titel',
  Calendar: 'Kalender',
  'All day event': 'Ganztägig',
  'Start Date': 'Startdatum',
  'Start Time': 'Startzeit',
  'End Date': 'Enddatum',
  'End Time': 'Endzeit',
  Location: 'Ort',
  Description: 'Beschreibung',
  'Event title': 'Terminname',
  'Add location': 'Ort hinzufügen',
  'Add description': 'Beschreibung hinzufügen',
  Delete: 'Löschen',
  Cancel: 'Abbrechen',
  'Saving...': 'Speichern...',
  Save: 'Speichern',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Dieser Termin wurde von einem anderen Client geändert. Wie möchten Sie fortfahren?',
  'Keep my changes': 'Meine Änderungen behalten',
  'Use server version': 'Server-Version verwenden',

  // Calendar Dialog
  'New Calendar': 'Neuer Kalender',
  'Calendar Name': 'Kalendername',
  'Description (optional)': 'Beschreibung (optional)',
  Color: 'Farbe',
  'Calendar description': 'Kalenderbeschreibung',
  'My Calendar': 'Mein Kalender',
  'Creating...': 'Erstellen...',
  Create: 'Erstellen',

  // Recurrence
  'Edit Recurring Event': 'Wiederkehrenden Termin bearbeiten',
  'This is a recurring event. What would you like to edit?':
    'Dies ist ein wiederkehrender Termin. Was möchten Sie bearbeiten?',
  'This event only': 'Nur diesen Termin',
  'All events in series': 'Alle Termine der Serie',
  'this occurrence': 'dieses Vorkommen',
  'entire series': 'gesamte Serie',
  Repeat: 'Wiederholen',
  Every: 'Alle',
  'day(s)': 'Tag(e)',
  'week(s)': 'Woche(n)',
  'month(s)': 'Monat(e)',
  'year(s)': 'Jahr(e)',
  Mon: 'Mo',
  Tue: 'Di',
  Wed: 'Mi',
  Thu: 'Do',
  Fri: 'Fr',
  Sat: 'Sa',
  Sun: 'So',
  Ends: 'Endet',
  Never: 'Nie',
  After: 'Nach',
  occurrences: 'Wiederholungen',
  On: 'Am',
  'Delete this event': 'Diesen Termin löschen',
  'Export .ics': 'Als .ics herunterladen',
  'Download this occurrence as .ics': 'Dieses Vorkommen als .ics herunterladen',
  'Download as .ics': 'Als .ics herunterladen',

  // ICS Import
  'Import Calendar': 'Kalender importieren',
  'Import calendar': 'Kalender importieren',
  'ICS File': 'ICS-Datei',
  'Import mode': 'Importmodus',
  'Merge into existing calendar': 'In bestehenden Kalender zusammenführen',
  'Target calendar': 'Zielkalender',
  'Select calendar': 'Kalender auswählen',
  'Enter calendar name': 'Kalendername eingeben',
  Import: 'Importieren',
  Close: 'Schließen',
  'Reading file...': 'Datei wird gelesen...',
  'Parsing events...': 'Termine werden analysiert...',
  'Analyzing for duplicates...': 'Duplikate werden geprüft...',
  'Importing events...': 'Termine werden importiert...',
  Created: 'Erstellt',
  Updated: 'Aktualisiert',
  Skipped: 'Übersprungen',
  Failed: 'Fehlgeschlagen',
  'Imported %{count} events into "%{name}"': '%{count} Termine in „%{name}" importiert',
  'Parse warnings': 'Hinweise beim Einlesen',
  'Show details': 'Details anzeigen',
  'Hide details': 'Details ausblenden',

  // Sharing
  'Share calendar: %{name}': 'Kalender teilen: %{name}',
  'Share with users': 'Mit Benutzern teilen',
  'User ID or Email': 'Benutzer ID oder E-Mail',
  Read: 'Lesen',
  'Read & Write': 'Lesen & Schreiben',
  Invite: 'Einladen',
  'Read only': 'Nur lesen',
  'Public links': 'Einladungs- & öffentliche Links',
  'Invite & Public links': 'Einladungs- & öffentliche Links',
  'Create link': 'Link erstellen',
  'Create invite link': 'Einladungslink erstellen',
  'Read only link': 'Schreibgeschützter Link',
  'Read & Write link': 'Schreib- und Lese-Link',
  'Web Invite Link': 'Web-Einladungslink',
  'CalDAV Link': 'CalDAV-Link',
  'Copy Web Invite': 'Web-Einladung kopieren',
  'Copy CalDAV URL': 'CalDAV-URL kopieren',
  'Copied!': 'Kopiert!',
  Copy: 'Kopieren',
  'No public links created yet': 'Noch keine Links erstellt',
  'Revoke link': 'Link widerrufen',
  'Shared via link': 'Über Link geteilt',
  'Join Shared Calendar': 'Geteiltem Kalender beitreten',
  'You have been invited to join the calendar "%{name}".':
    'Sie wurden eingeladen, dem Kalender „%{name}" beizutreten.',
  'Permission: %{perm}': 'Berechtigung: %{perm}',
  'Join Calendar': 'Kalender beitreten',
  'You are already subscribed to this calendar.': 'Sie haben diesen Kalender bereits abonniert.',
  'Joined calendar successfully': 'Kalender erfolgreich beigetreten',
  'Leave calendar': 'Kalender verlassen',

  // Confirm Dialog
  Confirm: 'Bestätigen',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Kalender löschen',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Möchten Sie '%{name}' wirklich löschen? Alle Termine in diesem Kalender werden unwiderruflich gelöscht.",

  // Shared calendars
  Refresh: 'Aktualisieren',
  'Toggle sidebar': 'Seitenleiste ein-/ausblenden',
  'Shared by:': 'Geteilt von:',
  'Shared Calendar': 'Geteilter Kalender',
  Accepted: 'Angenommen',
  Invited: 'Eingeladen',
  Left: 'Verlassen',
  'Remove share': 'Freigabe entfernen',
  Leave: 'Verlassen',
  'Leave Calendar': 'Kalender verlassen',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Möchten Sie '%{name}' wirklich verlassen? Sie haben danach keinen Zugriff mehr auf diesen Kalender."
}

export default de
