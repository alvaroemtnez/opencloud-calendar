import type { Messages } from './en'

const ja: Messages = {
  // Navigation
  Today: '今日',
  Month: '月',
  Week: '週',
  Day: '日',

  // Sidebar
  Calendars: 'カレンダー',
  'Create new calendar': '新しいカレンダーを作成',
  'Loading calendars...': 'カレンダーを読み込んでいます...',
  'No calendars found': 'カレンダーが見つかりません',
  'Delete calendar': 'カレンダーを削除',
  'Share calendar': 'カレンダーを共有',
  'Pending Invitations': '保留中の招待',
  'From:': '差出人:',
  Accept: '承諾',
  Decline: '辞退',

  // Event Dialog
  'Edit Event': '予定を編集',
  'New Event': '新しい予定',
  Title: 'タイトル',
  Calendar: 'カレンダー',
  'All day event': '終日',
  'Start Date': '開始日',
  'Start Time': '開始時刻',
  'End Date': '終了日',
  'End Time': '終了時刻',
  Location: '場所',
  Description: '説明',
  'Event title': '予定のタイトル',
  'Add location': '場所を追加',
  'Add description': '説明を追加',
  Delete: '削除',
  Cancel: 'キャンセル',
  'Saving...': '保存しています...',
  Save: '保存',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'この予定は別のクライアントで変更されました。解決方法を選択してください:',
  'Keep my changes': '自分の変更を保持',
  'Use server version': 'サーバーの版を使用',

  // Calendar Dialog
  'New Calendar': '新しいカレンダー',
  'Calendar Name': 'カレンダー名',
  'Description (optional)': '説明（任意）',
  Color: '色',
  'Calendar description': 'カレンダーの説明',
  'My Calendar': 'マイカレンダー',
  'Creating...': '作成しています...',
  Create: '作成',

  // Recurrence
  'Edit Recurring Event': '繰り返しの予定を編集',
  'This is a recurring event. What would you like to edit?':
    'これは繰り返しの予定です。どれを編集しますか？',
  'This event only': 'この予定のみ',
  'All events in series': 'シリーズのすべての予定',
  'this occurrence': 'この回のみ',
  'entire series': 'シリーズ全体',
  Repeat: '繰り返し',
  Every: '間隔',
  'day(s)': '日ごと',
  'week(s)': '週ごと',
  'month(s)': 'か月ごと',
  'year(s)': '年ごと',
  Mon: '月',
  Tue: '火',
  Wed: '水',
  Thu: '木',
  Fri: '金',
  Sat: '土',
  Sun: '日',
  Ends: '終了',
  Never: 'なし',
  After: '回数',
  occurrences: '回後',
  On: '日付',
  'Delete this event': 'この予定を削除',
  'Export .ics': '.ics をエクスポート',
  'Download this occurrence as .ics': 'この回を .ics としてダウンロード',
  'Download as .ics': '.ics としてダウンロード',

  // ICS Import
  'Import Calendar': 'カレンダーをインポート',
  'Import calendar': 'カレンダーをインポート',
  'ICS File': 'ICS ファイル',
  'Import mode': 'インポート方法',
  'Merge into existing calendar': '既存のカレンダーに統合',
  'Target calendar': 'インポート先のカレンダー',
  'Select calendar': 'カレンダーを選択',
  'Enter calendar name': 'カレンダー名を入力',
  Import: 'インポート',
  Close: '閉じる',
  'Reading file...': 'ファイルを読み込んでいます...',
  'Parsing events...': '予定を解析しています...',
  'Analyzing for duplicates...': '重複を確認しています...',
  'Importing events...': '予定をインポートしています...',
  Created: '作成',
  Updated: '更新',
  Skipped: 'スキップ',
  Failed: '失敗',
  'Imported %{count} events into "%{name}"': '「%{name}」に %{count} 件の予定をインポートしました',
  'Parse warnings': '読み込み時の警告',
  'Show details': '詳細を表示',
  'Hide details': '詳細を隠す',

  // Sharing
  'Share calendar: %{name}': 'カレンダーを共有: %{name}',
  'Share with users': 'ユーザーと共有',
  'User ID or Email': 'ユーザー ID またはメールアドレス',
  Read: '閲覧',
  'Read & Write': '閲覧と編集',
  Invite: '招待',
  'Read only': '閲覧のみ',
  'Public links': '公開リンクと招待リンク',
  'Invite & Public links': '公開リンクと招待リンク',
  'Create link': 'リンクを作成',
  'Create invite link': '招待リンクを作成',
  'Read only link': '閲覧専用リンク',
  'Read & Write link': '編集可能リンク',
  'Web Invite Link': 'Web 招待リンク',
  'CalDAV Link': 'CalDAV リンク',
  'Copy Web Invite': 'Web 招待をコピー',
  'Copy CalDAV URL': 'CalDAV URL をコピー',
  'Copied!': 'コピーしました！',
  Copy: 'コピー',
  'No public links created yet': '公開リンクはまだありません',
  'Revoke link': 'リンクを無効化',
  'Shared via link': 'リンクで共有',
  'Join Shared Calendar': '共有カレンダーに参加',
  'You have been invited to join the calendar "%{name}".':
    'カレンダー「%{name}」に招待されました。',
  'Permission: %{perm}': '権限: %{perm}',
  'Join Calendar': 'カレンダーに参加',
  'You are already subscribed to this calendar.': 'このカレンダーはすでに購読しています。',
  'Joined calendar successfully': 'カレンダーに参加しました',
  'Leave calendar': 'カレンダーから退出',

  // Confirm Dialog
  Confirm: '確認',

  // Delete Calendar Confirmation
  'Delete Calendar': 'カレンダーを削除',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    '「%{name}」を削除してもよろしいですか？このカレンダーのすべての予定が完全に削除されます。',

  // Shared calendars
  Refresh: '更新',
  'Toggle sidebar': 'サイドバーの表示切替',
  'Shared by:': '共有者:',
  'Shared Calendar': '共有カレンダー',
  Accepted: '承諾済み',
  Invited: '招待済み',
  Left: '退出済み',
  'Remove share': '共有を解除',
  Leave: '退出',
  'Leave Calendar': 'カレンダーから退出',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    '「%{name}」から退出してもよろしいですか？このカレンダーにアクセスできなくなります。'
}

export default ja
