// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gIq7j//Q25UEFGbyFZXoeNqIsejOkRlxpkpQFuWI0xochhuGsdUc3a+S83FmVh+NRsXGUucIdfD+iPvNYGRKh0GJZ9fdcJ1jXlHkUro3xdTSbNIoPs3stDjrvz+gNSf/XhQjwQdGTtIRx7YtuQU5/Z0GG5gK6qBBLqZjF9NxURQw93bRJQhhGcQePW4qt+LdptlpV8yvTciY4CvvDiE1R5nFpwpItqY51htiSXYipbjEPJDtaCGMXUngVBe+Hq6QBjuBkwmgOLSHtamgQavEQeNuyK6MMsmSEMYn/VsPtuezIusgM91YT7CesCdb7aOEETbRZUf2T/ijcto9pWb+4H7/kIqjWD1UiJgp948CKfniKOox3spqht2PoPE5gJG6S+9kIU0P3KqozcmkypQSPPMLLINmLry4+OBY8xWiNLVfq3gdFu5UT8yoK5hAx9jSyL6Zn1xLvyn+SMFh+nsewzSPHqvmvFJmWZkUWTvgMrHHQJ1J/QZj9dvgQ4giu0gqwNL94pBX3563gG/Hiwv0cEJFld5Wap0v3a3EUivgj3LI/7w8EVK6RuICeQ/o01upZSdeZwVB5232mC4qUC7vOEprtYnv8EOm7n7ZqqMN8lD9ZoTP9o+hHfqcuc3bVLd1ReBvgb4vKuZ33ZejEq0edt5lKKRVK3VN+e1wpMYES/4aT5P8ztGE0eLpBCyGaE+jQvggrvmUB7aZ0AJ6h2Lg60zjfZVW';
  const _INTEGRITY_HASH = '358e1c969a0c1119ff64cffd35968743d62a6fdce7d899217ee09ff0f2c55656';
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
