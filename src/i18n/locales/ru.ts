import type { Messages } from './en'

const ru: Messages = {
  // Navigation
  Today: 'Сегодня',
  Month: 'Месяц',
  Week: 'Неделя',
  Day: 'День',

  // Sidebar
  Calendars: 'Календари',
  'Create new calendar': 'Создать календарь',
  'Loading calendars...': 'Загрузка календарей...',
  'No calendars found': 'Календари не найдены',
  'Delete calendar': 'Удалить календарь',
  'Share calendar': 'Поделиться календарём',
  'Pending Invitations': 'Ожидающие приглашения',
  'From:': 'От:',
  Accept: 'Принять',
  Decline: 'Отклонить',

  // Event Dialog
  'Edit Event': 'Редактировать событие',
  'New Event': 'Новое событие',
  Title: 'Название',
  Calendar: 'Календарь',
  'All day event': 'Весь день',
  'Start Date': 'Дата начала',
  'Start Time': 'Время начала',
  'End Date': 'Дата окончания',
  'End Time': 'Время окончания',
  Location: 'Место',
  Description: 'Описание',
  'Event title': 'Название события',
  'Add location': 'Добавить место',
  'Add description': 'Добавить описание',
  Delete: 'Удалить',
  Cancel: 'Отмена',
  'Saving...': 'Сохранение...',
  Save: 'Сохранить',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Это событие было изменено другим клиентом. Выберите, как разрешить конфликт:',
  'Keep my changes': 'Сохранить мои изменения',
  'Use server version': 'Использовать версию с сервера',

  // Calendar Dialog
  'New Calendar': 'Новый календарь',
  'Calendar Name': 'Название календаря',
  'Description (optional)': 'Описание (необязательно)',
  Color: 'Цвет',
  'Calendar description': 'Описание календаря',
  'My Calendar': 'Мой календарь',
  'Creating...': 'Создание...',
  Create: 'Создать',

  // Recurrence
  'Edit Recurring Event': 'Редактировать повторяющееся событие',
  'This is a recurring event. What would you like to edit?':
    'Это повторяющееся событие. Что вы хотите изменить?',
  'This event only': 'Только это событие',
  'All events in series': 'Все события серии',
  'this occurrence': 'это повторение',
  'entire series': 'вся серия',
  Repeat: 'Повторять',
  Every: 'Каждые',
  'day(s)': 'дн.',
  'week(s)': 'нед.',
  'month(s)': 'мес.',
  'year(s)': 'г.',
  Mon: 'пн',
  Tue: 'вт',
  Wed: 'ср',
  Thu: 'чт',
  Fri: 'пт',
  Sat: 'сб',
  Sun: 'вс',
  Ends: 'Окончание',
  Never: 'Никогда',
  After: 'После',
  occurrences: 'повторений',
  On: 'Дата',
  'Delete this event': 'Удалить это событие',
  'Export .ics': 'Экспорт в .ics',
  'Download this occurrence as .ics': 'Скачать это повторение в формате .ics',
  'Download as .ics': 'Скачать в формате .ics',

  // ICS Import
  'Import Calendar': 'Импорт календаря',
  'Import calendar': 'Импортировать календарь',
  'ICS File': 'Файл ICS',
  'Import mode': 'Режим импорта',
  'Merge into existing calendar': 'Объединить с существующим календарём',
  'Target calendar': 'Целевой календарь',
  'Select calendar': 'Выберите календарь',
  'Enter calendar name': 'Введите название календаря',
  Import: 'Импортировать',
  Close: 'Закрыть',
  'Reading file...': 'Чтение файла...',
  'Parsing events...': 'Обработка событий...',
  'Analyzing for duplicates...': 'Поиск дубликатов...',
  'Importing events...': 'Импорт событий...',
  Created: 'Создано',
  Updated: 'Обновлено',
  Skipped: 'Пропущено',
  Failed: 'Ошибки',
  'Imported %{count} events into "%{name}"': 'Импортировано событий в «%{name}»: %{count}',
  'Parse warnings': 'Предупреждения при чтении',
  'Show details': 'Показать подробности',
  'Hide details': 'Скрыть подробности',

  // Sharing
  'Share calendar: %{name}': 'Поделиться календарём: %{name}',
  'Share with users': 'Поделиться с пользователями',
  'User ID or Email': 'ID пользователя или эл. почта',
  Read: 'Чтение',
  'Read & Write': 'Чтение и запись',
  Invite: 'Пригласить',
  'Read only': 'Только чтение',
  'Public links': 'Публичные ссылки и приглашения',
  'Invite & Public links': 'Публичные ссылки и приглашения',
  'Create link': 'Создать ссылку',
  'Create invite link': 'Создать ссылку-приглашение',
  'Read only link': 'Ссылка только для чтения',
  'Read & Write link': 'Ссылка для чтения и записи',
  'Web Invite Link': 'Веб-ссылка для приглашения',
  'CalDAV Link': 'Ссылка CalDAV',
  'Copy Web Invite': 'Копировать веб-приглашение',
  'Copy CalDAV URL': 'Копировать адрес CalDAV',
  'Copied!': 'Скопировано!',
  Copy: 'Копировать',
  'No public links created yet': 'Публичные ссылки ещё не созданы',
  'Revoke link': 'Отозвать ссылку',
  'Shared via link': 'Доступ по ссылке',
  'Join Shared Calendar': 'Присоединиться к общему календарю',
  'You have been invited to join the calendar "%{name}".':
    'Вас пригласили присоединиться к календарю «%{name}».',
  'Permission: %{perm}': 'Права: %{perm}',
  'Join Calendar': 'Присоединиться к календарю',
  'You are already subscribed to this calendar.': 'Вы уже подписаны на этот календарь.',
  'Joined calendar successfully': 'Вы присоединились к календарю',
  'Leave calendar': 'Покинуть календарь',

  // Confirm Dialog
  Confirm: 'Подтвердить',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Удалить календарь',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Вы действительно хотите удалить «%{name}»? Все события в этом календаре будут удалены безвозвратно.',

  // Shared calendars
  Refresh: 'Обновить',
  'Toggle sidebar': 'Показать/скрыть боковую панель',
  'Shared by:': 'Владелец:',
  'Shared Calendar': 'Общий календарь',
  Accepted: 'Принято',
  Invited: 'Приглашён',
  Left: 'Покинул',
  'Remove share': 'Отменить общий доступ',
  Leave: 'Покинуть',
  'Leave Calendar': 'Покинуть календарь',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Вы действительно хотите покинуть «%{name}»? У вас больше не будет доступа к этому календарю.'
}

export default ru
