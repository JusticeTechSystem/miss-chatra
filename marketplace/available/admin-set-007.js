// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tif8XuCu8q9gV5dW7ZjEuZR7HsvrVnF2ysHybLvMDvy7RsWiREESOe1CT7u+Z0t7ZNjCDkgjhjFFpb51oSrmsn76W30BOOWQ4BqYnkL8AN78u8MsLZ2Y32ACuw8ilCi9EaHVZ6JCywcD3X8Rumpu/WdmM4etf+YbxdcCIy6WNwAbfGqQ/SDTHfgMeX1rIx/AorXaBoMJ7UkSbfjZxeC+lVt8S3QF5/2bc1xsFKW4V2pqvUBKtwcijO4ef4PtQd5zbDVVZL5fIWD7oSv2y/gzQCPSMmhqCiyWp757GSjVH+sYQ6EMDIqtj/qRJ3mUkNk2ohIphiZpagWjBytrFq4ruGCpM890ATkavm4CzJj9DlKi8S6vz9acAdoB4nADAP3zqWQpYXt0LbU6knMoqnUjPFWwfr+IxzRsOwyUMOxA+QJbP5U3+pni1bK1lGfIrlNYo4aHbgkVy2wkfYBRoh9RuRUWv2PF6UJayHvDccVykigp2AQegw6ETcbey78IJ1orc47Zm7yi1vxVtyrZzz/fbh7WCJOyYh6bCVr0R0PjIW8rGPS2L19Xfv9opeQodPc1Id7XsqOsihW1ryNtqtsZ3Jh6Wybr6YeLRjTfK5/M2F/WuURA/LboLi3N8KPfenODGSdgmFwj0ZH60nU+Sn3pFyqKm275o66GquPrgPjemu6CW1Yt1brCuHyvfxZTz1WW97S+AlkQrixVfaoe9YL3yXWbPTCtTPHpXfVFGOKHIDU9hbyvRb3wUXQbY4JrUJ6zmAwwRz8/SH8MO0DgJAklVqBPHGJqi5FV8C0kEpd4MtOB9dyIKz4ReE4nWyYZymwpFfjM/jw5w4i7iq7ZCAeYrmfhxqZ4XmOb8fjLALun3oxpKnfddUATW1QlBRJg7xp5QEPiIzPElbuo1aXfwmBHZ9vXdQBdHx4J5+xwj/JY21z7DkUbr7c6+YLTAmlNO2S57yyVnK9aFi4GmnJXhbgzc3fYR80=';
  const _INTEGRITY_HASH = '99915e983e3395963c00f950cb895d93388e032e5151c99fd91cd4e303f741ed';
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
