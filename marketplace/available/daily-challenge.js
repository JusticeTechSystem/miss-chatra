// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z4s/6aTEpm1rgdtBIFZB3pFIWkbgLYSST6u2TQGxw5bEYBnVA6cpsGxoMFu/zn1ixlB3RRtOEa2wlIK9yrivhmE1yitcY9gdfVzlCYSfBHWglJQmu0aiXiNC6XT4/uttWY8CYYSjEmxSxJTOHO5Ru+Axn9DegnRte7irSPMNwAzKde5UyQtRPOgnye00e/iKc1sX76t5VO2evUp0yZuPH0LphyM8iEod2JlexucrLkyIUo9LRg/rHOMUSFjvPSJPgJuu7yI9lJwj1iQnc5NMNd5g6zetcBgO3aGl3v4l0cBLlmprsjXcPwXMa+RvLueKso0rvqbsJTKImj/k1+NWDn9dZhA/Bgutn3NK4M+ADrPQDij6AhEaSowNYHoAWjz65/6gRZz3BE1OtmFsfKXfzugYXo2CgqJUKnQqKM2x3crYG/bhKNTaW/AuY/6VeftljAtID9tz9SqgorQwnzaxYHnZdtKPnRwK1hJXysESrElvrM/VVusvMzbWTRUt3vWKLxWY7i/647ivkWe3nTX2zP7OP4L4pRauwfUYjgbRRx4KYV3emQqLpwS4KUinbeGzN1xRrZh4uhvJT65WVzoWcEUAoWsGvkFRGWyqP/l6Wkk0zg==';
  const _INTEGRITY_HASH = '4fcb344db153cd5cc4b68d8a54a9df2d2c3078e1335763218662110e69f99082';
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
