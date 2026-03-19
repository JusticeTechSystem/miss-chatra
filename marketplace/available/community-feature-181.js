// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nzlQWf68RD/y/Ixv3u8sS42C6Coaapawz7co8qeUYKDD12phjTw4PM3xOlDT4J0ZfmZ9LIkqXw0mNUM3NOlu4wKEZEHdTmtUuNjZbV63HDSsEBx2tIWohdnVUV2uURo0Bnn8E/J2XMVEMFS2gN9t5WwBKr0qUvM5r/XVfk94mYoKc7nShfh9HtL84SjpWNgF8HiBk4VwASdkF9lm4jLoEnMPgHfkok/tOdoXuYhH5YGVR5yS7odeSShO9fWtSv88Tcs7CqE6uSXncdtcFDXyGApRfYc/cGp10Zr63+DfaYKuCI6vohpHGwbFme9avGIrSRvMZeXVkED293OOqPIbkRj8iQivX/sEY8aUIc5Qo6k+yyv0d4qCTsDMbTTNq/0Ihc2eXpOJmrai9dMY4UpCAK/gmRjarTIhYSgLwtq5gVa0FD2LRf8QKodftPy2iFWsfyYXzp3Ffy8YbRDhTeyEPXkxNFxG2hJPJHp8vpBKwZqTm3dMF9B9mk+M+xwYtrkmwZi/8mPRmwFaPukMyAYahByoloqyHuK9YXDNJaYdhm2/yDfTArtgzAOdtNrlsjZMbElx6uF5EAebly/Pg8OWuwltQrl5UaWPoyHEz5FJax8ew2BGZZz+2jNCthovfOdeYx79l8c/quv1UeLBncNQgoZk0YFviJXRG43cWk6kn17AMGJMJtftp/F3O1VURjjrrFrkyNSCEqqJIYMfiBpAGOsjNnI9fS0b';
  const _INTEGRITY_HASH = 'c150519c2a5c156376e664692686743ef31f5eebc34df971093e07ec5d6b57ae';
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
