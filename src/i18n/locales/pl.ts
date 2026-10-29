import type { Messages } from './en'

const pl: Messages = {
  // Navigation
  Today: 'Dzisiaj',
  Month: 'Miesiąc',
  Week: 'Tydzień',
  Day: 'Dzień',

  // Sidebar
  Calendars: 'Kalendarze',
  'Create new calendar': 'Utwórz nowy kalendarz',
  'Loading calendars...': 'Wczytywanie kalendarzy...',
  'No calendars found': 'Nie znaleziono kalendarzy',
  'Delete calendar': 'Usuń kalendarz',
  'Share calendar': 'Udostępnij kalendarz',
  'Pending Invitations': 'Oczekujące zaproszenia',
  'From:': 'Od:',
  Accept: 'Akceptuj',
  Decline: 'Odrzuć',

  // Event Dialog
  'Edit Event': 'Edytuj wydarzenie',
  'New Event': 'Nowe wydarzenie',
  Title: 'Tytuł',
  Calendar: 'Kalendarz',
  'All day event': 'Cały dzień',
  'Start Date': 'Data rozpoczęcia',
  'Start Time': 'Godzina rozpoczęcia',
  'End Date': 'Data zakończenia',
  'End Time': 'Godzina zakończenia',
  Location: 'Miejsce',
  Description: 'Opis',
  'Event title': 'Tytuł wydarzenia',
  'Add location': 'Dodaj miejsce',
  'Add description': 'Dodaj opis',
  Delete: 'Usuń',
  Cancel: 'Anuluj',
  'Saving...': 'Zapisywanie...',
  Save: 'Zapisz',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'To wydarzenie zostało zmienione przez innego klienta. Wybierz sposób rozwiązania:',
  'Keep my changes': 'Zachowaj moje zmiany',
  'Use server version': 'Użyj wersji z serwera',

  // Calendar Dialog
  'New Calendar': 'Nowy kalendarz',
  'Calendar Name': 'Nazwa kalendarza',
  'Description (optional)': 'Opis (opcjonalnie)',
  Color: 'Kolor',
  'Calendar description': 'Opis kalendarza',
  'My Calendar': 'Mój kalendarz',
  'Creating...': 'Tworzenie...',
  Create: 'Utwórz',

  // Recurrence
  'Edit Recurring Event': 'Edytuj wydarzenie cykliczne',
  'This is a recurring event. What would you like to edit?':
    'To jest wydarzenie cykliczne. Co chcesz edytować?',
  'This event only': 'Tylko to wydarzenie',
  'All events in series': 'Wszystkie wydarzenia z serii',
  'this occurrence': 'to wystąpienie',
  'entire series': 'cała seria',
  Repeat: 'Powtarzaj',
  Every: 'Co',
  'day(s)': 'dzień/dni',
  'week(s)': 'tydzień/tygodnie',
  'month(s)': 'miesiąc/miesiące',
  'year(s)': 'rok/lata',
  Mon: 'pon.',
  Tue: 'wt.',
  Wed: 'śr.',
  Thu: 'czw.',
  Fri: 'pt.',
  Sat: 'sob.',
  Sun: 'niedz.',
  Ends: 'Kończy się',
  Never: 'Nigdy',
  After: 'Po',
  occurrences: 'wystąpieniach',
  On: 'Dnia',
  'Delete this event': 'Usuń to wydarzenie',
  'Export .ics': 'Eksportuj .ics',
  'Download this occurrence as .ics': 'Pobierz to wystąpienie jako .ics',
  'Download as .ics': 'Pobierz jako .ics',

  // ICS Import
  'Import Calendar': 'Importuj kalendarz',
  'Import calendar': 'Importuj kalendarz',
  'ICS File': 'Plik ICS',
  'Import mode': 'Tryb importu',
  'Merge into existing calendar': 'Scal z istniejącym kalendarzem',
  'Target calendar': 'Kalendarz docelowy',
  'Select calendar': 'Wybierz kalendarz',
  'Enter calendar name': 'Wpisz nazwę kalendarza',
  Import: 'Importuj',
  Close: 'Zamknij',
  'Reading file...': 'Wczytywanie pliku...',
  'Parsing events...': 'Przetwarzanie wydarzeń...',
  'Analyzing for duplicates...': 'Wyszukiwanie duplikatów...',
  'Importing events...': 'Importowanie wydarzeń...',
  Created: 'Utworzone',
  Updated: 'Zaktualizowane',
  Skipped: 'Pominięte',
  Failed: 'Nieudane',
  'Imported %{count} events into "%{name}"': 'Zaimportowano wydarzenia (%{count}) do „%{name}”',
  'Parse warnings': 'Ostrzeżenia odczytu',
  'Show details': 'Pokaż szczegóły',
  'Hide details': 'Ukryj szczegóły',

  // Sharing
  'Share calendar: %{name}': 'Udostępnij kalendarz: %{name}',
  'Share with users': 'Udostępnij użytkownikom',
  'User ID or Email': 'ID użytkownika lub e-mail',
  Read: 'Odczyt',
  'Read & Write': 'Odczyt i zapis',
  Invite: 'Zaproś',
  'Read only': 'Tylko do odczytu',
  'Public links': 'Linki publiczne i zaproszenia',
  'Invite & Public links': 'Linki publiczne i zaproszenia',
  'Create link': 'Utwórz link',
  'Create invite link': 'Utwórz link z zaproszeniem',
  'Read only link': 'Link tylko do odczytu',
  'Read & Write link': 'Link do odczytu i zapisu',
  'Web Invite Link': 'Link z zaproszeniem',
  'CalDAV Link': 'Link CalDAV',
  'Copy Web Invite': 'Kopiuj zaproszenie',
  'Copy CalDAV URL': 'Kopiuj adres CalDAV',
  'Copied!': 'Skopiowano!',
  Copy: 'Kopiuj',
  'No public links created yet': 'Nie utworzono jeszcze linków publicznych',
  'Revoke link': 'Unieważnij link',
  'Shared via link': 'Udostępniony przez link',
  'Join Shared Calendar': 'Dołącz do udostępnionego kalendarza',
  'You have been invited to join the calendar "%{name}".':
    'Zaproszono Cię do kalendarza „%{name}”.',
  'Permission: %{perm}': 'Uprawnienia: %{perm}',
  'Join Calendar': 'Dołącz do kalendarza',
  'You are already subscribed to this calendar.': 'Ten kalendarz jest już subskrybowany.',
  'Joined calendar successfully': 'Dołączono do kalendarza',
  'Leave calendar': 'Opuść kalendarz',

  // Confirm Dialog
  Confirm: 'Potwierdź',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Usuń kalendarz',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Czy na pewno chcesz usunąć „%{name}”? Wszystkie wydarzenia w tym kalendarzu zostaną trwale usunięte.',

  // Shared calendars
  Refresh: 'Odśwież',
  'Toggle sidebar': 'Pokaż/ukryj panel boczny',
  'Shared by:': 'Udostępnił(a):',
  'Shared Calendar': 'Kalendarz udostępniony',
  Accepted: 'Zaakceptowano',
  Invited: 'Zaproszono',
  Left: 'Opuścił(a)',
  'Remove share': 'Usuń udostępnienie',
  Leave: 'Opuść',
  'Leave Calendar': 'Opuść kalendarz',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'Czy na pewno chcesz opuścić „%{name}”? Stracisz dostęp do tego kalendarza.'
}

export default pl
