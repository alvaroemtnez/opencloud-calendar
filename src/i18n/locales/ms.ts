import type { Messages } from './en'

const ms: Messages = {
  // Navigation
  Today: 'Hari ini',
  Month: 'Bulan',
  Week: 'Minggu',
  Day: 'Hari',

  // Sidebar
  Calendars: 'Kalendar',
  'Create new calendar': 'Cipta kalendar baharu',
  'Loading calendars...': 'Memuatkan kalendar...',
  'No calendars found': 'Tiada kalendar ditemui',
  'Delete calendar': 'Padam kalendar',
  'Share calendar': 'Kongsi kalendar',
  'Pending Invitations': 'Jemputan belum selesai',
  'From:': 'Daripada:',
  Accept: 'Terima',
  Decline: 'Tolak',

  // Event Dialog
  'Edit Event': 'Edit acara',
  'New Event': 'Acara baharu',
  Title: 'Tajuk',
  Calendar: 'Kalendar',
  'All day event': 'Sepanjang hari',
  'Start Date': 'Tarikh mula',
  'Start Time': 'Masa mula',
  'End Date': 'Tarikh tamat',
  'End Time': 'Masa tamat',
  Location: 'Lokasi',
  Description: 'Keterangan',
  'Event title': 'Tajuk acara',
  'Add location': 'Tambah lokasi',
  'Add description': 'Tambah keterangan',
  Delete: 'Padam',
  Cancel: 'Batal',
  'Saving...': 'Menyimpan...',
  Save: 'Simpan',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Acara ini telah diubah oleh klien lain. Pilih cara menyelesaikannya:',
  'Keep my changes': 'Kekalkan perubahan saya',
  'Use server version': 'Guna versi pelayan',

  // Calendar Dialog
  'New Calendar': 'Kalendar baharu',
  'Calendar Name': 'Nama kalendar',
  'Description (optional)': 'Keterangan (pilihan)',
  Color: 'Warna',
  'Calendar description': 'Keterangan kalendar',
  'My Calendar': 'Kalendar saya',
  'Creating...': 'Mencipta...',
  Create: 'Cipta',

  // Recurrence
  'Edit Recurring Event': 'Edit acara berulang',
  'This is a recurring event. What would you like to edit?':
    'Ini ialah acara berulang. Apakah yang ingin anda edit?',
  'This event only': 'Acara ini sahaja',
  'All events in series': 'Semua acara dalam siri',
  'this occurrence': 'kejadian ini',
  'entire series': 'seluruh siri',
  Repeat: 'Ulang',
  Every: 'Setiap',
  'day(s)': 'hari',
  'week(s)': 'minggu',
  'month(s)': 'bulan',
  'year(s)': 'tahun',
  Mon: 'Isn',
  Tue: 'Sel',
  Wed: 'Rab',
  Thu: 'Kha',
  Fri: 'Jum',
  Sat: 'Sab',
  Sun: 'Ahd',
  Ends: 'Berakhir',
  Never: 'Tidak pernah',
  After: 'Selepas',
  occurrences: 'kali',
  On: 'Pada',
  'Delete this event': 'Padam acara ini',
  'Export .ics': 'Eksport .ics',
  'Download this occurrence as .ics': 'Muat turun kejadian ini sebagai .ics',
  'Download as .ics': 'Muat turun sebagai .ics',

  // ICS Import
  'Import Calendar': 'Import kalendar',
  'Import calendar': 'Import kalendar',
  'ICS File': 'Fail ICS',
  'Import mode': 'Mod import',
  'Merge into existing calendar': 'Gabungkan ke dalam kalendar sedia ada',
  'Target calendar': 'Kalendar sasaran',
  'Select calendar': 'Pilih kalendar',
  'Enter calendar name': 'Masukkan nama kalendar',
  Import: 'Import',
  Close: 'Tutup',
  'Reading file...': 'Membaca fail...',
  'Parsing events...': 'Memproses acara...',
  'Analyzing for duplicates...': 'Menyemak pendua...',
  'Importing events...': 'Mengimport acara...',
  Created: 'Dicipta',
  Updated: 'Dikemas kini',
  Skipped: 'Dilangkau',
  Failed: 'Gagal',
  'Imported %{count} events into "%{name}"': '%{count} acara diimport ke dalam "%{name}"',
  'Parse warnings': 'Amaran semasa membaca',
  'Show details': 'Tunjukkan butiran',
  'Hide details': 'Sembunyikan butiran',

  // Sharing
  'Share calendar: %{name}': 'Kongsi kalendar: %{name}',
  'Share with users': 'Kongsi dengan pengguna',
  'User ID or Email': 'ID pengguna atau e-mel',
  Read: 'Baca',
  'Read & Write': 'Baca & tulis',
  Invite: 'Jemput',
  'Read only': 'Baca sahaja',
  'Public links': 'Pautan awam & jemputan',
  'Invite & Public links': 'Pautan awam & jemputan',
  'Create link': 'Cipta pautan',
  'Create invite link': 'Cipta pautan jemputan',
  'Read only link': 'Pautan baca sahaja',
  'Read & Write link': 'Pautan baca & tulis',
  'Web Invite Link': 'Pautan jemputan web',
  'CalDAV Link': 'Pautan CalDAV',
  'Copy Web Invite': 'Salin jemputan web',
  'Copy CalDAV URL': 'Salin URL CalDAV',
  'Copied!': 'Disalin!',
  Copy: 'Salin',
  'No public links created yet': 'Belum ada pautan awam',
  'Revoke link': 'Batalkan pautan',
  'Shared via link': 'Dikongsi melalui pautan',
  'Join Shared Calendar': 'Sertai kalendar kongsi',
  'You have been invited to join the calendar "%{name}".':
    'Anda dijemput untuk menyertai kalendar "%{name}".',
  'Permission: %{perm}': 'Kebenaran: %{perm}',
  'Join Calendar': 'Sertai kalendar',
  'You are already subscribed to this calendar.': 'Anda sudah melanggan kalendar ini.',
  'Joined calendar successfully': 'Berjaya menyertai kalendar',
  'Leave calendar': 'Tinggalkan kalendar',

  // Confirm Dialog
  Confirm: 'Sahkan',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Padam kalendar',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Adakah anda pasti mahu memadam '%{name}'? Semua acara dalam kalendar ini akan dipadam secara kekal.",

  // Shared calendars
  Refresh: 'Muat semula',
  'Toggle sidebar': 'Tunjukkan/sembunyikan bar sisi',
  'Shared by:': 'Dikongsi oleh:',
  'Shared Calendar': 'Kalendar kongsi',
  Accepted: 'Diterima',
  Invited: 'Dijemput',
  Left: 'Telah keluar',
  'Remove share': 'Buang perkongsian',
  Leave: 'Tinggalkan',
  'Leave Calendar': 'Tinggalkan kalendar',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Adakah anda pasti mahu meninggalkan '%{name}'? Anda tidak lagi boleh mengakses kalendar ini."
}

export default ms
