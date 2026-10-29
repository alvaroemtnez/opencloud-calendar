import type { Messages } from './en'

const ca: Messages = {
  // Navigation
  Today: 'Avui',
  Month: 'Mes',
  Week: 'Setmana',
  Day: 'Dia',

  // Sidebar
  Calendars: 'Calendaris',
  'Create new calendar': 'Crea un calendari nou',
  'Loading calendars...': "S'estan carregant els calendaris...",
  'No calendars found': "No s'ha trobat cap calendari",
  'Delete calendar': 'Suprimeix el calendari',
  'Share calendar': 'Comparteix el calendari',
  'Pending Invitations': 'Invitacions pendents',
  'From:': 'De:',
  Accept: 'Accepta',
  Decline: 'Rebutja',

  // Event Dialog
  'Edit Event': "Edita l'esdeveniment",
  'New Event': 'Esdeveniment nou',
  Title: 'Títol',
  Calendar: 'Calendari',
  'All day event': 'Tot el dia',
  'Start Date': "Data d'inici",
  'Start Time': "Hora d'inici",
  'End Date': 'Data de finalització',
  'End Time': 'Hora de finalització',
  Location: 'Ubicació',
  Description: 'Descripció',
  'Event title': "Títol de l'esdeveniment",
  'Add location': 'Afegeix una ubicació',
  'Add description': 'Afegeix una descripció',
  Delete: 'Suprimeix',
  Cancel: 'Cancel·la',
  'Saving...': "S'està desant...",
  Save: 'Desa',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Un altre client ha modificat aquest esdeveniment. Tria com vols resoldre-ho:',
  'Keep my changes': 'Conserva els meus canvis',
  'Use server version': 'Fes servir la versió del servidor',

  // Calendar Dialog
  'New Calendar': 'Calendari nou',
  'Calendar Name': 'Nom del calendari',
  'Description (optional)': 'Descripció (opcional)',
  Color: 'Color',
  'Calendar description': 'Descripció del calendari',
  'My Calendar': 'El meu calendari',
  'Creating...': "S'està creant...",
  Create: 'Crea',

  // Recurrence
  'Edit Recurring Event': "Edita l'esdeveniment periòdic",
  'This is a recurring event. What would you like to edit?':
    'Aquest és un esdeveniment periòdic. Què vols editar?',
  'This event only': 'Només aquest esdeveniment',
  'All events in series': 'Tots els esdeveniments de la sèrie',
  'this occurrence': 'aquesta repetició',
  'entire series': 'tota la sèrie',
  Repeat: 'Repeteix',
  Every: 'Cada',
  'day(s)': 'dia/dies',
  'week(s)': 'setmana/es',
  'month(s)': 'mes/os',
  'year(s)': 'any/s',
  Mon: 'dl.',
  Tue: 'dt.',
  Wed: 'dc.',
  Thu: 'dj.',
  Fri: 'dv.',
  Sat: 'ds.',
  Sun: 'dg.',
  Ends: 'Acaba',
  Never: 'Mai',
  After: 'Després de',
  occurrences: 'repeticions',
  On: 'El',
  'Delete this event': 'Suprimeix aquest esdeveniment',
  'Export .ics': 'Exporta .ics',
  'Download this occurrence as .ics': 'Baixa aquesta repetició com a .ics',
  'Download as .ics': 'Baixa com a .ics',

  // ICS Import
  'Import Calendar': 'Importa un calendari',
  'Import calendar': 'Importa un calendari',
  'ICS File': 'Fitxer ICS',
  'Import mode': "Mode d'importació",
  'Merge into existing calendar': 'Combina amb un calendari existent',
  'Target calendar': 'Calendari de destinació',
  'Select calendar': 'Selecciona un calendari',
  'Enter calendar name': 'Introdueix el nom del calendari',
  Import: 'Importa',
  Close: 'Tanca',
  'Reading file...': "S'està llegint el fitxer...",
  'Parsing events...': "S'estan analitzant els esdeveniments...",
  'Analyzing for duplicates...': "S'estan cercant duplicats...",
  'Importing events...': "S'estan important els esdeveniments...",
  Created: 'Creats',
  Updated: 'Actualitzats',
  Skipped: 'Omesos',
  Failed: 'Fallits',
  'Imported %{count} events into "%{name}"': "S'han importat %{count} esdeveniments a «%{name}»",
  'Parse warnings': 'Avisos de lectura',
  'Show details': 'Mostra els detalls',
  'Hide details': 'Amaga els detalls',

  // Sharing
  'Share calendar: %{name}': 'Comparteix el calendari: %{name}',
  'Share with users': 'Comparteix amb usuaris',
  'User ID or Email': "ID d'usuari o correu electrònic",
  Read: 'Lectura',
  'Read & Write': 'Lectura i escriptura',
  Invite: 'Convida',
  'Read only': 'Només lectura',
  'Public links': "Enllaços públics i d'invitació",
  'Invite & Public links': "Enllaços públics i d'invitació",
  'Create link': 'Crea un enllaç',
  'Create invite link': "Crea un enllaç d'invitació",
  'Read only link': 'Enllaç de només lectura',
  'Read & Write link': 'Enllaç de lectura i escriptura',
  'Web Invite Link': "Enllaç d'invitació web",
  'CalDAV Link': 'Enllaç CalDAV',
  'Copy Web Invite': 'Copia la invitació web',
  'Copy CalDAV URL': "Copia l'URL de CalDAV",
  'Copied!': 'Copiat!',
  Copy: 'Copia',
  'No public links created yet': "Encara no s'ha creat cap enllaç públic",
  'Revoke link': "Revoca l'enllaç",
  'Shared via link': 'Compartit mitjançant un enllaç',
  'Join Shared Calendar': 'Uneix-te al calendari compartit',
  'You have been invited to join the calendar "%{name}".':
    "T'han convidat a unir-te al calendari «%{name}».",
  'Permission: %{perm}': 'Permís: %{perm}',
  'Join Calendar': 'Uneix-te al calendari',
  'You are already subscribed to this calendar.': 'Ja estàs subscrit a aquest calendari.',
  'Joined calendar successfully': "T'has unit al calendari",
  'Leave calendar': 'Surt del calendari',

  // Confirm Dialog
  Confirm: 'Confirma',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Suprimeix el calendari',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Segur que vols suprimir «%{name}»? Tots els esdeveniments d'aquest calendari se suprimiran definitivament.",

  // Shared calendars
  Refresh: 'Actualitza',
  'Toggle sidebar': 'Mostra o amaga la barra lateral',
  'Shared by:': 'Compartit per:',
  'Shared Calendar': 'Calendari compartit',
  Accepted: 'Acceptada',
  Invited: 'Convidat',
  Left: 'Ha sortit',
  'Remove share': 'Deixa de compartir',
  Leave: 'Surt',
  'Leave Calendar': 'Surt del calendari',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Segur que vols sortir de «%{name}»? Ja no tindràs accés a aquest calendari.'
}

export default ca
