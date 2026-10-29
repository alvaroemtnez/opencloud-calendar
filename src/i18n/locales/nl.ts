import type { Messages } from './en'

const nl: Messages = {
  // Navigation
  Today: 'Vandaag',
  Month: 'Maand',
  Week: 'Week',
  Day: 'Dag',

  // Sidebar
  Calendars: "Agenda's",
  'Create new calendar': 'Nieuwe agenda maken',
  'Loading calendars...': "Agenda's laden...",
  'No calendars found': "Geen agenda's gevonden",
  'Delete calendar': 'Agenda verwijderen',
  'Share calendar': 'Agenda delen',
  'Pending Invitations': 'Openstaande uitnodigingen',
  'From:': 'Van:',
  Accept: 'Accepteren',
  Decline: 'Weigeren',

  // Event Dialog
  'Edit Event': 'Afspraak bewerken',
  'New Event': 'Nieuwe afspraak',
  Title: 'Titel',
  Calendar: 'Agenda',
  'All day event': 'Hele dag',
  'Start Date': 'Begindatum',
  'Start Time': 'Begintijd',
  'End Date': 'Einddatum',
  'End Time': 'Eindtijd',
  Location: 'Locatie',
  Description: 'Beschrijving',
  'Event title': 'Titel van de afspraak',
  'Add location': 'Locatie toevoegen',
  'Add description': 'Beschrijving toevoegen',
  Delete: 'Verwijderen',
  Cancel: 'Annuleren',
  'Saving...': 'Opslaan...',
  Save: 'Opslaan',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Deze afspraak is door een andere client gewijzigd. Kies hoe je dit wilt oplossen:',
  'Keep my changes': 'Mijn wijzigingen behouden',
  'Use server version': 'Serverversie gebruiken',

  // Calendar Dialog
  'New Calendar': 'Nieuwe agenda',
  'Calendar Name': 'Naam van de agenda',
  'Description (optional)': 'Beschrijving (optioneel)',
  Color: 'Kleur',
  'Calendar description': 'Beschrijving van de agenda',
  'My Calendar': 'Mijn agenda',
  'Creating...': 'Maken...',
  Create: 'Maken',

  // Recurrence
  'Edit Recurring Event': 'Terugkerende afspraak bewerken',
  'This is a recurring event. What would you like to edit?':
    'Dit is een terugkerende afspraak. Wat wil je bewerken?',
  'This event only': 'Alleen deze afspraak',
  'All events in series': 'Alle afspraken in de reeks',
  'this occurrence': 'deze keer',
  'entire series': 'hele reeks',
  Repeat: 'Herhalen',
  Every: 'Elke',
  'day(s)': 'dag(en)',
  'week(s)': 'we(e)k(en)',
  'month(s)': 'maand(en)',
  'year(s)': 'ja(a)r(en)',
  Mon: 'ma',
  Tue: 'di',
  Wed: 'wo',
  Thu: 'do',
  Fri: 'vr',
  Sat: 'za',
  Sun: 'zo',
  Ends: 'Eindigt',
  Never: 'Nooit',
  After: 'Na',
  occurrences: 'keer',
  On: 'Op',
  'Delete this event': 'Deze afspraak verwijderen',
  'Export .ics': 'Exporteren als .ics',
  'Download this occurrence as .ics': 'Deze keer downloaden als .ics',
  'Download as .ics': 'Downloaden als .ics',

  // ICS Import
  'Import Calendar': 'Agenda importeren',
  'Import calendar': 'Agenda importeren',
  'ICS File': 'ICS-bestand',
  'Import mode': 'Importmodus',
  'Merge into existing calendar': 'Samenvoegen met bestaande agenda',
  'Target calendar': 'Doelagenda',
  'Select calendar': 'Agenda selecteren',
  'Enter calendar name': 'Voer een agendanaam in',
  Import: 'Importeren',
  Close: 'Sluiten',
  'Reading file...': 'Bestand lezen...',
  'Parsing events...': 'Afspraken verwerken...',
  'Analyzing for duplicates...': 'Controleren op dubbele afspraken...',
  'Importing events...': 'Afspraken importeren...',
  Created: 'Aangemaakt',
  Updated: 'Bijgewerkt',
  Skipped: 'Overgeslagen',
  Failed: 'Mislukt',
  'Imported %{count} events into "%{name}"': '%{count} afspraken geïmporteerd in "%{name}"',
  'Parse warnings': 'Waarschuwingen bij inlezen',
  'Show details': 'Details tonen',
  'Hide details': 'Details verbergen',

  // Sharing
  'Share calendar: %{name}': 'Agenda delen: %{name}',
  'Share with users': 'Delen met gebruikers',
  'User ID or Email': 'Gebruikers-ID of e-mailadres',
  Read: 'Lezen',
  'Read & Write': 'Lezen en schrijven',
  Invite: 'Uitnodigen',
  'Read only': 'Alleen lezen',
  'Public links': 'Openbare en uitnodigingslinks',
  'Invite & Public links': 'Openbare en uitnodigingslinks',
  'Create link': 'Link maken',
  'Create invite link': 'Uitnodigingslink maken',
  'Read only link': 'Alleen-lezenlink',
  'Read & Write link': 'Lees- en schrijflink',
  'Web Invite Link': 'Webuitnodigingslink',
  'CalDAV Link': 'CalDAV-link',
  'Copy Web Invite': 'Webuitnodiging kopiëren',
  'Copy CalDAV URL': 'CalDAV-URL kopiëren',
  'Copied!': 'Gekopieerd!',
  Copy: 'Kopiëren',
  'No public links created yet': 'Nog geen openbare links gemaakt',
  'Revoke link': 'Link intrekken',
  'Shared via link': 'Gedeeld via link',
  'Join Shared Calendar': 'Gedeelde agenda toevoegen',
  'You have been invited to join the calendar "%{name}".':
    'Je bent uitgenodigd voor de agenda "%{name}".',
  'Permission: %{perm}': 'Rechten: %{perm}',
  'Join Calendar': 'Agenda toevoegen',
  'You are already subscribed to this calendar.': 'Je bent al geabonneerd op deze agenda.',
  'Joined calendar successfully': 'Agenda toegevoegd',
  'Leave calendar': 'Agenda verlaten',

  // Confirm Dialog
  Confirm: 'Bevestigen',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Agenda verwijderen',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Weet je zeker dat je '%{name}' wilt verwijderen? Alle afspraken in deze agenda worden definitief verwijderd.",

  // Shared calendars
  Refresh: 'Vernieuwen',
  'Toggle sidebar': 'Zijbalk tonen/verbergen',
  'Shared by:': 'Gedeeld door:',
  'Shared Calendar': 'Gedeelde agenda',
  Accepted: 'Geaccepteerd',
  Invited: 'Uitgenodigd',
  Left: 'Verlaten',
  'Remove share': 'Delen opheffen',
  Leave: 'Verlaten',
  'Leave Calendar': 'Agenda verlaten',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Weet je zeker dat je '%{name}' wilt verlaten? Je hebt dan geen toegang meer tot deze agenda."
}

export default nl
