import type { Messages } from './en'

const tr: Messages = {
  // Navigation
  Today: 'Bugün',
  Month: 'Ay',
  Week: 'Hafta',
  Day: 'Gün',

  // Sidebar
  Calendars: 'Takvimler',
  'Create new calendar': 'Yeni takvim oluştur',
  'Loading calendars...': 'Takvimler yükleniyor...',
  'No calendars found': 'Takvim bulunamadı',
  'Delete calendar': 'Takvimi sil',
  'Share calendar': 'Takvimi paylaş',
  'Pending Invitations': 'Bekleyen davetler',
  'From:': 'Gönderen:',
  Accept: 'Kabul et',
  Decline: 'Reddet',

  // Event Dialog
  'Edit Event': 'Etkinliği düzenle',
  'New Event': 'Yeni etkinlik',
  Title: 'Başlık',
  Calendar: 'Takvim',
  'All day event': 'Tüm gün',
  'Start Date': 'Başlangıç tarihi',
  'Start Time': 'Başlangıç saati',
  'End Date': 'Bitiş tarihi',
  'End Time': 'Bitiş saati',
  Location: 'Konum',
  Description: 'Açıklama',
  'Event title': 'Etkinlik başlığı',
  'Add location': 'Konum ekle',
  'Add description': 'Açıklama ekle',
  Delete: 'Sil',
  Cancel: 'İptal',
  'Saving...': 'Kaydediliyor...',
  Save: 'Kaydet',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Bu etkinlik başka bir istemci tarafından değiştirildi. Çakışmanın nasıl çözüleceğini seçin:',
  'Keep my changes': 'Değişikliklerimi koru',
  'Use server version': 'Sunucu sürümünü kullan',

  // Calendar Dialog
  'New Calendar': 'Yeni takvim',
  'Calendar Name': 'Takvim adı',
  'Description (optional)': 'Açıklama (isteğe bağlı)',
  Color: 'Renk',
  'Calendar description': 'Takvim açıklaması',
  'My Calendar': 'Takvimim',
  'Creating...': 'Oluşturuluyor...',
  Create: 'Oluştur',

  // Recurrence
  'Edit Recurring Event': 'Yinelenen etkinliği düzenle',
  'This is a recurring event. What would you like to edit?':
    'Bu yinelenen bir etkinlik. Neyi düzenlemek istiyorsunuz?',
  'This event only': 'Yalnızca bu etkinlik',
  'All events in series': 'Serideki tüm etkinlikler',
  'this occurrence': 'bu tekrar',
  'entire series': 'tüm seri',
  Repeat: 'Tekrarla',
  Every: 'Her',
  'day(s)': 'gün',
  'week(s)': 'hafta',
  'month(s)': 'ay',
  'year(s)': 'yıl',
  Mon: 'Pzt',
  Tue: 'Sal',
  Wed: 'Çar',
  Thu: 'Per',
  Fri: 'Cum',
  Sat: 'Cmt',
  Sun: 'Paz',
  Ends: 'Bitiş',
  Never: 'Hiçbir zaman',
  After: 'Şu kadar sonra:',
  occurrences: 'tekrar',
  On: 'Tarih',
  'Delete this event': 'Bu etkinliği sil',
  'Export .ics': '.ics olarak dışa aktar',
  'Download this occurrence as .ics': 'Bu tekrarı .ics olarak indir',
  'Download as .ics': '.ics olarak indir',

  // ICS Import
  'Import Calendar': 'Takvimi içe aktar',
  'Import calendar': 'Takvimi içe aktar',
  'ICS File': 'ICS dosyası',
  'Import mode': 'İçe aktarma modu',
  'Merge into existing calendar': 'Mevcut takvimle birleştir',
  'Target calendar': 'Hedef takvim',
  'Select calendar': 'Takvim seçin',
  'Enter calendar name': 'Takvim adını girin',
  Import: 'İçe aktar',
  Close: 'Kapat',
  'Reading file...': 'Dosya okunuyor...',
  'Parsing events...': 'Etkinlikler işleniyor...',
  'Analyzing for duplicates...': 'Yinelenen kayıtlar aranıyor...',
  'Importing events...': 'Etkinlikler içe aktarılıyor...',
  Created: 'Oluşturuldu',
  Updated: 'Güncellendi',
  Skipped: 'Atlandı',
  Failed: 'Başarısız',
  'Imported %{count} events into "%{name}"': '"%{name}" takvimine %{count} etkinlik aktarıldı',
  'Parse warnings': 'Okuma uyarıları',
  'Show details': 'Ayrıntıları göster',
  'Hide details': 'Ayrıntıları gizle',

  // Sharing
  'Share calendar: %{name}': 'Takvimi paylaş: %{name}',
  'Share with users': 'Kullanıcılarla paylaş',
  'User ID or Email': 'Kullanıcı kimliği veya e-posta',
  Read: 'Okuma',
  'Read & Write': 'Okuma ve yazma',
  Invite: 'Davet et',
  'Read only': 'Salt okunur',
  'Public links': 'Herkese açık ve davet bağlantıları',
  'Invite & Public links': 'Herkese açık ve davet bağlantıları',
  'Create link': 'Bağlantı oluştur',
  'Create invite link': 'Davet bağlantısı oluştur',
  'Read only link': 'Salt okunur bağlantı',
  'Read & Write link': 'Okuma ve yazma bağlantısı',
  'Web Invite Link': 'Web davet bağlantısı',
  'CalDAV Link': 'CalDAV bağlantısı',
  'Copy Web Invite': 'Web davetini kopyala',
  'Copy CalDAV URL': "CalDAV URL'sini kopyala",
  'Copied!': 'Kopyalandı!',
  Copy: 'Kopyala',
  'No public links created yet': 'Henüz herkese açık bağlantı oluşturulmadı',
  'Revoke link': 'Bağlantıyı iptal et',
  'Shared via link': 'Bağlantıyla paylaşıldı',
  'Join Shared Calendar': 'Paylaşılan takvime katıl',
  'You have been invited to join the calendar "%{name}".':
    '"%{name}" takvimine katılmaya davet edildiniz.',
  'Permission: %{perm}': 'İzin: %{perm}',
  'Join Calendar': 'Takvime katıl',
  'You are already subscribed to this calendar.': 'Bu takvime zaten abonesiniz.',
  'Joined calendar successfully': 'Takvime katıldınız',
  'Leave calendar': 'Takvimden ayrıl',

  // Confirm Dialog
  Confirm: 'Onayla',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Takvimi sil',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "'%{name}' takvimini silmek istediğinizden emin misiniz? Bu takvimdeki tüm etkinlikler kalıcı olarak silinecek.",

  // Shared calendars
  Refresh: 'Yenile',
  'Toggle sidebar': 'Kenar çubuğunu göster/gizle',
  'Shared by:': 'Paylaşan:',
  'Shared Calendar': 'Paylaşılan takvim',
  Accepted: 'Kabul edildi',
  Invited: 'Davet edildi',
  Left: 'Ayrıldı',
  'Remove share': 'Paylaşımı kaldır',
  Leave: 'Ayrıl',
  'Leave Calendar': 'Takvimden ayrıl',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "'%{name}' takviminden ayrılmak istediğinizden emin misiniz? Bu takvime artık erişiminiz olmayacak."
}

export default tr
