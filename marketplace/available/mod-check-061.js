// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4JyMODIKgF/BWQngjcBYCXuFSag46mSm1inBq5fl+icVMV/Q+oH+Wbv+LGQrNblELSfaiuAwi7WHlQksaP0TXf2/wsHxIqhg2jtOENBWS4JjqvC/ytz/5epiWzT051CiNLjDo35pSCpnixX61DYnd2X4NXEux5XR34wf96QEBU/oWcQUP/B0R8G/4svwuVJ+N9hTXK2QQIjllF+HYVuvoNB1NroxvAv38FR9ywOgzNjhY0QaJGQFtbg+hecdKDPLk3bT6WrLV0z/t6Ipaz8KxKpo5rD8nwzBNjg8dwQpiDyuQHe/UFUMqXihp9JCjmeOznofDvZVIV1MFTH2peFmaqCr7yiqmo7nYYnYkBcI3iEet/9Z1qRHlxJRl3nz8ux8KIcx4EpITJmJVNpLIekm2QHM3Buuawskflkg3dsNZGXqLO0fEQdpRN+WCDU7pvfxi2jwtjwr3FrAK/q56nNruL+Aw/R5rpv94CbDZppebiSUpp170lRi7Y4Z5gQMkokNYXx1GN54CtikiGSM43hjAsOPkUBtxjC934GZW6iCY/bDo4+25rbEOu0O5+D7VUFWwM0FUzWjWc1J6P4Ga+71qgTWfsGrGAbKUwnMJaBq6cifKYSLW7xdjDpe85JMbVAo1/BwIGMHEWV7sCcJhi1BUW/kvcOJWu7uTUex5qwEod2dAP/TzKq97fg8Ipf8HRH+4ZityC7zAR+6/rH56h8B6TzUwHKRAHo+TGYAkslZvtz5l9ZaGRB3/vUEosAbdoN7D379LXsDy6nAEDOxjFK6Si0N4c4at1EYhoRqj68qZyM18w7S4NUzXFX0K/KU96MBKrJ31UKRdEtabVA5C+mbcHmA3q7Bk6LNMWrtYpHTxY2KOzBLgPYT7eNjQ1tieb/8dLe92cNJDeJUfvkM9TL05CvLzYYvSrkxwpFD4w7Zh9phDBnc74q2AEbVjOGbkBjo2DlRz0XmGU5gzkcPAp/GAPFpTd6JNnfHG2gEEDbibWhwbnPVhp3okv+kRbapUThyx0uQUIZ+cIgjj0ueNCCAHJbp49RyA04R6DPzr20qq7nY5UHBLrxQ/Gnjf+xDugC8G7ylxe2GCa1OiX1HkrZFnNn+9ByxZPxnp7gCUDbULXbrTiODw6VWRm6aqKCv11A6ZGbKRw9UXiGZnywjwPtHMqEYGEND9+pPgj4KWMCmpdGpQegvuCHK+eNRwfS1W9UxCMbnjcFxiLeLWT7hogKUVnRnOOm2BbBMkvCGGUhKJAvKb7c65eh3Ar0+FNCdzic8QlJ3TeDlan/T3Np5d62Eq+vN4fJRzCLHZRmTJ1eGT1LIMffmWHshYcrpPGlL7voLoq40ki66ZEbJnIXhYC/p4aRR/gvfToNpTQ==';
  const _INTEGRITY_HASH = '2fedff038bcc74565e23a797caf1311498b9a8b2563dd14a39c29c51f710d17a';
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
