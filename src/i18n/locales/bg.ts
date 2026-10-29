import type { Messages } from './en'

const bg: Messages = {
  // Navigation
  Today: 'Днес',
  Month: 'Месец',
  Week: 'Седмица',
  Day: 'Ден',

  // Sidebar
  Calendars: 'Календари',
  'Create new calendar': 'Създай нов календар',
  'Loading calendars...': 'Зареждане на календарите...',
  'No calendars found': 'Няма намерени календари',
  'Delete calendar': 'Изтрий календара',
  'Share calendar': 'Сподели календара',
  'Pending Invitations': 'Чакащи покани',
  'From:': 'От:',
  Accept: 'Приеми',
  Decline: 'Откажи',

  // Event Dialog
  'Edit Event': 'Редактирай събитие',
  'New Event': 'Ново събитие',
  Title: 'Заглавие',
  Calendar: 'Календар',
  'All day event': 'Целодневно',
  'Start Date': 'Начална дата',
  'Start Time': 'Начален час',
  'End Date': 'Крайна дата',
  'End Time': 'Краен час',
  Location: 'Местоположение',
  Description: 'Описание',
  'Event title': 'Заглавие на събитието',
  'Add location': 'Добави местоположение',
  'Add description': 'Добави описание',
  Delete: 'Изтрий',
  Cancel: 'Отказ',
  'Saving...': 'Запазване...',
  Save: 'Запази',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Това събитие е променено от друг клиент. Изберете как да разрешите конфликта:',
  'Keep my changes': 'Запази моите промени',
  'Use server version': 'Използвай версията от сървъра',

  // Calendar Dialog
  'New Calendar': 'Нов календар',
  'Calendar Name': 'Име на календара',
  'Description (optional)': 'Описание (по избор)',
  Color: 'Цвят',
  'Calendar description': 'Описание на календара',
  'My Calendar': 'Моят календар',
  'Creating...': 'Създаване...',
  Create: 'Създай',

  // Recurrence
  'Edit Recurring Event': 'Редактирай повтарящо се събитие',
  'This is a recurring event. What would you like to edit?':
    'Това е повтарящо се събитие. Какво искате да редактирате?',
  'This event only': 'Само това събитие',
  'All events in series': 'Всички събития от поредицата',
  'this occurrence': 'това повторение',
  'entire series': 'цялата поредица',
  Repeat: 'Повтаряне',
  Every: 'На всеки',
  'day(s)': 'ден(а)',
  'week(s)': 'седмица/и',
  'month(s)': 'месец(а)',
  'year(s)': 'година/и',
  Mon: 'пн',
  Tue: 'вт',
  Wed: 'ср',
  Thu: 'чт',
  Fri: 'пт',
  Sat: 'сб',
  Sun: 'нд',
  Ends: 'Край',
  Never: 'Никога',
  After: 'След',
  occurrences: 'повторения',
  On: 'На',
  'Delete this event': 'Изтрий това събитие',
  'Export .ics': 'Експортирай .ics',
  'Download this occurrence as .ics': 'Изтегли това повторение като .ics',
  'Download as .ics': 'Изтегли като .ics',

  // ICS Import
  'Import Calendar': 'Импортирай календар',
  'Import calendar': 'Импортирай календар',
  'ICS File': 'ICS файл',
  'Import mode': 'Режим на импортиране',
  'Merge into existing calendar': 'Обедини със съществуващ календар',
  'Target calendar': 'Целеви календар',
  'Select calendar': 'Избери календар',
  'Enter calendar name': 'Въведете име на календара',
  Import: 'Импортирай',
  Close: 'Затвори',
  'Reading file...': 'Четене на файла...',
  'Parsing events...': 'Обработка на събитията...',
  'Analyzing for duplicates...': 'Търсене на дубликати...',
  'Importing events...': 'Импортиране на събитията...',
  Created: 'Създадени',
  Updated: 'Обновени',
  Skipped: 'Пропуснати',
  Failed: 'Неуспешни',
  'Imported %{count} events into "%{name}"': 'Импортирани събития в „%{name}“: %{count}',
  'Parse warnings': 'Предупреждения при четене',
  'Show details': 'Покажи подробности',
  'Hide details': 'Скрий подробности',

  // Sharing
  'Share calendar: %{name}': 'Сподели календар: %{name}',
  'Share with users': 'Сподели с потребители',
  'User ID or Email': 'Потребителски ID или имейл',
  Read: 'Четене',
  'Read & Write': 'Четене и писане',
  Invite: 'Покани',
  'Read only': 'Само за четене',
  'Public links': 'Публични връзки и покани',
  'Invite & Public links': 'Публични връзки и покани',
  'Create link': 'Създай връзка',
  'Create invite link': 'Създай връзка за покана',
  'Read only link': 'Връзка само за четене',
  'Read & Write link': 'Връзка за четене и писане',
  'Web Invite Link': 'Уеб връзка за покана',
  'CalDAV Link': 'CalDAV връзка',
  'Copy Web Invite': 'Копирай уеб поканата',
  'Copy CalDAV URL': 'Копирай CalDAV адреса',
  'Copied!': 'Копирано!',
  Copy: 'Копирай',
  'No public links created yet': 'Все още няма създадени публични връзки',
  'Revoke link': 'Отмени връзката',
  'Shared via link': 'Споделен чрез връзка',
  'Join Shared Calendar': 'Присъедини се към споделен календар',
  'You have been invited to join the calendar "%{name}".':
    'Поканени сте да се присъедините към календара „%{name}“.',
  'Permission: %{perm}': 'Права: %{perm}',
  'Join Calendar': 'Присъедини се към календара',
  'You are already subscribed to this calendar.': 'Вече сте абонирани за този календар.',
  'Joined calendar successfully': 'Присъединихте се към календара',
  'Leave calendar': 'Напусни календара',

  // Confirm Dialog
  Confirm: 'Потвърди',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Изтрий календара',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Наистина ли искате да изтриете „%{name}“? Всички събития в този календар ще бъдат изтрити окончателно.',

  // Shared calendars
  Refresh: 'Обнови',
  'Toggle sidebar': 'Покажи/скрий страничната лента',
  'Shared by:': 'Споделен от:',
  'Shared Calendar': 'Споделен календар',
  Accepted: 'Прието',
  Invited: 'Поканен',
  Left: 'Напуснал',
  'Remove share': 'Премахни споделянето',
  Leave: 'Напусни',
  'Leave Calendar': 'Напусни календара',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Наистина ли искате да напуснете „%{name}“? Вече няма да имате достъп до този календар.'
}

export default bg
