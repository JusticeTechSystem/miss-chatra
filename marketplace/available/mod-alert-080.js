// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mI7BdAepDnkKhFHyrnYoEhgrK/TrFksC9YEgVIGDQUlWWEKO8bNZCgtdq+NZ8jlbFN0xGUpUE7Nm7Bue5NkLGVI2mGCdPnkTsHsdRJ6XrD5eYI5cRpqFj2hlWFl8nVTDR7bpvPZgNDZJcCL95SBEAPOZnXkIrPIUUsvGnBIWVCKDQYMkKYe1RrjvyWxuiPxpKfI9XUjBcqWbPPBiCD95jzrHoZtKFs0YHKUeLdJSIPHzxX350gUx6zK7B4qa8jnmtU4oa/Syy7gfqX9BJ/ww5lqL1AwQ2DcGgPmNa7wYSaF5Fjy6pCwqm3aspeBraDUoPCxsdxJzVfhWIVNCRVliSmGYVOJNJD4n9sr8HHPVnOY+W8KKf6ywhviSvqICvaTMcT3429fm5RlRJ1Z4FvlBKsUqorEABeF8wkjs6eiMSTlEmOD0fDsCKg5+CQFbvbFoaWByV3i/hBpfXLleRCi2J/K0ESi52Koe9JUvyxShR3U4bqkKnrhU3dway1xxi6YMTdB5yAEnosUYlXjxs6vuzo5QCeileEy3gGcb/s1uHi8sYcLXQFYQnpa4M+Gn7wk6ObIqOjrgPmOnwQ/gpfkPSXwJ8S3EjbNzYZzCti6FZGKIoJtjSVHCEqggbWgVSkFJXVAKoPI2Zaq/6VjL83OccKrvGQOBGq+ZZaFk4JsiQKKblZQSezqUHmpGvik7D8UDUxFFyW06K3Fu83A14iWEQe4qQRf1E+HwiC04stOmwRangXm/xwEFgyzIN3KdMfmUmL272fLajQ172/LF1myuobbTlC0Xjs4c5E01XNpGUFVPXZhGZgpJ5mzEnrqmDnPMdKYzM/XSIhilocLz6KsSv6A0qzZ7mdCHdSTD9pH8hqyKhJ6ot5xbAEu+kqymsw+wp5eVceLc9edDOUh3cVu6dv/X6YV/f1ZnNLrPU8WwtzhxKdNouxiEqwARYqSijQmWV1HZYHO/OXgj629TlyCIJTiT3g0msfK/h0DqhdLtnBZLRQljdb2EORMmsCQr2opyaT+SrGNdN6OGjiywOtGi2OAF2vDYwXhL13truekalhXlfpq4VkmipHD/hBWGu1ScXqzISztAja3HFnpTZOGzP87QsPKG9UkD6eI20r3p4wxKtCRPWiNeMztdHmd9Q2nlERzVXDqXX4UsS13Dr8NTe0HBB0ChcvXEjeEiyWGqlRvA/MsaN2ZM8gWmw2aDUTrovqWxkmUADA4TyJhhobja2ceIHxktx88HLw4DdlMrPJcAXgvM7OJ6uuyDbQwyMi4zVZbJxb2pfcnwMvHHY75piUlvcMg9bOdJfzdRTOLQihwSOVOH/Qas315FNM8zljT5AtvSmrXJoeeWaU2vBXaENlauabZmQ7qnEQ==';
  const _INTEGRITY_HASH = '1b5b79cc691e809195e16485c283e3329219c1306e4b9f15fd589c9fa37d8881';
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
