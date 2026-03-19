// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Sk0cnh6MZ9meyHSG+yEIEqfefGyeoT7K3t/3tddVA3hjeXxb3gTVcHaGSehr/5ydrLIQKH++PyQ6l46Wf/1s7p7KApeKiPgGV9D1VaOJUa8LlPiXH8bi1Va6KUpoPQ7tj7R/j+rwYOwZg3j/v11tSJAL/Ts1NgvxM1wTFd7rTDZZY3jrXSxoRtwHQDlOHwF7DTxlBpofUyXydbcWAwdk/g7fSgPdYkf1xsIrEfqpscFdiBL2SRSjbcp49OQXxqWK2oe/U6r0H5FuWXa63lngoMKkK1WS91fIAhzpYnH8HulZ/mWxAoHSyAzZ6ivywl7FHHDJuIQKigdlwMX4e1K3j0yO7C9cXCiOME/EwqJXPTUO7+zOl2AUjo6JnfhLxpMxW8ePsKnXRyld3DHUxX5eHu7FRrCvWjtErqskTCv7VP25ANKDU1YSr2Y64f/7UEA3ajM2iOxBgKeofzvhTNuS+gB9nlLkNQzdJoXXtpqGCSOVqAe6InFRH2uIdc7OXt/0sGyDqMP0GVRvhzw5h4aphXjOAeZ+PHuPSTyDssDa6mWTVe5gtUIJ3k7h1in4ocgT+3TRTQkCf6US6NZiXwnkXJUuhl1bl7mBuCqJmYLOPFNBcUYcL7hWbS1WXjfnUzPB8ecohhJmFIVg4MS2Ajg+kXxMhrhkC72JDHh4bWST5cRm7Lqy+LiQCgLe1Vis7Wy5+7An5HvSa5vY1809ViwaBSczyKABqNjDh+K8Bzk6E2XkyRx0ZeZZZk772ybUES2KhGgX5wKVREEsy9MVjSMsDwkgIc8Sjp/gK7FMSzNUNfLQPOLg0shFO/blB5vrgi2PW8UzSOtLvdogfmdM5E9NQ23bxj8HyaIz16ialj8IUz8teECC/EosV+93HPS87p0ZsrnRI8+i07p3Ia2cSgHwTnULAIBGvmQ9j+3MB9NSRYZZaFtJNa4lwbtkCnzeKU/zfsX5jXL9NOke6ZKUkXLq6Ybxxy94GagbEgoBHU0OsQumqxnzlnIPB1BzeFMwQ0zVIPW8qr+yDgA=';
  const _INTEGRITY_HASH = 'acc143f0d527dde8217ae68c47472deaf9b9458497b4bd7ffba76fcae66735df';
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
