// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '329OplhmxBXDkqCq6Bb2LMjOby0o14QB/WMTUgW2GnZlN7YnPo3edv/vOUNsSZYGIheHk7XScxGJ9nm4cJpFCZcbpMrjbzeWwlc6SetCCYctAr7pPRLh4oR3PPt+HdAsyfo1vLt/A3KpOJn3MH3dhQ7QJhwigrd+3oFdDo+rIbhO0qWApNcr/fBfJjDh2jKwwQ0CNzbTd/0hVW6RffA42UyxFPJds67+pGfDlfBeQpv0rGqrbNxVYMwJMDph5RwOTtIJRZ+zDigYK13SQRzuR4HOVio2gLNXbb3cvGCKa8IlB7Vbfc2C96QcElhVA742ga5FQK66jQk3rXpWeGWWU4KtcZJZVBFp2vBVpPKdm1oxwoKwylCeBSpgU8MG2BG/HqSMVSMp2DIkD+sdQg4ox46hOBx//NdDrFpkyHUVGYFq4HBWPRQpG6KxsFj4hDymjrRIChVABkZfGgG0gt9QXtbRXRvI408ZvYwfYfJWmzLiGIaO4DYBfoTEJVqTXsApw3SNGEAZx3J+G6Pv7EdLgllWys3UbwGTPnSh9zEkJLnD81HcMRPnlSbu3ZFFV6kvz/8bRRVyxzv0qDAmWIQK4HwQzdIsvNR0lgf4540pIVVR7EhGEJ9GblXs+IOZdnFxVjbHg2RsnEhbMLAMS2Wy4G0ax+aMH+4EcY1a8QirwkfB+Enu1fVteOrX68KzE2vgWgL3tX02wfWDP/zOGovu5eGuxZXOOvFhgHt6+YJtLZzCpa/hkwI=';
  const _INTEGRITY_HASH = 'e399c8321c85a5fc0e17d971ed36b43a84123dc33985df630cdc05ecb0575a23';
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
