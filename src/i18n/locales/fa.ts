import type { Messages } from './en'

const fa: Messages = {
  // Navigation
  Today: 'امروز',
  Month: 'ماه',
  Week: 'هفته',
  Day: 'روز',

  // Sidebar
  Calendars: 'تقویم‌ها',
  'Create new calendar': 'ایجاد تقویم جدید',
  'Loading calendars...': 'در حال بارگذاری تقویم‌ها...',
  'No calendars found': 'تقویمی پیدا نشد',
  'Delete calendar': 'حذف تقویم',
  'Share calendar': 'اشتراک‌گذاری تقویم',
  'Pending Invitations': 'دعوت‌های در انتظار',
  'From:': 'از:',
  Accept: 'پذیرفتن',
  Decline: 'رد کردن',

  // Event Dialog
  'Edit Event': 'ویرایش رویداد',
  'New Event': 'رویداد جدید',
  Title: 'عنوان',
  Calendar: 'تقویم',
  'All day event': 'تمام روز',
  'Start Date': 'تاریخ شروع',
  'Start Time': 'زمان شروع',
  'End Date': 'تاریخ پایان',
  'End Time': 'زمان پایان',
  Location: 'مکان',
  Description: 'توضیحات',
  'Event title': 'عنوان رویداد',
  'Add location': 'افزودن مکان',
  'Add description': 'افزودن توضیحات',
  Delete: 'حذف',
  Cancel: 'لغو',
  'Saving...': 'در حال ذخیره...',
  Save: 'ذخیره',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'این رویداد توسط برنامهٔ دیگری تغییر کرده است. نحوهٔ حل تعارض را انتخاب کنید:',
  'Keep my changes': 'حفظ تغییرات من',
  'Use server version': 'استفاده از نسخهٔ سرور',

  // Calendar Dialog
  'New Calendar': 'تقویم جدید',
  'Calendar Name': 'نام تقویم',
  'Description (optional)': 'توضیحات (اختیاری)',
  Color: 'رنگ',
  'Calendar description': 'توضیحات تقویم',
  'My Calendar': 'تقویم من',
  'Creating...': 'در حال ایجاد...',
  Create: 'ایجاد',

  // Recurrence
  'Edit Recurring Event': 'ویرایش رویداد تکرارشونده',
  'This is a recurring event. What would you like to edit?':
    'این یک رویداد تکرارشونده است. چه چیزی را می‌خواهید ویرایش کنید؟',
  'This event only': 'فقط این رویداد',
  'All events in series': 'همهٔ رویدادهای این سری',
  'this occurrence': 'این تکرار',
  'entire series': 'کل سری',
  Repeat: 'تکرار',
  Every: 'هر',
  'day(s)': 'روز',
  'week(s)': 'هفته',
  'month(s)': 'ماه',
  'year(s)': 'سال',
  Mon: 'دوشنبه',
  Tue: 'سه‌شنبه',
  Wed: 'چهارشنبه',
  Thu: 'پنجشنبه',
  Fri: 'جمعه',
  Sat: 'شنبه',
  Sun: 'یکشنبه',
  Ends: 'پایان',
  Never: 'هرگز',
  After: 'پس از',
  occurrences: 'بار',
  On: 'در تاریخ',
  'Delete this event': 'حذف این رویداد',
  'Export .ics': 'خروجی .ics',
  'Download this occurrence as .ics': 'دانلود این تکرار به صورت .ics',
  'Download as .ics': 'دانلود به صورت .ics',

  // ICS Import
  'Import Calendar': 'وارد کردن تقویم',
  'Import calendar': 'وارد کردن تقویم',
  'ICS File': 'فایل ICS',
  'Import mode': 'حالت وارد کردن',
  'Merge into existing calendar': 'ادغام با تقویم موجود',
  'Target calendar': 'تقویم مقصد',
  'Select calendar': 'انتخاب تقویم',
  'Enter calendar name': 'نام تقویم را وارد کنید',
  Import: 'وارد کردن',
  Close: 'بستن',
  'Reading file...': 'در حال خواندن فایل...',
  'Parsing events...': 'در حال تحلیل رویدادها...',
  'Analyzing for duplicates...': 'در حال بررسی موارد تکراری...',
  'Importing events...': 'در حال وارد کردن رویدادها...',
  Created: 'ایجادشده',
  Updated: 'به‌روزشده',
  Skipped: 'ردشده',
  Failed: 'ناموفق',
  'Imported %{count} events into "%{name}"': '%{count} رویداد به «%{name}» وارد شد',
  'Parse warnings': 'هشدارهای خواندن',
  'Show details': 'نمایش جزئیات',
  'Hide details': 'پنهان کردن جزئیات',

  // Sharing
  'Share calendar: %{name}': 'اشتراک‌گذاری تقویم: %{name}',
  'Share with users': 'اشتراک‌گذاری با کاربران',
  'User ID or Email': 'شناسهٔ کاربر یا ایمیل',
  Read: 'خواندن',
  'Read & Write': 'خواندن و نوشتن',
  Invite: 'دعوت',
  'Read only': 'فقط خواندنی',
  'Public links': 'پیوندهای عمومی و دعوت',
  'Invite & Public links': 'پیوندهای عمومی و دعوت',
  'Create link': 'ایجاد پیوند',
  'Create invite link': 'ایجاد پیوند دعوت',
  'Read only link': 'پیوند فقط خواندنی',
  'Read & Write link': 'پیوند خواندن و نوشتن',
  'Web Invite Link': 'پیوند دعوت وب',
  'CalDAV Link': 'پیوند CalDAV',
  'Copy Web Invite': 'کپی دعوت وب',
  'Copy CalDAV URL': 'کپی نشانی CalDAV',
  'Copied!': 'کپی شد!',
  Copy: 'کپی',
  'No public links created yet': 'هنوز پیوند عمومی ایجاد نشده است',
  'Revoke link': 'لغو پیوند',
  'Shared via link': 'اشتراک‌گذاری‌شده با پیوند',
  'Join Shared Calendar': 'پیوستن به تقویم مشترک',
  'You have been invited to join the calendar "%{name}".':
    'شما به پیوستن به تقویم «%{name}» دعوت شده‌اید.',
  'Permission: %{perm}': 'مجوز: %{perm}',
  'Join Calendar': 'پیوستن به تقویم',
  'You are already subscribed to this calendar.': 'شما از قبل مشترک این تقویم هستید.',
  'Joined calendar successfully': 'با موفقیت به تقویم پیوستید',
  'Leave calendar': 'ترک تقویم',

  // Confirm Dialog
  Confirm: 'تأیید',

  // Delete Calendar Confirmation
  'Delete Calendar': 'حذف تقویم',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'آیا مطمئن هستید که می‌خواهید «%{name}» را حذف کنید؟ همهٔ رویدادهای این تقویم برای همیشه حذف می‌شوند.',

  // Shared calendars
  Refresh: 'تازه‌سازی',
  'Toggle sidebar': 'نمایش/پنهان کردن نوار کناری',
  'Shared by:': 'اشتراک‌گذاری‌شده توسط:',
  'Shared Calendar': 'تقویم مشترک',
  Accepted: 'پذیرفته‌شده',
  Invited: 'دعوت‌شده',
  Left: 'ترک کرده',
  'Remove share': 'حذف اشتراک‌گذاری',
  Leave: 'ترک',
  'Leave Calendar': 'ترک تقویم',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    'آیا مطمئن هستید که می‌خواهید «%{name}» را ترک کنید؟ دیگر به این تقویم دسترسی نخواهید داشت.'
}

export default fa
