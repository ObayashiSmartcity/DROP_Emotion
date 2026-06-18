// posted_collab_event_name の表示名を外部設定で変更するための設定ファイル
// 使い方:
// window.POSTED_COLLAB_EVENT_NAME_RENAME_MAP = {
//   '元の名称A': '表示したい名称A',
//   '元の名称B': '表示したい名称B'
// };
// 未設定の値は元の名称のまま表示されます。

window.POSTED_COLLAB_EVENT_NAME_RENAME_MAP = window.POSTED_COLLAB_EVENT_NAME_RENAME_MAP || {
  // 例:
  // 'tenant_a': 'イベントA',
  // 'tenant_b': 'イベントB',
};

window.renamePostedCollabEventName = function (value) {
  if (value === undefined || value === null || value === '') return '';
  return window.POSTED_COLLAB_EVENT_NAME_RENAME_MAP[value] || value;
};
