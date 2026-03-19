// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ms99Y6pGnsXMzP4MA2QTzrzsgJ92E+pUTqllwNh6yhusTqUi+G/07jAHwtjjvdZi8kKdk+Kb5X7t4Oe5rcaLT69r6lz6Z8ojlfJM/2J4u+tKIdTv6FGT7I44Tx+LJjJ8gE5+q0ko8ZGZVCJPEKTxRon/dKPokyA+M7UDBfsEsu/3WCuacy6uZEnxGsE3w9NKjXfXKzXod380EoIy+aWkbTe7WOVOBqc2ILl/uHABlccDUp8w+OLphF3FCyZGveB3cPJDTH+EcBiIwXo2tR95NqRRoIKaFOAsG+TqTZzMtttvbjrIOdIGW+yU+8fFSA7NKkwi1T3Eg1FcIZKJPwjK4g8B2W6SjP/Dy1z4J+1tbU7EpO0FzBXGEtQHvRzsEMvLs8pyh3KH6Udtmp6PP8QfjmYLaNlWgJRSwvSv9pbbBfZRF1HYQ+LvreKwBO8AuiBT5cQz1ajcxBo955JIQCyzfuGYLnYbpKvzLFBayPqIDjXl5IEqz6nbpEuvRmnLXnD/lGiLJLcrJpuGirqsVdHld5IwvdDVn5moukvAhMHjR695gDqwhn7+vAxADpsLkBXw7rOwSfpw2mcRaNrF6WU35AWqFcl4o7gvl4UAyV7/YLiO86YtRC26pT0YtFG6p101c4bCb4Ko1SrTqu4mNpNUetyUS3M3intpix7hBifCzFodUIi94xCd27aChmPACLE34ZMbbFhP3qDDkiAjUW9vYvT32ZYuWlhNyhknZJS2b7W25HQEXomL98bO5L+UXI41Gwn6HTQb/kTiAXjyxX/RntEpDH9aB3+GivQImwre8ZGbH/51BNWeBcqOQ640px2dy+pNlLzHRM5XjQx9Lom2alnUE1ycJ7EWyRAWTu4X2MdtWQlucYPWV5tT3Xx8KN7H4aULPahpIB0GrCBCpPjd4FNFt87yxUDUyxQlX9+DVgnxAeOgRpB7x9XB0ecaEa5Kzadq3ZnaIJzw8lDWNvVE+iKuyIltPIHYeyw+Nms10KaGGzAecX2RTKXV+nv7/oVzdV49VBC1FEER/IQL3DhNKoz5mrN8mGOMbaeGo/a59PP1XFHqF5T9Klkv9BIZnydscyydzfIAJnxbrvm2pN/UqUQzchNlh8CrvsvnE94B56d8Huj46vNjUemyeHtftOGvQFgLHO56QLe6jBkJy2HMtk40+0VcqTppF8mVKlRQmdBgQUEqdmWJPPR6xAwuMHTp/3h05qW8hNjC+GOYaCc1PwKNZKfL';
  const _INTEGRITY_HASH = '10d1b425b979cb749f27ad89528b3555377187f7f3557c3dc257cd798bd7afdb';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
