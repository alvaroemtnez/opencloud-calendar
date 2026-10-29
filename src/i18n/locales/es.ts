import type { Messages } from './en'

const es: Messages = {
  // Navigation
  Today: 'Hoy',
  Month: 'Mes',
  Week: 'Semana',
  Day: 'Día',

  // Sidebar
  Calendars: 'Calendarios',
  'Create new calendar': 'Crear calendario nuevo',
  'Loading calendars...': 'Cargando calendarios...',
  'No calendars found': 'No se han encontrado calendarios',
  'Delete calendar': 'Eliminar calendario',
  'Share calendar': 'Compartir calendario',
  'Pending Invitations': 'Invitaciones pendientes',
  'From:': 'De:',
  Accept: 'Aceptar',
  Decline: 'Rechazar',

  // Event Dialog
  'Edit Event': 'Editar evento',
  'New Event': 'Nuevo evento',
  Title: 'Título',
  Calendar: 'Calendario',
  'All day event': 'Todo el día',
  'Start Date': 'Fecha de inicio',
  'Start Time': 'Hora de inicio',
  'End Date': 'Fecha de fin',
  'End Time': 'Hora de fin',
  Location: 'Ubicación',
  Description: 'Descripción',
  'Event title': 'Título del evento',
  'Add location': 'Añadir ubicación',
  'Add description': 'Añadir descripción',
  Delete: 'Eliminar',
  Cancel: 'Cancelar',
  'Saving...': 'Guardando...',
  Save: 'Guardar',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Otro cliente ha modificado este evento. Elige cómo resolverlo:',
  'Keep my changes': 'Mantener mis cambios',
  'Use server version': 'Usar la versión del servidor',

  // Calendar Dialog
  'New Calendar': 'Nuevo calendario',
  'Calendar Name': 'Nombre del calendario',
  'Description (optional)': 'Descripción (opcional)',
  Color: 'Color',
  'Calendar description': 'Descripción del calendario',
  'My Calendar': 'Mi calendario',
  'Creating...': 'Creando...',
  Create: 'Crear',

  // Recurrence
  'Edit Recurring Event': 'Editar evento periódico',
  'This is a recurring event. What would you like to edit?':
    'Este es un evento periódico. ¿Qué quieres editar?',
  'This event only': 'Solo este evento',
  'All events in series': 'Todos los eventos de la serie',
  'this occurrence': 'esta repetición',
  'entire series': 'toda la serie',
  Repeat: 'Repetir',
  Every: 'Cada',
  'day(s)': 'día(s)',
  'week(s)': 'semana(s)',
  'month(s)': 'mes(es)',
  'year(s)': 'año(s)',
  Mon: 'lun',
  Tue: 'mar',
  Wed: 'mié',
  Thu: 'jue',
  Fri: 'vie',
  Sat: 'sáb',
  Sun: 'dom',
  Ends: 'Termina',
  Never: 'Nunca',
  After: 'Después de',
  occurrences: 'repeticiones',
  On: 'El',
  'Delete this event': 'Eliminar este evento',
  'Export .ics': 'Exportar .ics',
  'Download this occurrence as .ics': 'Descargar esta repetición como .ics',
  'Download as .ics': 'Descargar como .ics',

  // ICS Import
  'Import Calendar': 'Importar calendario',
  'Import calendar': 'Importar calendario',
  'ICS File': 'Archivo ICS',
  'Import mode': 'Modo de importación',
  'Merge into existing calendar': 'Combinar con un calendario existente',
  'Target calendar': 'Calendario de destino',
  'Select calendar': 'Seleccionar calendario',
  'Enter calendar name': 'Introduce el nombre del calendario',
  Import: 'Importar',
  Close: 'Cerrar',
  'Reading file...': 'Leyendo el archivo...',
  'Parsing events...': 'Analizando eventos...',
  'Analyzing for duplicates...': 'Buscando duplicados...',
  'Importing events...': 'Importando eventos...',
  Created: 'Creados',
  Updated: 'Actualizados',
  Skipped: 'Omitidos',
  Failed: 'Fallidos',
  'Imported %{count} events into "%{name}"': 'Se han importado %{count} eventos en «%{name}»',
  'Parse warnings': 'Avisos de lectura',
  'Show details': 'Mostrar detalles',
  'Hide details': 'Ocultar detalles',

  // Sharing
  'Share calendar: %{name}': 'Compartir calendario: %{name}',
  'Share with users': 'Compartir con usuarios',
  'User ID or Email': 'ID de usuario o correo electrónico',
  Read: 'Lectura',
  'Read & Write': 'Lectura y escritura',
  Invite: 'Invitar',
  'Read only': 'Solo lectura',
  'Public links': 'Enlaces públicos y de invitación',
  'Invite & Public links': 'Enlaces públicos y de invitación',
  'Create link': 'Crear enlace',
  'Create invite link': 'Crear enlace de invitación',
  'Read only link': 'Enlace de solo lectura',
  'Read & Write link': 'Enlace de lectura y escritura',
  'Web Invite Link': 'Enlace de invitación web',
  'CalDAV Link': 'Enlace CalDAV',
  'Copy Web Invite': 'Copiar invitación web',
  'Copy CalDAV URL': 'Copiar URL de CalDAV',
  'Copied!': '¡Copiado!',
  Copy: 'Copiar',
  'No public links created yet': 'Todavía no se ha creado ningún enlace público',
  'Revoke link': 'Revocar enlace',
  'Shared via link': 'Compartido mediante enlace',
  'Join Shared Calendar': 'Unirse al calendario compartido',
  'You have been invited to join the calendar "%{name}".':
    'Te han invitado a unirte al calendario «%{name}».',
  'Permission: %{perm}': 'Permiso: %{perm}',
  'Join Calendar': 'Unirse al calendario',
  'You are already subscribed to this calendar.': 'Ya estás suscrito a este calendario.',
  'Joined calendar successfully': 'Te has unido al calendario',
  'Leave calendar': 'Salir del calendario',

  // Confirm Dialog
  Confirm: 'Confirmar',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Eliminar calendario',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    '¿Seguro que quieres eliminar «%{name}»? Todos los eventos de este calendario se eliminarán definitivamente.',

  // Shared calendars
  Refresh: 'Actualizar',
  'Toggle sidebar': 'Mostrar u ocultar la barra lateral',
  'Shared by:': 'Compartido por:',
  'Shared Calendar': 'Calendario compartido',
  Accepted: 'Aceptada',
  Invited: 'Invitado',
  Left: 'Ha salido',
  'Remove share': 'Dejar de compartir',
  Leave: 'Salir',
  'Leave Calendar': 'Salir del calendario',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    '¿Seguro que quieres salir de «%{name}»? Ya no tendrás acceso a este calendario.'
}

export default es
