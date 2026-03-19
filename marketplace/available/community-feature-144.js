// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7mUEPkzGC8EXUcCea8q5ja1llVi7Y7hApiGZAxA0lz7C+GMcwKniEALZH7XlZU4pZ1FgAHifRwGFy6teXGuuPAhNB3zNHVfOwKIsnVdRZqBDG1+ufxryuzTb7kRHoTlSsdtP6g9sZdoAqRP7ayoRFBj4k8kjeEi7Xh6YTjjhUKs2Y/zI9YYBV1jMSWui/jEQr0uxi9797eFk+m1b0k/MBTMXZKUCYkzrSbbNE1an3HSfqaPCvzh3vs2f6lUKlT7DLSCqUN3AohFYOW8iWEBBUsVsFwkLQ92wPdObQanXHptziZdaZxnfstwvR38D8pE44tehErrmAKdc3vK9WTNnVvRImj+n5AOW7eGo0IqzvHLfDYJ6/ks/dwj8Ws46jxUG5IB1srP5SPuP/ejEy7c+bYaBwX1YFJCWS8mpq0qD9q04FzAhN9o6hlDUJnsOfuN52LxXuyQlIDB5rfzyiOmk3gz51Zkvtw4uBoRspFCRhFwGntQ5Je7YP1MXkUYDi5J7BtduY/vuwzdlkUYmWPMXIfFYMWQdncXT+A7RMP0p7qmwP3xD/MZZx8Zgz8pq7gRo0LT7+BwB/I3ZPMSNKJtfSfOEIUk/63lJv6J+rYr2npT4pBpip+zymTggHMmNf22tIpeyu4VbodKGoG3/9FfCZZ6N/KJ4SDanIWg7tj0PLEwpk+DQnnP5UKUl/MP0+DE6u+d9fCNcfvU0j8trXVXZvJBJ2JkEigmRx93CHRCiDz6Q9DyN+tY=';
  const _INTEGRITY_HASH = 'df67cfec7a97a8a589b52248f4d9ca50cce553461d756c2d43268cc4445261ec';
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
