import type { Messages } from './en'

const id: Messages = {
  // Navigation
  Today: 'Hari ini',
  Month: 'Bulan',
  Week: 'Minggu',
  Day: 'Hari',

  // Sidebar
  Calendars: 'Kalender',
  'Create new calendar': 'Buat kalender baru',
  'Loading calendars...': 'Memuat kalender...',
  'No calendars found': 'Tidak ada kalender',
  'Delete calendar': 'Hapus kalender',
  'Share calendar': 'Bagikan kalender',
  'Pending Invitations': 'Undangan tertunda',
  'From:': 'Dari:',
  Accept: 'Terima',
  Decline: 'Tolak',

  // Event Dialog
  'Edit Event': 'Edit acara',
  'New Event': 'Acara baru',
  Title: 'Judul',
  Calendar: 'Kalender',
  'All day event': 'Sepanjang hari',
  'Start Date': 'Tanggal mulai',
  'Start Time': 'Waktu mulai',
  'End Date': 'Tanggal selesai',
  'End Time': 'Waktu selesai',
  Location: 'Lokasi',
  Description: 'Deskripsi',
  'Event title': 'Judul acara',
  'Add location': 'Tambahkan lokasi',
  'Add description': 'Tambahkan deskripsi',
  Delete: 'Hapus',
  Cancel: 'Batal',
  'Saving...': 'Menyimpan...',
  Save: 'Simpan',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Acara ini telah diubah oleh klien lain. Pilih cara menyelesaikannya:',
  'Keep my changes': 'Pertahankan perubahan saya',
  'Use server version': 'Gunakan versi server',

  // Calendar Dialog
  'New Calendar': 'Kalender baru',
  'Calendar Name': 'Nama kalender',
  'Description (optional)': 'Deskripsi (opsional)',
  Color: 'Warna',
  'Calendar description': 'Deskripsi kalender',
  'My Calendar': 'Kalender saya',
  'Creating...': 'Membuat...',
  Create: 'Buat',

  // Recurrence
  'Edit Recurring Event': 'Edit acara berulang',
  'This is a recurring event. What would you like to edit?':
    'Ini adalah acara berulang. Apa yang ingin Anda edit?',
  'This event only': 'Hanya acara ini',
  'All events in series': 'Semua acara dalam rangkaian',
  'this occurrence': 'kejadian ini',
  'entire series': 'seluruh rangkaian',
  Repeat: 'Ulangi',
  Every: 'Setiap',
  'day(s)': 'hari',
  'week(s)': 'minggu',
  'month(s)': 'bulan',
  'year(s)': 'tahun',
  Mon: 'Sen',
  Tue: 'Sel',
  Wed: 'Rab',
  Thu: 'Kam',
  Fri: 'Jum',
  Sat: 'Sab',
  Sun: 'Min',
  Ends: 'Berakhir',
  Never: 'Tidak pernah',
  After: 'Setelah',
  occurrences: 'kali',
  On: 'Pada',
  'Delete this event': 'Hapus acara ini',
  'Export .ics': 'Ekspor .ics',
  'Download this occurrence as .ics': 'Unduh kejadian ini sebagai .ics',
  'Download as .ics': 'Unduh sebagai .ics',

  // ICS Import
  'Import Calendar': 'Impor kalender',
  'Import calendar': 'Impor kalender',
  'ICS File': 'Berkas ICS',
  'Import mode': 'Mode impor',
  'Merge into existing calendar': 'Gabungkan ke kalender yang ada',
  'Target calendar': 'Kalender tujuan',
  'Select calendar': 'Pilih kalender',
  'Enter calendar name': 'Masukkan nama kalender',
  Import: 'Impor',
  Close: 'Tutup',
  'Reading file...': 'Membaca berkas...',
  'Parsing events...': 'Memproses acara...',
  'Analyzing for duplicates...': 'Memeriksa duplikat...',
  'Importing events...': 'Mengimpor acara...',
  Created: 'Dibuat',
  Updated: 'Diperbarui',
  Skipped: 'Dilewati',
  Failed: 'Gagal',
  'Imported %{count} events into "%{name}"': '%{count} acara diimpor ke "%{name}"',
  'Parse warnings': 'Peringatan saat membaca',
  'Show details': 'Tampilkan detail',
  'Hide details': 'Sembunyikan detail',

  // Sharing
  'Share calendar: %{name}': 'Bagikan kalender: %{name}',
  'Share with users': 'Bagikan dengan pengguna',
  'User ID or Email': 'ID pengguna atau email',
  Read: 'Baca',
  'Read & Write': 'Baca & tulis',
  Invite: 'Undang',
  'Read only': 'Hanya baca',
  'Public links': 'Tautan publik & undangan',
  'Invite & Public links': 'Tautan publik & undangan',
  'Create link': 'Buat tautan',
  'Create invite link': 'Buat tautan undangan',
  'Read only link': 'Tautan hanya baca',
  'Read & Write link': 'Tautan baca & tulis',
  'Web Invite Link': 'Tautan undangan web',
  'CalDAV Link': 'Tautan CalDAV',
  'Copy Web Invite': 'Salin undangan web',
  'Copy CalDAV URL': 'Salin URL CalDAV',
  'Copied!': 'Disalin!',
  Copy: 'Salin',
  'No public links created yet': 'Belum ada tautan publik',
  'Revoke link': 'Cabut tautan',
  'Shared via link': 'Dibagikan melalui tautan',
  'Join Shared Calendar': 'Gabung ke kalender bersama',
  'You have been invited to join the calendar "%{name}".':
    'Anda diundang untuk bergabung ke kalender "%{name}".',
  'Permission: %{perm}': 'Izin: %{perm}',
  'Join Calendar': 'Gabung ke kalender',
  'You are already subscribed to this calendar.': 'Anda sudah berlangganan kalender ini.',
  'Joined calendar successfully': 'Berhasil bergabung ke kalender',
  'Leave calendar': 'Keluar dari kalender',

  // Confirm Dialog
  Confirm: 'Konfirmasi',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Hapus kalender',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Yakin ingin menghapus '%{name}'? Semua acara di kalender ini akan dihapus secara permanen.",

  // Shared calendars
  Refresh: 'Muat ulang',
  'Toggle sidebar': 'Tampilkan/sembunyikan bilah sisi',
  'Shared by:': 'Dibagikan oleh:',
  'Shared Calendar': 'Kalender bersama',
  Accepted: 'Diterima',
  Invited: 'Diundang',
  Left: 'Keluar',
  'Remove share': 'Hapus berbagi',
  Leave: 'Keluar',
  'Leave Calendar': 'Keluar dari kalender',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Yakin ingin keluar dari '%{name}'? Anda tidak akan bisa mengakses kalender ini lagi."
}

export default id
