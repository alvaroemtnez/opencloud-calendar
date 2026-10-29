import type { Messages } from './en'

const uk: Messages = {
  // Navigation
  Today: 'Сьогодні',
  Month: 'Місяць',
  Week: 'Тиждень',
  Day: 'День',

  // Sidebar
  Calendars: 'Календарі',
  'Create new calendar': 'Створити календар',
  'Loading calendars...': 'Завантаження календарів...',
  'No calendars found': 'Календарів не знайдено',
  'Delete calendar': 'Видалити календар',
  'Share calendar': 'Поділитися календарем',
  'Pending Invitations': 'Запрошення, що очікують',
  'From:': 'Від:',
  Accept: 'Прийняти',
  Decline: 'Відхилити',

  // Event Dialog
  'Edit Event': 'Редагувати подію',
  'New Event': 'Нова подія',
  Title: 'Назва',
  Calendar: 'Календар',
  'All day event': 'Увесь день',
  'Start Date': 'Дата початку',
  'Start Time': 'Час початку',
  'End Date': 'Дата завершення',
  'End Time': 'Час завершення',
  Location: 'Місце',
  Description: 'Опис',
  'Event title': 'Назва події',
  'Add location': 'Додати місце',
  'Add description': 'Додати опис',
  Delete: 'Видалити',
  Cancel: 'Скасувати',
  'Saving...': 'Збереження...',
  Save: 'Зберегти',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    "Цю подію змінив інший клієнт. Виберіть, як розв'язати конфлікт:",
  'Keep my changes': 'Залишити мої зміни',
  'Use server version': 'Використати версію з сервера',

  // Calendar Dialog
  'New Calendar': 'Новий календар',
  'Calendar Name': 'Назва календаря',
  'Description (optional)': "Опис (необов'язково)",
  Color: 'Колір',
  'Calendar description': 'Опис календаря',
  'My Calendar': 'Мій календар',
  'Creating...': 'Створення...',
  Create: 'Створити',

  // Recurrence
  'Edit Recurring Event': 'Редагувати повторювану подію',
  'This is a recurring event. What would you like to edit?':
    'Це повторювана подія. Що ви хочете змінити?',
  'This event only': 'Лише цю подію',
  'All events in series': 'Усі події серії',
  'this occurrence': 'це повторення',
  'entire series': 'уся серія',
  Repeat: 'Повторювати',
  Every: 'Кожні',
  'day(s)': 'дн.',
  'week(s)': 'тиж.',
  'month(s)': 'міс.',
  'year(s)': 'р.',
  Mon: 'пн',
  Tue: 'вт',
  Wed: 'ср',
  Thu: 'чт',
  Fri: 'пт',
  Sat: 'сб',
  Sun: 'нд',
  Ends: 'Завершення',
  Never: 'Ніколи',
  After: 'Після',
  occurrences: 'повторень',
  On: 'Дата',
  'Delete this event': 'Видалити цю подію',
  'Export .ics': 'Експорт у .ics',
  'Download this occurrence as .ics': 'Завантажити це повторення у форматі .ics',
  'Download as .ics': 'Завантажити у форматі .ics',

  // ICS Import
  'Import Calendar': 'Імпорт календаря',
  'Import calendar': 'Імпортувати календар',
  'ICS File': 'Файл ICS',
  'Import mode': 'Режим імпорту',
  'Merge into existing calendar': "Об'єднати з наявним календарем",
  'Target calendar': 'Цільовий календар',
  'Select calendar': 'Виберіть календар',
  'Enter calendar name': 'Введіть назву календаря',
  Import: 'Імпортувати',
  Close: 'Закрити',
  'Reading file...': 'Читання файлу...',
  'Parsing events...': 'Обробка подій...',
  'Analyzing for duplicates...': 'Пошук дублікатів...',
  'Importing events...': 'Імпорт подій...',
  Created: 'Створено',
  Updated: 'Оновлено',
  Skipped: 'Пропущено',
  Failed: 'Помилки',
  'Imported %{count} events into "%{name}"': 'Імпортовано подій у «%{name}»: %{count}',
  'Parse warnings': 'Попередження під час читання',
  'Show details': 'Показати подробиці',
  'Hide details': 'Приховати подробиці',

  // Sharing
  'Share calendar: %{name}': 'Поділитися календарем: %{name}',
  'Share with users': 'Поділитися з користувачами',
  'User ID or Email': 'ID користувача або ел. пошта',
  Read: 'Читання',
  'Read & Write': 'Читання і запис',
  Invite: 'Запросити',
  'Read only': 'Лише читання',
  'Public links': 'Публічні посилання та запрошення',
  'Invite & Public links': 'Публічні посилання та запрошення',
  'Create link': 'Створити посилання',
  'Create invite link': 'Створити посилання-запрошення',
  'Read only link': 'Посилання лише для читання',
  'Read & Write link': 'Посилання для читання і запису',
  'Web Invite Link': 'Веб-посилання для запрошення',
  'CalDAV Link': 'Посилання CalDAV',
  'Copy Web Invite': 'Копіювати веб-запрошення',
  'Copy CalDAV URL': 'Копіювати адресу CalDAV',
  'Copied!': 'Скопійовано!',
  Copy: 'Копіювати',
  'No public links created yet': 'Публічних посилань ще не створено',
  'Revoke link': 'Відкликати посилання',
  'Shared via link': 'Доступ за посиланням',
  'Join Shared Calendar': 'Приєднатися до спільного календаря',
  'You have been invited to join the calendar "%{name}".':
    'Вас запросили приєднатися до календаря «%{name}».',
  'Permission: %{perm}': 'Права: %{perm}',
  'Join Calendar': 'Приєднатися до календаря',
  'You are already subscribed to this calendar.': 'Ви вже підписані на цей календар.',
  'Joined calendar successfully': 'Ви приєдналися до календаря',
  'Leave calendar': 'Покинути календар',

  // Confirm Dialog
  Confirm: 'Підтвердити',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Видалити календар',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Ви справді хочете видалити «%{name}»? Усі події в цьому календарі буде видалено назавжди.',

  // Shared calendars
  Refresh: 'Оновити',
  'Toggle sidebar': 'Показати/приховати бічну панель',
  'Shared by:': 'Власник:',
  'Shared Calendar': 'Спільний календар',
  Accepted: 'Прийнято',
  Invited: 'Запрошено',
  Left: 'Покинув',
  'Remove share': 'Скасувати спільний доступ',
  Leave: 'Покинути',
  'Leave Calendar': 'Покинути календар',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Ви справді хочете покинути «%{name}»? Ви більше не матимете доступу до цього календаря.'
}

export default uk
