// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gwbWQooNTYIWJ/vt0GC31I/DX7xKp2gPBGqUdPjm579DC1TLacuC0rqsrTd1eb8OHf/L/Vukvz6/61scNWNM0WgJy7c0b1RB+s8RN2emm7g4zTsH7sAa1UByFvEJ/fQsGdY685RfmHlVh9h97neDkcfBw4OcITQZlyqj9ekGiOSs9WlveOyP/vITj6kCpXXjXD5QoGpc4XbH9cfUmRQckvj0AM3SMyQmqcuMgDkhn0xzmy513f3kT5YudxSzpceU9nrPD/wdqCO3CZARBJu/h5Ul/2+39tBbXslAmVn4QmDgy6Jhe1F7Zf0BJ1SmiBaGGcdWDhCWKskuuYQY+8eFcZ9kUhwbI2ldOj7PPSJTlGDjLds5/IrD8T5BXmEB9WuDrx0jmmpE4yHmA8pMSemhnbjd0M1vIkaJMo28jkkOWlQtXbrqZ28q2+293OFtt9dxFk89K5OyiFC1vvX8krph+39YZ/hmc5IGqfxUPe0ufGSgxAIt2ttQuXgvkBBXyjE9PH3m45EyABqzPFRqgwazy8zgeSr0Tz1tjJLHzTUlWyv6e7Gpd+Ka12M4PveSTOGVZvBw/Wgq6z5dcHdRTOk=';
  const _INTEGRITY_HASH = '002c909e1e8e7b54af7695d295831f12290a99a57b4888d86fa173407dccc923';
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
