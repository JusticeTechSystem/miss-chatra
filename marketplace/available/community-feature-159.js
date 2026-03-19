// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w8STPzGIVWLocv4Tgj9aBbmn65bgjk3d4XxKCtqTiE39EKRknhL3jeAXy1O2E5+0ImEpgxHuu97FTye6bRvWuXenWBzayPaXJz43+LrLvJhvdKLUHJ8p2gY7dOyoIkXhaEOg0BW4e3pylQ74pJLqh4NAztJrgxnxwytq0Bc15Xantm43iWAThiufeEH/4nIPKsIlLlpsKOBg7iS07pdvBZIMtGc8xqSuGoyLiq5mQkZtrBZ4JXMLZc5o3OGKOnbKEEgWGuXX8ZY/pYjlFwzQ3YkMzmIdZb7h2Z99eBVMEGi6zgHA/9g3+1kpO2WHTJc9KQuStmMgT8JKUpIxBxhzh4kDLCqGu380I93c0fNJtuJigR2FHEN8KTt1XIl6xpGQwVxPtsSzzhD6mpbRQyQWOplXtzfzs1bKiXxYbj3puyU/Z+pVuAKCRl73xOjO4mAQevpljVdCRYvlRMaCao1OLolFCwIubVunhG6oe/NNS/tRJ3ftFhIgzjBeWZJDKhPWRfBlAPOc0VVoTZxcZ1VwY29J7p6HM++e8jPw8RcxiGhOEnkVvvMMtL7dPfAfA4nHxxqykEF+j/UPPSx8U7IgJJrd0LNYKMkLFLe9xGblJ0NVS4sJhTB2Z3sjLgyrsEb+AYEf2Yo+tcTpca/xwkwYi9e8rQX6E4yMBwZfbFu9w9o1b4aOyK4E8hGnWP6gCWvCzr/4oGCsZDLGSJMK7TNufSABjRTYAqLVbeB9d8YXyjhSkZfU7cA=';
  const _INTEGRITY_HASH = 'ff8ade93a54b5790e5057f7bae7c858f0361ae4479c37f3c37d5c76b246e4df2';
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
