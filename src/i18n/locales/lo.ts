import type { Messages } from './en'

const lo: Messages = {
  // Navigation
  Today: 'ມື້ນີ້',
  Month: 'ເດືອນ',
  Week: 'ອາທິດ',
  Day: 'ມື້',

  // Sidebar
  Calendars: 'ປະຕິທິນ',
  'Create new calendar': 'ສ້າງປະຕິທິນໃໝ່',
  'Loading calendars...': 'ກຳລັງໂຫຼດປະຕິທິນ...',
  'No calendars found': 'ບໍ່ພົບປະຕິທິນ',
  'Delete calendar': 'ລຶບປະຕິທິນ',
  'Share calendar': 'ແບ່ງປັນປະຕິທິນ',
  'Pending Invitations': 'ຄຳເຊີນທີ່ລໍຖ້າ',
  'From:': 'ຈາກ:',
  Accept: 'ຍອມຮັບ',
  Decline: 'ປະຕິເສດ',

  // Event Dialog
  'Edit Event': 'ແກ້ໄຂກິດຈະກຳ',
  'New Event': 'ກິດຈະກຳໃໝ່',
  Title: 'ຫົວຂໍ້',
  Calendar: 'ປະຕິທິນ',
  'All day event': 'ໝົດມື້',
  'Start Date': 'ວັນທີເລີ່ມ',
  'Start Time': 'ເວລາເລີ່ມ',
  'End Date': 'ວັນທີສິ້ນສຸດ',
  'End Time': 'ເວລາສິ້ນສຸດ',
  Location: 'ສະຖານທີ່',
  Description: 'ລາຍລະອຽດ',
  'Event title': 'ຫົວຂໍ້ກິດຈະກຳ',
  'Add location': 'ເພີ່ມສະຖານທີ່',
  'Add description': 'ເພີ່ມລາຍລະອຽດ',
  Delete: 'ລຶບ',
  Cancel: 'ຍົກເລີກ',
  'Saving...': 'ກຳລັງບັນທຶກ...',
  Save: 'ບັນທຶກ',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'ກິດຈະກຳນີ້ຖືກແກ້ໄຂໂດຍໂປຣແກຣມອື່ນ. ເລືອກວິທີແກ້ໄຂ:',
  'Keep my changes': 'ຮັກສາການປ່ຽນແປງຂອງຂ້ອຍ',
  'Use server version': 'ໃຊ້ສະບັບຂອງເຊີບເວີ',

  // Calendar Dialog
  'New Calendar': 'ປະຕິທິນໃໝ່',
  'Calendar Name': 'ຊື່ປະຕິທິນ',
  'Description (optional)': 'ລາຍລະອຽດ (ບໍ່ບັງຄັບ)',
  Color: 'ສີ',
  'Calendar description': 'ລາຍລະອຽດປະຕິທິນ',
  'My Calendar': 'ປະຕິທິນຂອງຂ້ອຍ',
  'Creating...': 'ກຳລັງສ້າງ...',
  Create: 'ສ້າງ',

  // Recurrence
  'Edit Recurring Event': 'ແກ້ໄຂກິດຈະກຳທີ່ເກີດຊ້ຳ',
  'This is a recurring event. What would you like to edit?':
    'ນີ້ແມ່ນກິດຈະກຳທີ່ເກີດຊ້ຳ. ທ່ານຕ້ອງການແກ້ໄຂຫຍັງ?',
  'This event only': 'ສະເພາະກິດຈະກຳນີ້',
  'All events in series': 'ທຸກກິດຈະກຳໃນຊຸດ',
  'this occurrence': 'ຄັ້ງນີ້',
  'entire series': 'ທັງຊຸດ',
  Repeat: 'ເຮັດຊ້ຳ',
  Every: 'ທຸກໆ',
  'day(s)': 'ມື້',
  'week(s)': 'ອາທິດ',
  'month(s)': 'ເດືອນ',
  'year(s)': 'ປີ',
  Mon: 'ຈ',
  Tue: 'ອ',
  Wed: 'ພ',
  Thu: 'ພຫ',
  Fri: 'ສຸ',
  Sat: 'ສ',
  Sun: 'ອາ',
  Ends: 'ສິ້ນສຸດ',
  Never: 'ບໍ່ມີກຳນົດ',
  After: 'ຫຼັງຈາກ',
  occurrences: 'ຄັ້ງ',
  On: 'ວັນທີ',
  'Delete this event': 'ລຶບກິດຈະກຳນີ້',
  'Export .ics': 'ສົ່ງອອກ .ics',
  'Download this occurrence as .ics': 'ດາວໂຫຼດຄັ້ງນີ້ເປັນ .ics',
  'Download as .ics': 'ດາວໂຫຼດເປັນ .ics',

  // ICS Import
  'Import Calendar': 'ນຳເຂົ້າປະຕິທິນ',
  'Import calendar': 'ນຳເຂົ້າປະຕິທິນ',
  'ICS File': 'ໄຟລ໌ ICS',
  'Import mode': 'ຮູບແບບການນຳເຂົ້າ',
  'Merge into existing calendar': 'ລວມເຂົ້າກັບປະຕິທິນທີ່ມີຢູ່',
  'Target calendar': 'ປະຕິທິນປາຍທາງ',
  'Select calendar': 'ເລືອກປະຕິທິນ',
  'Enter calendar name': 'ປ້ອນຊື່ປະຕິທິນ',
  Import: 'ນຳເຂົ້າ',
  Close: 'ປິດ',
  'Reading file...': 'ກຳລັງອ່ານໄຟລ໌...',
  'Parsing events...': 'ກຳລັງວິເຄາະກິດຈະກຳ...',
  'Analyzing for duplicates...': 'ກຳລັງກວດຫາລາຍການຊ້ຳ...',
  'Importing events...': 'ກຳລັງນຳເຂົ້າກິດຈະກຳ...',
  Created: 'ສ້າງແລ້ວ',
  Updated: 'ອັບເດດແລ້ວ',
  Skipped: 'ຂ້າມແລ້ວ',
  Failed: 'ລົ້ມເຫຼວ',
  'Imported %{count} events into "%{name}"': 'ນຳເຂົ້າ %{count} ກິດຈະກຳໄປທີ່ "%{name}" ແລ້ວ',
  'Parse warnings': 'ຄຳເຕືອນໃນການອ່ານ',
  'Show details': 'ສະແດງລາຍລະອຽດ',
  'Hide details': 'ເຊື່ອງລາຍລະອຽດ',

  // Sharing
  'Share calendar: %{name}': 'ແບ່ງປັນປະຕິທິນ: %{name}',
  'Share with users': 'ແບ່ງປັນກັບຜູ້ໃຊ້',
  'User ID or Email': 'ID ຜູ້ໃຊ້ ຫຼື ອີເມວ',
  Read: 'ອ່ານ',
  'Read & Write': 'ອ່ານ ແລະ ຂຽນ',
  Invite: 'ເຊີນ',
  'Read only': 'ອ່ານຢ່າງດຽວ',
  'Public links': 'ລິ້ງສາທາລະນະ ແລະ ລິ້ງເຊີນ',
  'Invite & Public links': 'ລິ້ງສາທາລະນະ ແລະ ລິ້ງເຊີນ',
  'Create link': 'ສ້າງລິ້ງ',
  'Create invite link': 'ສ້າງລິ້ງເຊີນ',
  'Read only link': 'ລິ້ງອ່ານຢ່າງດຽວ',
  'Read & Write link': 'ລິ້ງອ່ານ ແລະ ຂຽນ',
  'Web Invite Link': 'ລິ້ງເຊີນທາງເວັບ',
  'CalDAV Link': 'ລິ້ງ CalDAV',
  'Copy Web Invite': 'ສຳເນົາຄຳເຊີນທາງເວັບ',
  'Copy CalDAV URL': 'ສຳເນົາ URL CalDAV',
  'Copied!': 'ສຳເນົາແລ້ວ!',
  Copy: 'ສຳເນົາ',
  'No public links created yet': 'ຍັງບໍ່ມີລິ້ງສາທາລະນະ',
  'Revoke link': 'ຖອນລິ້ງ',
  'Shared via link': 'ແບ່ງປັນຜ່ານລິ້ງ',
  'Join Shared Calendar': 'ເຂົ້າຮ່ວມປະຕິທິນທີ່ແບ່ງປັນ',
  'You have been invited to join the calendar "%{name}".':
    'ທ່ານໄດ້ຮັບເຊີນໃຫ້ເຂົ້າຮ່ວມປະຕິທິນ "%{name}".',
  'Permission: %{perm}': 'ສິດ: %{perm}',
  'Join Calendar': 'ເຂົ້າຮ່ວມປະຕິທິນ',
  'You are already subscribed to this calendar.': 'ທ່ານໄດ້ຕິດຕາມປະຕິທິນນີ້ແລ້ວ.',
  'Joined calendar successfully': 'ເຂົ້າຮ່ວມປະຕິທິນສຳເລັດ',
  'Leave calendar': 'ອອກຈາກປະຕິທິນ',

  // Confirm Dialog
  Confirm: 'ຢືນຢັນ',

  // Delete Calendar Confirmation
  'Delete Calendar': 'ລຶບປະຕິທິນ',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບ '%{name}'? ທຸກກິດຈະກຳໃນປະຕິທິນນີ້ຈະຖືກລຶບຖາວອນ.",

  // Shared calendars
  Refresh: 'ໂຫຼດຄືນ',
  'Toggle sidebar': 'ສະແດງ/ເຊື່ອງແຖບຂ້າງ',
  'Shared by:': 'ແບ່ງປັນໂດຍ:',
  'Shared Calendar': 'ປະຕິທິນທີ່ແບ່ງປັນ',
  Accepted: 'ຍອມຮັບແລ້ວ',
  Invited: 'ເຊີນແລ້ວ',
  Left: 'ອອກແລ້ວ',
  'Remove share': 'ຍົກເລີກການແບ່ງປັນ',
  Leave: 'ອອກ',
  'Leave Calendar': 'ອອກຈາກປະຕິທິນ',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການອອກຈາກ '%{name}'? ທ່ານຈະບໍ່ສາມາດເຂົ້າເຖິງປະຕິທິນນີ້ອີກ."
}

export default lo
