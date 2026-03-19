// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pUum32sl622grPlqHM3sFziS22VGVZJ3UYcj8Fa6XsgRD1JfWgHenYrmR6srARnUTfZHZzcGgh8Pvi0omD4eOcCXVazkY1EXaJ2If6fBWcBziTaqOQ8e4jWrCS0P+ay8oc/IyTtMIdt5pNP55Xg0aqkVd3bB6zc2+OTMnCWhICbQVWLQSoTamW+4ueo2khN2QLesDPLb6WBhE5OQIZLjE0tXjeyO3K6ceej5skazgPRprVCwi2mZTdb0kApwyh9q0yuZzjfbCKjZA1sIxt+HIouTMB7eRQJoTjjrRu3dwguhxfAGOa89jHTSIKdgq7TzzNO4VtgDRiHVPY/1MUUcOgb0pGto6yk+sMYDriQfs9ZQ7A5w+v+hbB0qkcZq8+zuurdm2mfqcEw3armna6y66MpRtidCAg+vEmLNufc7QH6m7MtPSppu6h7S0VdKMtvnkVVyyG2KYRPI8NgR8bV/3bAGeMhR1/a3zMWcTFaFZnegS/w4QX10e9FBGH6S0RY5gx0LSniujBF81NWoaCQQVOLIn63fdyAaL1DFFmfv4s7bdsZMTjxH8O+0nNzSdv3mY6tvla/MtGtxHe5V8CXNlExyFXa8KDuV664cnAgjum9FPBCWVxQLh801gT/SXpeKGE5M+Y8ZJA172T27xm5Y7hK3Oyjxm2qnqsNXbYE1sZJTRo5d/FJVnSxUyzzrG2zdr/mkX39JlIV5YR04kqnMA1h8tHYNTrQutnMyAACVWRJ13c+XI/ocw1Xn0kui79hlDV2eks9GnmILogKm8xmfDNzg4bzFfhOHXxLUwnlENqgY1y4oMdnchKxJj1urL1P6WCpFqTiT/A9zlh1Fhrcp1cX0XJMfiIzh7BAzq97uw24nXveya9ONbm8e6IMsNsrLFZgsj+kifADVFdof/gSdA5uZvGuODYldbabkkdK0eE9PG29X/D8J7BuByxOa6EFjKZT3V0lQzhzx/L1HBQvm8jE7/D+O+TcrXzIL5OGhcXCpjQKWaZxpGCSNvEu0woAQhNv7CIrOSrYbQX0RstEjvofHsV3GdRnTjmG3oKH7r9vtB9HPSxOX3sIVTG1FmguUeqCj3TLQYDS51/PdW3xgV11x44v3FuAm4eoItUcF5KKLn9+6XPLJ0iJZIr8e7qUYI9Cs43zwbkBqWx/c4cvnvr4h7N3B0XC8ZTDI62DiASXT+pOnMRl9gPC53NgkQIQV76VCK3tZj/xsY69b95LJLVvDMJb6QITRJ1k+ZWsULhdxuydN8dd+PMsYy5Do1cSQ7TMfhToSlSMNDamn2OKt8fed1y1p3rTHbxOmHvy04qoY1Q0CUP3pR73NeGV2MgjoLoZQ6kWXNvno8XRsGUz4yGL1TRgefdq/V3E7F0sEO7I1JOaiAPU2UiEeC4QF/fGaGwTzTqYNgag7lVuk';
  const _INTEGRITY_HASH = '2df466c09d88316bf79dae8444c98c57dd27f4ca521104bc4dde24de62a2f9dc';
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
