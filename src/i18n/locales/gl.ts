import type { Messages } from './en'

const gl: Messages = {
  // Navigation
  Today: 'Hoxe',
  Month: 'Mes',
  Week: 'Semana',
  Day: 'Día',

  // Sidebar
  Calendars: 'Calendarios',
  'Create new calendar': 'Crear calendario novo',
  'Loading calendars...': 'Cargando calendarios...',
  'No calendars found': 'Non se atopou ningún calendario',
  'Delete calendar': 'Eliminar calendario',
  'Share calendar': 'Compartir calendario',
  'Pending Invitations': 'Convites pendentes',
  'From:': 'De:',
  Accept: 'Aceptar',
  Decline: 'Rexeitar',

  // Event Dialog
  'Edit Event': 'Editar evento',
  'New Event': 'Novo evento',
  Title: 'Título',
  Calendar: 'Calendario',
  'All day event': 'Todo o día',
  'Start Date': 'Data de inicio',
  'Start Time': 'Hora de inicio',
  'End Date': 'Data de fin',
  'End Time': 'Hora de fin',
  Location: 'Localización',
  Description: 'Descrición',
  'Event title': 'Título do evento',
  'Add location': 'Engadir localización',
  'Add description': 'Engadir descrición',
  Delete: 'Eliminar',
  Cancel: 'Cancelar',
  'Saving...': 'Gardando...',
  Save: 'Gardar',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Outro cliente modificou este evento. Escolle como resolvelo:',
  'Keep my changes': 'Manter os meus cambios',
  'Use server version': 'Usar a versión do servidor',

  // Calendar Dialog
  'New Calendar': 'Novo calendario',
  'Calendar Name': 'Nome do calendario',
  'Description (optional)': 'Descrición (opcional)',
  Color: 'Cor',
  'Calendar description': 'Descrición do calendario',
  'My Calendar': 'O meu calendario',
  'Creating...': 'Creando...',
  Create: 'Crear',

  // Recurrence
  'Edit Recurring Event': 'Editar evento periódico',
  'This is a recurring event. What would you like to edit?':
    'Este é un evento periódico. Que queres editar?',
  'This event only': 'Só este evento',
  'All events in series': 'Todos os eventos da serie',
  'this occurrence': 'esta repetición',
  'entire series': 'toda a serie',
  Repeat: 'Repetir',
  Every: 'Cada',
  'day(s)': 'día(s)',
  'week(s)': 'semana(s)',
  'month(s)': 'mes(es)',
  'year(s)': 'ano(s)',
  Mon: 'lun',
  Tue: 'mar',
  Wed: 'mér',
  Thu: 'xov',
  Fri: 'ven',
  Sat: 'sáb',
  Sun: 'dom',
  Ends: 'Remata',
  Never: 'Nunca',
  After: 'Despois de',
  occurrences: 'repeticións',
  On: 'O',
  'Delete this event': 'Eliminar este evento',
  'Export .ics': 'Exportar .ics',
  'Download this occurrence as .ics': 'Descargar esta repetición como .ics',
  'Download as .ics': 'Descargar como .ics',

  // ICS Import
  'Import Calendar': 'Importar calendario',
  'Import calendar': 'Importar calendario',
  'ICS File': 'Ficheiro ICS',
  'Import mode': 'Modo de importación',
  'Merge into existing calendar': 'Combinar cun calendario existente',
  'Target calendar': 'Calendario de destino',
  'Select calendar': 'Seleccionar calendario',
  'Enter calendar name': 'Introduce o nome do calendario',
  Import: 'Importar',
  Close: 'Pechar',
  'Reading file...': 'Lendo o ficheiro...',
  'Parsing events...': 'Analizando eventos...',
  'Analyzing for duplicates...': 'Buscando duplicados...',
  'Importing events...': 'Importando eventos...',
  Created: 'Creados',
  Updated: 'Actualizados',
  Skipped: 'Omitidos',
  Failed: 'Fallidos',
  'Imported %{count} events into "%{name}"': 'Importáronse %{count} eventos en «%{name}»',
  'Parse warnings': 'Avisos de lectura',
  'Show details': 'Amosar detalles',
  'Hide details': 'Agochar detalles',

  // Sharing
  'Share calendar: %{name}': 'Compartir calendario: %{name}',
  'Share with users': 'Compartir con usuarios',
  'User ID or Email': 'ID de usuario ou correo electrónico',
  Read: 'Lectura',
  'Read & Write': 'Lectura e escritura',
  Invite: 'Convidar',
  'Read only': 'Só lectura',
  'Public links': 'Ligazóns públicas e de convite',
  'Invite & Public links': 'Ligazóns públicas e de convite',
  'Create link': 'Crear ligazón',
  'Create invite link': 'Crear ligazón de convite',
  'Read only link': 'Ligazón de só lectura',
  'Read & Write link': 'Ligazón de lectura e escritura',
  'Web Invite Link': 'Ligazón de convite web',
  'CalDAV Link': 'Ligazón CalDAV',
  'Copy Web Invite': 'Copiar convite web',
  'Copy CalDAV URL': 'Copiar URL de CalDAV',
  'Copied!': 'Copiado!',
  Copy: 'Copiar',
  'No public links created yet': 'Aínda non se creou ningunha ligazón pública',
  'Revoke link': 'Revogar ligazón',
  'Shared via link': 'Compartido mediante ligazón',
  'Join Shared Calendar': 'Unirse ao calendario compartido',
  'You have been invited to join the calendar "%{name}".':
    'Convidáronte a unirte ao calendario «%{name}».',
  'Permission: %{perm}': 'Permiso: %{perm}',
  'Join Calendar': 'Unirse ao calendario',
  'You are already subscribed to this calendar.': 'Xa estás subscrito a este calendario.',
  'Joined calendar successfully': 'Uníchete ao calendario',
  'Leave calendar': 'Saír do calendario',

  // Confirm Dialog
  Confirm: 'Confirmar',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Eliminar calendario',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Seguro que queres eliminar «%{name}»? Todos os eventos deste calendario eliminaranse definitivamente.',

  // Shared calendars
  Refresh: 'Actualizar',
  'Toggle sidebar': 'Amosar ou agochar a barra lateral',
  'Shared by:': 'Compartido por:',
  'Shared Calendar': 'Calendario compartido',
  Accepted: 'Aceptado',
  Invited: 'Convidado',
  Left: 'Saíu',
  'Remove share': 'Deixar de compartir',
  Leave: 'Saír',
  'Leave Calendar': 'Saír do calendario',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Seguro que queres saír de «%{name}»? Xa non terás acceso a este calendario.'
}

export default gl
