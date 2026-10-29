import type { Messages } from './en'

const pt: Messages = {
  // Navigation
  Today: 'Hoje',
  Month: 'Mês',
  Week: 'Semana',
  Day: 'Dia',

  // Sidebar
  Calendars: 'Calendários',
  'Create new calendar': 'Criar novo calendário',
  'Loading calendars...': 'A carregar calendários...',
  'No calendars found': 'Nenhum calendário encontrado',
  'Delete calendar': 'Eliminar calendário',
  'Share calendar': 'Partilhar calendário',
  'Pending Invitations': 'Convites pendentes',
  'From:': 'De:',
  Accept: 'Aceitar',
  Decline: 'Recusar',

  // Event Dialog
  'Edit Event': 'Editar evento',
  'New Event': 'Novo evento',
  Title: 'Título',
  Calendar: 'Calendário',
  'All day event': 'Dia inteiro',
  'Start Date': 'Data de início',
  'Start Time': 'Hora de início',
  'End Date': 'Data de fim',
  'End Time': 'Hora de fim',
  Location: 'Local',
  Description: 'Descrição',
  'Event title': 'Título do evento',
  'Add location': 'Adicionar local',
  'Add description': 'Adicionar descrição',
  Delete: 'Eliminar',
  Cancel: 'Cancelar',
  'Saving...': 'A guardar...',
  Save: 'Guardar',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Este evento foi alterado por outro cliente. Escolha como resolver:',
  'Keep my changes': 'Manter as minhas alterações',
  'Use server version': 'Usar a versão do servidor',

  // Calendar Dialog
  'New Calendar': 'Novo calendário',
  'Calendar Name': 'Nome do calendário',
  'Description (optional)': 'Descrição (opcional)',
  Color: 'Cor',
  'Calendar description': 'Descrição do calendário',
  'My Calendar': 'O meu calendário',
  'Creating...': 'A criar...',
  Create: 'Criar',

  // Recurrence
  'Edit Recurring Event': 'Editar evento recorrente',
  'This is a recurring event. What would you like to edit?':
    'Este é um evento recorrente. O que pretende editar?',
  'This event only': 'Apenas este evento',
  'All events in series': 'Todos os eventos da série',
  'this occurrence': 'esta ocorrência',
  'entire series': 'toda a série',
  Repeat: 'Repetir',
  Every: 'A cada',
  'day(s)': 'dia(s)',
  'week(s)': 'semana(s)',
  'month(s)': 'mês(es)',
  'year(s)': 'ano(s)',
  Mon: 'seg',
  Tue: 'ter',
  Wed: 'qua',
  Thu: 'qui',
  Fri: 'sex',
  Sat: 'sáb',
  Sun: 'dom',
  Ends: 'Termina',
  Never: 'Nunca',
  After: 'Após',
  occurrences: 'ocorrências',
  On: 'Em',
  'Delete this event': 'Eliminar este evento',
  'Export .ics': 'Exportar .ics',
  'Download this occurrence as .ics': 'Transferir esta ocorrência como .ics',
  'Download as .ics': 'Transferir como .ics',

  // ICS Import
  'Import Calendar': 'Importar calendário',
  'Import calendar': 'Importar calendário',
  'ICS File': 'Ficheiro ICS',
  'Import mode': 'Modo de importação',
  'Merge into existing calendar': 'Juntar a um calendário existente',
  'Target calendar': 'Calendário de destino',
  'Select calendar': 'Selecionar calendário',
  'Enter calendar name': 'Introduza o nome do calendário',
  Import: 'Importar',
  Close: 'Fechar',
  'Reading file...': 'A ler o ficheiro...',
  'Parsing events...': 'A analisar eventos...',
  'Analyzing for duplicates...': 'A procurar duplicados...',
  'Importing events...': 'A importar eventos...',
  Created: 'Criados',
  Updated: 'Atualizados',
  Skipped: 'Ignorados',
  Failed: 'Falhados',
  'Imported %{count} events into "%{name}"': '%{count} eventos importados para "%{name}"',
  'Parse warnings': 'Avisos de leitura',
  'Show details': 'Mostrar detalhes',
  'Hide details': 'Ocultar detalhes',

  // Sharing
  'Share calendar: %{name}': 'Partilhar calendário: %{name}',
  'Share with users': 'Partilhar com utilizadores',
  'User ID or Email': 'ID de utilizador ou e-mail',
  Read: 'Leitura',
  'Read & Write': 'Leitura e escrita',
  Invite: 'Convidar',
  'Read only': 'Só de leitura',
  'Public links': 'Ligações públicas e de convite',
  'Invite & Public links': 'Ligações públicas e de convite',
  'Create link': 'Criar ligação',
  'Create invite link': 'Criar ligação de convite',
  'Read only link': 'Ligação só de leitura',
  'Read & Write link': 'Ligação de leitura e escrita',
  'Web Invite Link': 'Ligação de convite web',
  'CalDAV Link': 'Ligação CalDAV',
  'Copy Web Invite': 'Copiar convite web',
  'Copy CalDAV URL': 'Copiar URL CalDAV',
  'Copied!': 'Copiado!',
  Copy: 'Copiar',
  'No public links created yet': 'Ainda não foram criadas ligações públicas',
  'Revoke link': 'Revogar ligação',
  'Shared via link': 'Partilhado por ligação',
  'Join Shared Calendar': 'Aderir ao calendário partilhado',
  'You have been invited to join the calendar "%{name}".':
    'Foi convidado a aderir ao calendário "%{name}".',
  'Permission: %{perm}': 'Permissão: %{perm}',
  'Join Calendar': 'Aderir ao calendário',
  'You are already subscribed to this calendar.': 'Já está subscrito a este calendário.',
  'Joined calendar successfully': 'Aderiu ao calendário',
  'Leave calendar': 'Sair do calendário',

  // Confirm Dialog
  Confirm: 'Confirmar',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Eliminar calendário',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Tem a certeza de que pretende eliminar "%{name}"? Todos os eventos deste calendário serão eliminados permanentemente.',

  // Shared calendars
  Refresh: 'Atualizar',
  'Toggle sidebar': 'Mostrar/ocultar barra lateral',
  'Shared by:': 'Partilhado por:',
  'Shared Calendar': 'Calendário partilhado',
  Accepted: 'Aceite',
  Invited: 'Convidado',
  Left: 'Saiu',
  'Remove share': 'Remover partilha',
  Leave: 'Sair',
  'Leave Calendar': 'Sair do calendário',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Tem a certeza de que pretende sair de "%{name}"? Deixará de ter acesso a este calendário.'
}

export default pt
