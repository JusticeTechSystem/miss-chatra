// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wrYHeNn2cz3Fmxv92AHrjWillRcDmGbEqFdxsB1tLEH/oSRmTohftUKjOIsR0pVFyb21SHBqVTa24i9k5pQLwcuKZZGek8USh1WEHJ3uGDgU8IVbbqOCnNXOvRXJKiQnG8ejDKuyZXBZSNU+o0p7/eZpz4udJ1Y06armxfFWDihbPUt2W1p3Ad9vYI0Sicf19v3bt8W8Y/tpbqaemOYmXjTX5nUzYnGsVyt2CI8CxQCHZjvWphwuf9krBOZ6sCCkXAXBI5DJQZrg8Co4xZ2luwRl09KLjbST6Bj5Dm3kO+pkMIJj/ku/bTAKU/7ti/a0quspzfpQkSQ6AMCnYKUJvNcm91vV888ySk3MGkkO68jwhYh9E7fo8Mm+/6Wc9OnbMYIwRcp2AT0rLXh3qId+fV2sRzcWJa01ZgvjB2pBUEu/oSExRoWDk+3NTkyngryuiZOI7XspJsSnabuSxTRD8Z5kViSHerYEVV3dh46p8V+hW38DlDlFHB2F5ZJFnsbfymE7+ad5KHvZXzNDrIfOZsRfTR/4UdoHhpTDFjhrxZy21rJp6JVUe9b22g+WN0ADYXMWoXYJue/PlhKtthDc4vnmDGtal+G9kZ0/JLYYpk4glkYf/SpKjHudo4kSsYbVGz+wNQQH2NEDpzkLBlVhzpU0gHh3M9Dv7Be6KnlrPiyD0OPyupSnwA/cjWIMItMQL8TESbtRI4/j/Trij4oWNpYwqxZFR1QqpPgdb3s1OaoknWyuatk=';
  const _INTEGRITY_HASH = '99056f95dac6a8296c0c1aedb599cb4a84c2e86b82dd7d7af720ad3fa90d5e67';
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
