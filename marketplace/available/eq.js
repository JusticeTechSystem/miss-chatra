// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/2BYg39xwwxdPBm8i6BwK2R9muOydFCoonsVL6BDXzxhfj/SgzO8ZxhnyAJZjVUvL/2Q3oPbGql5XvLjpZ1xxD2WAVb5lbL96CH5z0+A2cLbUa+gOjWj2iUIRi/E8PAZB9zl8F2zAibGeUZ245G8a/UZIfmRSNEX1/dHArQzfKLXIMaM6n/B7z4nOZ3esxNiMjnjUOGR4i+MNmd/Wh63e6twU3XENo7iKio6bn0+xNYKjSSy8oJenVtQX7mq/RQfe7ibeI9lc1r5AA7wO1ZeaB4Hrl8fOk2+4C/8wEbA+0P9BddRBb39R3mTDFvjPlbVDLpGPNWMotgX7XGdPlXKn1rPGvnxTfwiFvdJ7dm9GcnoAjUKLnNuqjsXk0KXEWvL74EzEgTQMdoExs5hAzwbZPz7V+xrdQhEnBHJ+4FFT4mx9bm1AMUbDljZIA53xqnB7q1Z4x+ur3NNF2BpJB5vZpmRGJGvd0oxhxdvRrSvD8IDLEjh0tdqwadQgNd3DmCYDXWSK+w8LtE1eK+wkRvca3pGA78K4MsRQ6l2YQo/rSX/7htaDJ2PQR4k/kC+UyellYIXLwoLZimxeUPzyXB95Kvfo1BAO2/1QaQBg9I8h541SrcUiULRceIANj6ypRV4FbiUMUWbFsJAJiTMBBKqJDre4Q1l3jPRu4SmNkWdF5nZ0QI4cyrKn1BDzYCIWLQ5A5eQfRJbtt9PDLMyWekk3TlvFv9yWDZjO6RSRkADF12LPiVZf+E4DEFQdWdwJaUf6iawzLN5/siWtfNJsMFNvHWHgIgDHHyYTbjJfocRsMicNSCxmsXgBcjCEdXKkK+0iqvF9JZytgoqzTXwWvT5xK+MYI1YqO+ldssTvl9evGhzkHlWDGdMN3Dy0Tkg47FHI35xXOBerWvGZnloyqRtRKrbsB4kttUWT6xaY6Rse9mQGVB2G9UkGT8MQ10yMOgJeWV0QpHx5QhFVYK7fbz6BzdaEJI0ZRGmLEiNaO0jSqBNgnD+pKPdnyh0j7+C4UlMJglv4A6GYoRBSbkfn4VLmyxf48/Bi6voaMqu2vxPIaqBDDSqvkyL+YHjJqHf5WbbEdXifb4FV6Cv+kmycWqCseSr0pEA7r8IWnunMpHHPzqGuLEO24FNubUXwEOlRXWkDGVxeCp/hcKLhnZOGm1Cw13cURXdIfmdeQxoiUPkGHvd';
  const _INTEGRITY_HASH = '37545d78499a07ecdd6a18a48fa97f41b8e7b7b2ff9519e8f8f0d14477f0b9b5';
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
