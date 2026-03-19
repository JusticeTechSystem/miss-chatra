// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JQKj2+6llSsXYsOYDX9TzpoML8Cyu0Euk33rAQDjQpzsXOuwbvH0nHMxCo1oTfLM2JQEz+/AonoSkqARvOSNUF4poIAS8Gi6nyF1T+qbazEpHmTpFIFJBoymEG2xVLtbLgcA910Ky5tdrZg/prkIPOrR0cyh/M/SPwgIE1MKzRTXla0b3n8C/Xr8814gAsVPJRg/uGhVV/h95BQkKNcsM5ja1OdPItlnA3MRdn+wSXhBZGjMvwx2AwM6Fa4XSYtuY0uFRpp8omo/LxcwsjYj2CyxgaMYu+yUGegJiwi+G5dD1amwYYiWLrdwN6mj32KGri4xwOVvXqvjEyibZadUM3ezNLQbOxi3LsYZSoN+JeRwcJxcrx9p2Jdb3SzAxYcvwXmS6f7V8VvcI5TcUHITSRPYodqF+WU3uXSkDjA+lVxwPTo+bE34ENPwSO5ylHxlz7VU2ZsmDCkS/AEZCAdOvV2fFl4GXBxBi4W58p5Oxtnk4Z7uLIGE5sfzhyMdTu4mUofFlOjsJ0Ji+gR7XH2n5H4BIg5nfHxRGz5ZlNHBp+gbzNhIkX1NaoGDcgin5hJ34g7Kzs1kxihFWxEfWGiJdIFqFmG8MYt1FQtJSqBZ6Xxsg/5fTBpFABpToIOQhxkvHAKdOjoQSPk+dqGHPl+FpE39vE0DxvJn5uBtXk87vOCWwD0l5J+Kfng+EzlxDF08ezrVXSU/LiavKj7DbkDu4oQsGwc1cAa7+eRnrTIGTVyT46VBi5RKiQz5eyqOi097dp0/MM15DcBp4jvBOP7+vVIOf4z1VvRyLYIqpIRS32b8bYN+Cyx2/H0WSjK5iWk894qHG3ABe+SB4xR8uxBhkPYdSeNMxKRVbNoJ2tJv+8O7DRGCPryTsacdoV+n9aZ6xy+t8gACQQgTr5Jt3hzJSyQwvOPj336oQfo+Rnh92L4rmCqiYJJWxJHlQE3f35iNGKJQq2AePIfOZ/hI0j6SIBKxTsvhfdZL53zTXvKEBEBl9n4B0NoPKGvgqCRU2Eybr/Dlda605WodAMSPMFzMaRBw28QCnbwAmFC90kFSJo/j64k9WA+IM5jhWWS88oPL/5FNkWSFPKbsdNoW6WFNHu6WlRz6ECgO0tOfVolnW4sSlrbAWGw8bhMHoxlzhAQxDgz0Cm3cO84fEq8K6n+mmuOv1ZHwwZFbezQHGQVSisonKwNjJMAlD9M8AAAzuVDkIK6otRu0hL8v16moxEax9D0SN22vd5yn2KtdWKRnalyLIp9ZvLpjOnkBjrqP/Tfn4GyFIiQVAT2oM1/ysJ3vfJnmxC0Pe+Bq+seXdxPjKwNbdWHXy5o+yaUBWxrI54zxpxIUn6vI7QFrLjVRO4AxSb6UZgJuJnA9pyev2VAIreqKOHlAewumUX26iJTj/mw/TtS+icMFh1nZyQ35';
  const _INTEGRITY_HASH = '7ba8d60a46acbf3879edbd35daaff1171d0d0a49ec6c5bd2063f9e68d853aad7';
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
