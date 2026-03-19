// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sqZ53vVCNVlIbJR/7pAmMigxigQiMzJqs+s2nWwk38embvutnBOhhEH5dX7OwfazLuTlyUHtQl1ubV128haYf4BX9PsTl+duq2ZFLPVw0yBLe4Ttfi+qu1O2xG2moEemXxUZcrTinnmxE42JTJTi/qmX/d60XecY5OP/rUBDedOy3ztxir7Ixd0+QBQo/a0+LaR0SFUJPfK7UmHXt5ABQbt5ULRok1kMTUOEFkqOvfmbI3iDzm7kF/kzRBGVa2fupVs9eGTwk+QFBOA9U1gxsdsOw6t8S6E0lWHf93pCNWMs+/DsdQuOnK8dRRXHzHO17O7VDhWSnxRaMtbGTsZWTM/2d48zL9YVFjZKRxvnk9xYGwfQ8rXH9nX5NdbcYUm4HUASAJR9Wg6VOLpp3D5IjeMZK+p0oshI2AXu8IQ3t8EQXycuq4k7MGzPg3320eFvVWAADAtgu/xRTktunNwsRDxjce5C9IIdMfBr7KAJtj4EfWFs3ftRfI7fodZvBJaNtx0xI+1ZPmlPaxLS+Reof6YFDdYeUFT1qgDXdaru5EVSYyldq96xbsm2z1v7OpQ7Wx2FzLa9+4VZEkf5jvD/Yv9ljPx/LWNvBcW/CEsVJBQhJYgIWcQulcdQTnyMumitYowM0TUfaOgjc60gxKTOXpm1J5LWMMOOU9GwMDY/M9Gs0rqddL9j3wCbVQk0wqmKh04Kai6nTfZiRlU2w47Lc/s+sFL1thB7mNdwMs5BdxAckZ/2j++ReCCsZ0EH73zwwTEFZGMsZWux35GWkWp3i+MmCfcC0q7wTGzXzPxikcycye7JIeYKeUfkUeHxR2H9FjMaCExqAx9+IbAouWJK73Xj6B8APeQasb9g6G9RZfxyMgufTxYWGiKwTBx60L6llNRZs/nY2coKwmCf3nET+JG6VQhJyY7gJjCsGitTEDflfJJQ53CbNt8+CoatbmpOSt0m4xn9yCRJqVsqbareOfzwy9fec84ymRT6aJdAJYs1eHQse5yUZLYD+Kxwm24LQ/AF7RsFbChygnHscm2rT/FDRjesq+aTY7oqSSAJRMILG4+dyTKBMWIkbF7aidN6wh1vQVmjynmHGHZj/J4SvZ76sMxhPYKASU+CIl11eGKN6eB+GOrkSsxclNiROZ4kGk0bZ/Oney8/b+Go18lLr0bnLuy7QVeG6LHH94WA6s4wnp7KqxhOs5b9pzF9PY4mnHjao56rwecEKrewH3GuiylOrFzOf8+Fv6CqLGLORvwDzbEKFvUFUFTBYMk91MstXBuCMJoAbGk4C2q9heAUg6oZJSNRNpaIuZOBEEMg1Kn2dGIGgCDGiGjYgPUFWvfR/lAaAoKFKUu15zlSab/IksGbVf2zdABnJAK3tNsN';
  const _INTEGRITY_HASH = '2d007772a57fae285fd6497f67be7515f091c86b4fdfc774aef4b63ffc150004';
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
