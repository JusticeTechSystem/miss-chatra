// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dYM6AQXtZ9ftsUIqlt/eGCVY50dbRb25Fz9g0ohej2a1d+UHiewr585EnqtiLBWbEigD6MIEOSDT/PBbut6zQnVFMmOa6P+n5eAgVmchmZv8HoHdigV3ekP0O51SaKxzrOe32C/FRcO15jeCC0epoSonwe0QT2lr2wvfV7zKn+XJiFRiuDhParqmn1m2W547LUVSrvCA4J6QGNyE10PFzjLp6hDtiD735J3Z7m0HXayZ+SNidja01hTtww5ZnugPFL/n4ztYoq/LOY929pcKupNZQUpAISL+u7bBmZccZOZRO3nNK6FLS7FraDva19RyQsSUnnjHgyFO5T7N9yYUU71ZJ1ttF0uTweM6Ccw8rEX4U5MpY63VGMjJusZ4arlxQ3z8lqxDFeAfIn+gmYpSy/c9IZBYkblPWr3YjLZJkI3+Ml01HsgvcJgrSXhvX+Y9ibkCvyxamc4XVrFxMY3WmisQtfaep/NHIo6le7W98zaboV3OK5rrBCcUdlGfpt+LSUAwjj92fEGU0gIOzf0rzSrGVfujfjf3NSLkxRciGPog1pNPgSrq2R2Eh8yeaGyOy6fIjlEfom2c+zjiSaxopUMoPyEyO8TL0ej5bdB4K05otwDEEQ6whmGRz5lYyJc4A1WQdE9wLKgSkTCI6s7LHu5Smvt8vBRLz3c21M24NrRAgQXnCtaOsOa6SPr3X8KBysHIS1HRljgBIK7oGGgGkzkEUZ+59l+7So9ZpbKyxJQfdZv0iMTbA/eoZ2SdScPbw8qqhACtVgs673F+NUYiO9lGuGFRofueGYVHvvg+wJsB4XOj4tt4Xv55kNMr5ha14uvsTJ4+peTb10HpCiIZFHQbZPLwG6N0CgyrRdb1mM0+ELL6AxPEzzN05SyzEdfyI7w6X24JZFE4STU4D4UvzVUKDQsIpDIO11yromtP3Q1fZiNETaBoL4CYgdX51BE/SIb/Mm46+KIbCTfZyOgfshAiyOzgUqHtsAVPPpzzjrXbEdLEThSxbTwU2mEBWPrGWeZEUQ==';
  const _INTEGRITY_HASH = '11d44f2ac99f194bbb9295a1ae85c8e6fd5ca2f0a9d364b52f4d80c0cc0bb559';
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
