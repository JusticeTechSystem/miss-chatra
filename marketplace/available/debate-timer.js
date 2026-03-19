// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YMKvfj19+KLWDfcm0ukYz7it/YerQE0Fnsw2ccPi4k+yU72YfdwrJx7y/1HryCVtQWKXmlzgdZc5rk9aB3NS/bvM03X+EAXIKQmzgg2UH8MGUqU75oqLFd2n0FziqQuDk01ynziF39QOj9SF/yhlnVj0Hi4B2c+BiTxV8FiMcBPgp/B9gG0pw+KNWcmVgjWGzlxZty3o9fUy2BhbBkve5XDdYYo6sCTV5tHw7tB2/itY5uL28j18idMfghHekCjvODPNncQ0H7qEK6C9Ifkunp1UAZHlzCqDEYXqUUdCDK5ieWHbzLwogkYT5+gwpVzzNyaeEcjzpfomVzuTNi3gSJ46k8kMyD7oExvOJ/sf4Ux14wUpKqzfMRyUQ9nUzUg4aoyMKarDByu4Ra7YdwFkUu5zV6aFeFmtaDyxJGRXUg+GKwsTn+uTZ0pBnXh+nVlPvBPzeIZdEV76Qrdo1a77MDScz06RXliECt81mUNG9KZv+3Bb5POvZhZhQFvtIkQinlwpTXBCqtRGHHIR633H3Bu6CNVl7GchSe0A7ird+J/KGQfwcL+FCMGDtk5W/Oagr7yy+tupES05B3DgEJWXt9sZIPR10GVkTuyGBEXyFssBtmBtpnFDB//ix+xQ8tSMjpuu8bLC3ZkmW1AOTMnDuSzVhCUQZncwsq5F6jcKwdWjW3xqLOQfIJtXD5q14IjEYF/IFNdHygoj6wkMqtL9ZHc3RhN1KfuYWRlrlrCPM6mwtCTxgzDCqMkueYJA+iavCqoF+zd39qrYfK9w72mKaQVuMTKZALutZkbmKKNlzk5lxiN4563GF9PdY8lHNMmYP3aw6wrTGtDGLV+kbG6EvMpRl4dK1BGG9/q8DJposFTYAj86Y172/eQAtKuix9WZ6KwwltFhLWhgE1TW5X7au0CGJZO6goNsjpyssdS9aiIZ6pghFuM74q3rg4Bu3g0Z/ud++kze1JgXrpej2Toka7ZKR9lVzyQd6MS3mWzCwclTwAbVnK71VBf7MwmBU6N39mzX2Q/3hhlOYA2hNDBahiCpUmhEZxfeDWdZ1KzYvas07XdDmMoxms/46/LkDioKUdRUyw0wgr6GKn5hXCIrl3NlxQapDq1HCWsM2x5bojhjeepLxk+lnvyoPmkFa0ANIKiAzFTjSFa7b5hq3x74tvdIbnFaobyHxdV/E798/YDUJleaT0bi1c4oJzqT7i90k39XY0FZF0M94aBrcP/PYOeQAYJo5YBlztbGAAu5Qdmowwld2affBl/5nTY6R19qVw==';
  const _INTEGRITY_HASH = '1ebd8c3c454607ee22e5c70aa6290a002d6127c84c053ab8c5407c87f2fcd3a0';
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
