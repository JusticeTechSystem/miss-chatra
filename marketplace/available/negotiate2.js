// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GMyKO8AQHjnbFEzOhIFxpqG9tJBPt2kHI/oCc+17zCKuBQZNjsVz914zaB5yc9b0N6O84XnT6hw275H91+gTnCrjMEGeNDdtZ1nYjgyAN8cnQKptyD8RJwcCm6PFeSzd90Vy9CArTcZ+bYIsoS6zY8TzQjXPX09PLtuSP72m9rS5fSQ8Za0r4hO5LDKPIc9CQlf1J1BVm4kI2VFz/W/C6fZ89cpQq1i8nwB1CTuaSvE9rxjd4Ioz8ua3rbV01ZakAg5FSxquv+eP8KcuiK+wqfD0OlcCe+wrOw0PYjaZO9RqdEd60kQcZNsNkpHWallemB12vdV+nNW3cRHhSYX+4uDeF0DianmhAE3VKStToCVOKaKlDDgfaIY37O0Qtk9qrVE2m1cVwSjF49G31ET/iOoikgYJDjzVIiQYBslcugLOVWxxOiCPhsux8wfpEz1eGzBQZyxj48hLEZaj1e8UgIPq1fwztKMaGGbgtJAv7xYRbngbBtAjBeZLJXo+G6/bmlhMHvfjtHjk/rIKiExjuJ5gUMmNXj/TqmGelodcGTZoBoD74rSR7Mjh8qyJnnkk1wTuvWxxLzJJ092tziHbA6f+/A3W5N6QV4KpcXISV+Ryz1bBmTtLaRpAA6F8xauU2LatftGC9WsSf4paA8irrZs4KhPedyjoxz5e82BTTBXRciIQOcW9IN4RRUPSkk2R3MMjKTbTJhz2eROPDkm1D07n4Oe8B4uJQbKkeQT2JzQB5gwtXn4zD8zQyCF7qSo8q8+VEazROijyXp6F8q4d9HVcHKBSM6PM8uIfhhruIOtSWEWQnWLhuVja6q8RBjeF/YjgzJ9vwkAWfVIBf8S3t7KdAmQJ3cwzG0nQexJxDTQz3or4+0I/kTG/s1CqDeysk/PkL1msFd7XOcHXSexJtHmKMIkd+mYrlwPm/dRK52ygrWFNUJVzAC5UMu3Q2xBtdvYmMq9S18VTu8rZx2GC58xaUEf5DS4nq0sXrodm9ZBNE37OASFUSVQSUeCoDxcGdW9u587boEOC2sYkomA+25g9gx7BanNCKuGwblyz9MO5Plx9Z6wxS/LEYlsRoV1dqAZCB4ssn05Qhz/FXF/vqlbECGagYgGdTcarsrSk1YTAokLpOk/nIO/b2quVkFx2TEGlSsufPZVRwxaH2nEHJFo/RoVuo+Qi7byschAjDB4vqJo2mhmCXTVTYRGDiKSZ8JSt5TVB2eUCLSdXElP1';
  const _INTEGRITY_HASH = 'fef9823e95642f6e52d32af4493c453f031854459e9000c678ae876443404735';
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
