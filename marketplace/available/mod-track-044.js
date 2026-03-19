// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5NOO8DcYMpJwjX7J/PF2IgtLntxDf2ElUdKmk2ZR1qNDgHGxqa5Tk4Z0JZ/Je5AlqWdPEWeFRsWnfiWYY9wF358rCt/2qhuvbCv9rdcKIA6lHCPo2PNwgUrQPYlrzVhfJmC1L2dmAqm8BYZtgDf9lNEQvUB3E1IA0YIgSl8/3lxc7ggqYAGWumHAfyrVdUg9M6E/EQhqGhsEVV9qI8A6CQqOzwBfVhaqpLP1hxh2+hpxJGI2J29UbnCMOu7An52sgsSzoTESQ46eHxNq4Q/Igpo9J7xla9RqiZzCx0+YnleEOj69v4prrDtvBRmDpYEtAr/aRx5ObdZfdXS6xqlmJMb5S97MQUWqPPA0ZSymRE9XV3OE6IdMIMGC52Ek80ER50YIg4F5alMmK31sEJw0OU7j2t0+qiPbcyLQL4Z9i+p23b7FHlUKRsONOcAD29/+qa2FkExGbOBEMJV7FwDPT7TYlNdPrJIPikGrv8sTYKCIsW3BrHoio+qkq7U4O3p8ZEAX3aj5mkUdiM/WOYGzEJsaUP2U6j6BpXDUnrOUoOGsU1eUZnm8RV3avX3GxbIqfBb0QQDcn9IKNbHOw5kNl5s0LcsjGv+pYECjmLebnc87syqc+6DqXVEJDJZdPoY2ILYwwRpsQAdaD2g1U+xoviwGBCrK6yMk4LiD37S1lGan3zimhWTOlkio90iTeB1CzImdIDtakckzOgbCq5DDq+tS1RzzMpniI0FACVRFzFSmQl1g8PawcOFBHaZCYFzttR0b+K1Zu/xSal3e9Buh2MuvY8TDn2MfuwQxE7A6hUZHzTNINA8xBtbFqPHVWvo39jFPalHY0gYE+VKDk0kgLubC0xFXjZgNQANFj/3hsEOUpb+Q4ichbuXPkhmKHFxccjTxkJAPCgejYmTdgw+egrHsyGRu6NdgaASlPCa/I/O8AlSxNm+uSO1t2dergagwA6CdW6JrEm1gmhlOZe5UBIEtS2TuFJUDDB/oK42S44MrOUYWALn/0qEMB/C4+GnCKyItJxM8WWiZmcPfc2j2aqUTzUwaw1Ncy6rdMWI75j6M5C6F7qnRbTwLtSVjmRjXfsN/y3rvcD9LIsrxN3L/+R4rxySrT9CZjn3D1DXPHOFBOsmlCAPsQNjIZLjxWw3UM4aTCULL8ozq7g6V8Ta0Fz+I9vGB/9HOBskgXGRaUmR2+mEkRABkiY3axNoRHryXPPlMFFlqVi0RH/KgSV8gnVxKzLrLWr6HGrX1Jkuhm66FwDBC19efTwvHjZDOxMLeKrZrgkJiSVXxlz+siHV9zPFHAS2elpih4biI8+uuaXWmybNE0cXjN1/TCosHej97spWbYajU7AcpD6oCh0dflF8PWBtkEyeHWA==';
  const _INTEGRITY_HASH = 'f24e2a0f7fcc6d4367d1552ebceebcbb8a7ff1cd9d4af637249e1975434e4200';
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
