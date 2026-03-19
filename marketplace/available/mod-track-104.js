// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7Yy5O3XrBm9dbUkhDljZB0EwxRoEVxOlczlVWgzYGsEnJDqoEARvO9iuCzzcqcW/IHgR+OXNr+/KZPYT9i5cN/Z9LU2fryZ0LvhwP5rHkxz5nlULyn8gSa8JZYMupLMdMRgli4y/oSnFBuj+/Bp5S8pfeQKnQh+aLoAme95DaJq+CR/ldnCYm+moZRP4nQy6ioFTSBnSn141r2/HPQIzivSwMGqZPkOwTfPK48kyvyrjUYxevBySSyRXcS02DWAOsX/kiHOhdZ9clyK/B13Nkqqv1+m1sqgjYncfm6oqSuPE5hLvnFZBlSsTWZyH3r8LhSREy3hU2R0UtnpsUca7bHqZMdhF4hhWUEq9uhPSaZc63oVtzIU1gh7TT+01qE0wtieLY+5CXmWoTQdjGEGsqr990nXxD8+2080tZ0OO2Lmqh/8ccgyy8MV3SYxlYecrwlQn/nU5JD9cppEFMZEpHF9F2WmFLQ/eKUzVKIGE1TQVrKpxe/S5fViKGPTBF0GkzpVDiwYA+upQb59pCeET3f8Wqq9sdGzChjI2j2PfO5cC08MFvz00T6jW9TI+fxOulkkk3mcTbuR/JO9qAx6rNBwtJSGLSH2WvGR9YeT9iCyUBFXmUe5oyVeK53WtAZtcziQBU8OxcOMzrX89OaaoPz/u87mdUdjCUwvD0HOJire4vT4IhL0zSUQMXCMr5JLyc9mSMaPfCvFq2W2J6seSQQowT6LWV1uKg5UUA5sy7xjv2L/hifmeYDyIhA5bYiD5x1MtZeGUnQKvbGz1raqgLWfVe1ScjSEvUJocfANeToI2gf/WC7qnSft2dKhtnJRZEFhdbvXbnJ1I036VOSgpa4+aPMMVvCDkf2QkFtTLwtgrQ0Hd0dQCQNP5Hi4DE1rsH5aroH9WbEXdiKlIHnBQrX6gx3fDV2eLvCQEILD9W19xvNhOUjnjsayZFM1EqSbATdZAmLMYxHxlHPfq3QaF9eB+JDeJQdHKATp+1BT/b9v9tIrHisqRwcaL2MGDuwkEiWxOKRAd4HkLAg5R1OIe0T/fzvE8jFP+CZ55awB9j7d+FbWBOoQYuC78KAIVLvVYsgmeXL0N02H+RmZLuUqFoCGqGP9IMMdd7+C6kDciQubnCw51NpagClhBeOv4+vbSJ/i80WtPVF5X40aTp5z/QewS+UUBW5KhsPUyI0O1dkeaSm+cwaDNhl6464Ro41qQci2pioC0NAvhrYna1Sy6IF3C0UhF1QVkRQA5iiEWdIpwfNp9uGRaXWApqbcBgv0VtAhVCSnW5GHW7JhPdXDHKQ+0YzpUpgF3Q4eyWdLnGxrKIymWUGSPFrRgrah7EumZx6mYQqZ/JPcOJvqcP1Us8pNJn8fo2hjqXFw8ngP9';
  const _INTEGRITY_HASH = 'ecfb526e5567702c82a90f82363d3f4d596287d2c0682ffa494fd1c441a0e5c3';
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
