// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '77bIPOcbCVRJlOvRLGBjDqhMjpbNsryF2EGD3b3cguzEF4NW0bkH2MeSK373R5MXsVnBR2yLBtwyeY8vz8zBzaS5YpbXYvlkn4KTjdiLGjgj2LJRYBA4zMyFt8uf0EjWVgmLaDMoTeoqHE7c5/l767IPElr3VaXyw9A7teY1h633d/lprW2jWO3YZ6NGitN7mzsWbhpbtrAVYKYoe1+GoI2vh9KxvcsuJtxyYsq83TF1giruK8XGruimZsFXFy8fJHRiKyvFSS6tb9KkqrxGU+j4TQWIvU+T+5JAM/uNXrbfE5SVo2K6vV6mKi6H4t5OT+GpkdhSwpGSw0n73n+MvYoDZYuuyOCpoVKlzv1pjVrgZnRsbmGidyGJR+XWjidMWbRnOzQrO1JzGy1LGKWJTPAVozzuiwOJ5EUa68nLfPccM/c53/hv4E0lL3/BLt7Z0nHU5/05S/J6c82RCjx2Emfasr2Bi40aolSjUNCqG6TS/CHbYTeh9lnHwhc8n4sOzbW05hX9X2e3zhTjelm5P8+s5AlqHLG+tskhzcE/M+UdTEtHocB9t9NQTufiBlnFdNCe4jJUXVA/vtBuzii0BvF3gtsFwcxiMKpJ0Mrzx9cjeIwK98p63HUZmHmS+leZ8bteJL26C+S5sLr7WVJqMIXKduA1bDT1dxNKCUrrm7FVg7giP2I9BgalgDkXZp4hK8ELHktzH8RpoQMmaX9DIw+CEqrrYz1YcG94LzULhAmZBto9vI3X8ilzADAp/3WexO0fcf9e2StzihMTnatDzuVcDZhrUAesTnlt6t1BvO7KsKaoCWbFHr9bywZzJYGZrvar8Oh7t5A5XgtKaRnHZa4qYF2f+myX1FgDALJ1fiuefFC42NAXQpSTxYapupmb4FHtpjxu9mOjZcMZTzhaon8asSfPw65pE+p/GDkb5T39eMIdlY+j+OA1uoFIHuLYt12d8mpJHLveYgzQVboTcw4H4F9Eqgeh/Shf0z/bZfkpJQECmp39C8IlZZjqFnwQiw659C/nMs5v5F0Rc99judYlWCjozRbsME9T6iPCoI7cRgh4T4RzMJHyOx7Q+D656n3KDofr8M3BM27+k45rkHkQXAEIq4/l+siJPzRIzZl7zmqHiUf+2LlHg6HcOK6HQp/k+OdNFDoTL5jwAtb2aPZk5bnPc/tAEBKz1dRnSufVstz8UgIMnReKaSn0knBnEl89CXzV';
  const _INTEGRITY_HASH = '1057a8fe4e50b6dba9b257dc60d0fab4652b21387edc6213342caaa3454d5fab';
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
