// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jJGKhpfDS2qIcE98BlVRZvzOAnzvg1lIUL0GOp73ar2sElXg0b3nOuKkfsmeWMPrab1BlSvJjuP4sGD2anfWy4OiGQFEnVW1woj8wlWADIniVIQXJ4D3oQomiGXfs6n5ZxEmoQ62RPql0aCBjDVPSZEfXUGtoZbZnIhfaziNBVKQf6RHmVbMDFWllpHxuFH6DDnYGyn78q9cnXI1/v8XiqPzymkoxYe1hm8l54SVqF4iK7Fg4272cKWcNWh23MSx9kZ+d3h3XXnplDNc+zGHWTrE8MySjUAG2CG61hfI81JGSBqnU6QPCp52fG9p3rNORcCNmOsPf33m6+RV54gZHIJ8PnwTx6/rqFZ6vqenJkPofMtPOhic0LiBp2v2gHQKf5OhduspdRxwmqd4B/rp21hIWXx3GYPeFah1w8PPYWD9zn9Mq7rJX8BG+rlYcnmGgsVBlTrge1/7SxyAateCP3A8H+n3FqU9Nr8zd3d9Ta6HHgq+eYFgz4UsD5W0ubG3LF9RVRIz4k44h34V28y78GLKyxEWgYfLkBSyCFeaMkWL5cBwa42NI4D+4qY+dRngkqL12zRjgUpZYg==';
  const _INTEGRITY_HASH = 'fea5b8102213bd3196fc68312365cc1832399433aabc780cbe071be357e20b76';
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
