// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q6fTaCqUKmigIoCRI2y2pvdM+Rtgy+/X2TKG3rPA/WtpG+TdsDsMQKQNVIQVOg0qrDJsmYk/0pVddp+0aN+6Q8Vtyebxhz2gmVPkHh/jfPwB3/uMDvBQY5k4aHCPYJaIB60G8mQRDqtR/gExuhQirxnyi/5TwpNTHDO32OFV+X6Tcmf3+fq3MnBXgxhyq3ViR/b9FphnLBWs+hrX0JT3vykkyIz39/ULNq8vg6lkbRIRUyehpLJ7BKDVbme8YumfO6Yj17TRd8pYqEfm7rnlfUkz1c2GyusjQe6X/Whvu+A8oADpUaxKn0V9F94/YpBkhe64/waj9tJ4UpmFAHGlfzAgTcyZKqX1zcCns0guG6Zbsm2clGm2Wei0pXUEpM4s1tJEoZ4byxt6qXX4VRBfXI9n6U7p0V6mgB07Av02aQr6kK3vHrj6K5pNI2/UtsAgZUZ6SvElJp3txOKSzXNPUUQzbPQvhScmRkTBmYwT9sGMUSJZHbjuavYG+DTBEs9aVfIUPf8lhLfGbl6CFM+9b7VMAZnGSLfxrT+bUVlzdAMjB2wH7uJstOG+62B+d1svGDrOPEGgqLOxkvH2Mp6hYNuKSB3XRyvweuwFMV4iBimHFAtUg8FW70utqYerI8IpT3fReGborIoMtWDNcUbTNMUXQCjsy5Z5/vJcj3CqwlS2mxyQ0rNzE4mrtDTaDKMqQZO9IOE+KO9s/nSSwm4JqwqMkWZLW/Fu+Dba8sgUZjzJLPR6A55AovSCCCO3JtYLEciKltnXXuiJWT7FnuEhJrMmz3FGRDSgr1DYsmuZdUO7oMv5RyPkP/psuOZytDxrqp2bECLoBu1gGSZKhLTjxflCb9wws43YbsjHIzNyy526F97Izi/YVFFrjFMPxl8rmkSpOHUTQHNS9Js8zxamK7BILlLwrGH96F0W82hk5JrzgR0bPN5VG2r9NA9Tv2Df0/pN4BS6I5QPedk7fmnS8zOh7P+6F3/GJaUQyC7vOssOPqM87bmVxKCTcLKgGMSDkMYg1hVtopbyIIjZwPhynIzuRuWPUN2jPFpHEShXZeSgcCXNZzy2w3Nyh7iAZHoTaPOSf9bRBvIgXMy8n+uX0eCmeyvGswiZo/IfPIH2ohrJb/GSX13kQJOuP4znyXXAZwypDCX3lrlOrNRXF0thcoyyxYkW3hM9NRasYDEHtQhb3ybCT+YAsXXaxnxgRlQso3+k44d6pRpcb8YMAhW7GGh6lA6DUb57AkwFmfYRC/cSJKqQbKpv99pXKWTIvJiZBmWq2T2LG1BuGQMRyIQBXIkO871LJogXme8oFuqrsRXSSVpiucQS2cLqD0bK6lczHsoUlR1fN3X9voAqXx7TeaQFWCrBTvfSJk41NIHZcN19k2K7uL3simj7kBGmRj9Uo0JHp1Lfiw==';
  const _INTEGRITY_HASH = 'b52f4ddf097490dbabb7a3057c948d7a1d4d230db5d6ba4cd7af4df29417bff4';
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
