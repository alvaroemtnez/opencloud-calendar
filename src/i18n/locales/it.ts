import type { Messages } from './en'

const it: Messages = {
  // Navigation
  Today: 'Oggi',
  Month: 'Mese',
  Week: 'Settimana',
  Day: 'Giorno',

  // Sidebar
  Calendars: 'Calendari',
  'Create new calendar': 'Crea nuovo calendario',
  'Loading calendars...': 'Caricamento dei calendari...',
  'No calendars found': 'Nessun calendario trovato',
  'Delete calendar': 'Elimina calendario',
  'Share calendar': 'Condividi calendario',
  'Pending Invitations': 'Inviti in sospeso',
  'From:': 'Da:',
  Accept: 'Accetta',
  Decline: 'Rifiuta',

  // Event Dialog
  'Edit Event': 'Modifica evento',
  'New Event': 'Nuovo evento',
  Title: 'Titolo',
  Calendar: 'Calendario',
  'All day event': 'Tutto il giorno',
  'Start Date': 'Data di inizio',
  'Start Time': 'Ora di inizio',
  'End Date': 'Data di fine',
  'End Time': 'Ora di fine',
  Location: 'Luogo',
  Description: 'Descrizione',
  'Event title': "Titolo dell'evento",
  'Add location': 'Aggiungi luogo',
  'Add description': 'Aggiungi descrizione',
  Delete: 'Elimina',
  Cancel: 'Annulla',
  'Saving...': 'Salvataggio...',
  Save: 'Salva',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Questo evento è stato modificato da un altro client. Scegli come risolvere:',
  'Keep my changes': 'Mantieni le mie modifiche',
  'Use server version': 'Usa la versione del server',

  // Calendar Dialog
  'New Calendar': 'Nuovo calendario',
  'Calendar Name': 'Nome del calendario',
  'Description (optional)': 'Descrizione (facoltativa)',
  Color: 'Colore',
  'Calendar description': 'Descrizione del calendario',
  'My Calendar': 'Il mio calendario',
  'Creating...': 'Creazione...',
  Create: 'Crea',

  // Recurrence
  'Edit Recurring Event': 'Modifica evento ricorrente',
  'This is a recurring event. What would you like to edit?':
    'Questo è un evento ricorrente. Cosa vuoi modificare?',
  'This event only': 'Solo questo evento',
  'All events in series': 'Tutti gli eventi della serie',
  'this occurrence': 'questa occorrenza',
  'entire series': 'intera serie',
  Repeat: 'Ripeti',
  Every: 'Ogni',
  'day(s)': 'giorno/i',
  'week(s)': 'settimana/e',
  'month(s)': 'mese/i',
  'year(s)': 'anno/i',
  Mon: 'lun',
  Tue: 'mar',
  Wed: 'mer',
  Thu: 'gio',
  Fri: 'ven',
  Sat: 'sab',
  Sun: 'dom',
  Ends: 'Termina',
  Never: 'Mai',
  After: 'Dopo',
  occurrences: 'occorrenze',
  On: 'Il',
  'Delete this event': 'Elimina questo evento',
  'Export .ics': 'Esporta .ics',
  'Download this occurrence as .ics': 'Scarica questa occorrenza come .ics',
  'Download as .ics': 'Scarica come .ics',

  // ICS Import
  'Import Calendar': 'Importa calendario',
  'Import calendar': 'Importa calendario',
  'ICS File': 'File ICS',
  'Import mode': 'Modalità di importazione',
  'Merge into existing calendar': 'Unisci a un calendario esistente',
  'Target calendar': 'Calendario di destinazione',
  'Select calendar': 'Seleziona calendario',
  'Enter calendar name': 'Inserisci il nome del calendario',
  Import: 'Importa',
  Close: 'Chiudi',
  'Reading file...': 'Lettura del file...',
  'Parsing events...': 'Analisi degli eventi...',
  'Analyzing for duplicates...': 'Ricerca dei duplicati...',
  'Importing events...': 'Importazione degli eventi...',
  Created: 'Creati',
  Updated: 'Aggiornati',
  Skipped: 'Saltati',
  Failed: 'Non riusciti',
  'Imported %{count} events into "%{name}"': 'Importati %{count} eventi in "%{name}"',
  'Parse warnings': 'Avvisi di lettura',
  'Show details': 'Mostra dettagli',
  'Hide details': 'Nascondi dettagli',

  // Sharing
  'Share calendar: %{name}': 'Condividi calendario: %{name}',
  'Share with users': 'Condividi con utenti',
  'User ID or Email': 'ID utente o email',
  Read: 'Lettura',
  'Read & Write': 'Lettura e scrittura',
  Invite: 'Invita',
  'Read only': 'Sola lettura',
  'Public links': 'Link pubblici e di invito',
  'Invite & Public links': 'Link pubblici e di invito',
  'Create link': 'Crea link',
  'Create invite link': 'Crea link di invito',
  'Read only link': 'Link di sola lettura',
  'Read & Write link': 'Link di lettura e scrittura',
  'Web Invite Link': 'Link di invito web',
  'CalDAV Link': 'Link CalDAV',
  'Copy Web Invite': 'Copia invito web',
  'Copy CalDAV URL': 'Copia URL CalDAV',
  'Copied!': 'Copiato!',
  Copy: 'Copia',
  'No public links created yet': 'Nessun link pubblico ancora creato',
  'Revoke link': 'Revoca link',
  'Shared via link': 'Condiviso tramite link',
  'Join Shared Calendar': 'Unisciti al calendario condiviso',
  'You have been invited to join the calendar "%{name}".':
    'Sei stato invitato a unirti al calendario "%{name}".',
  'Permission: %{perm}': 'Permesso: %{perm}',
  'Join Calendar': 'Unisciti al calendario',
  'You are already subscribed to this calendar.': 'Sei già iscritto a questo calendario.',
  'Joined calendar successfully': 'Ti sei unito al calendario',
  'Leave calendar': 'Abbandona calendario',

  // Confirm Dialog
  Confirm: 'Conferma',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Elimina calendario',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Vuoi davvero eliminare "%{name}"? Tutti gli eventi di questo calendario verranno eliminati definitivamente.',

  // Shared calendars
  Refresh: 'Aggiorna',
  'Toggle sidebar': 'Mostra/nascondi barra laterale',
  'Shared by:': 'Condiviso da:',
  'Shared Calendar': 'Calendario condiviso',
  Accepted: 'Accettato',
  Invited: 'Invitato',
  Left: 'Uscito',
  'Remove share': 'Rimuovi condivisione',
  Leave: 'Abbandona',
  'Leave Calendar': 'Abbandona calendario',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Vuoi davvero abbandonare "%{name}"? Non avrai più accesso a questo calendario.'
}

export default it
