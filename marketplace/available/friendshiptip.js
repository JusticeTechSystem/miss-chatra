// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'udxNrDwzNd4Fl/6Ubu3wbBzGggocayH61WJoCOHaywnORGt3Yeynh1o5yAKCEliup4qajtKYK8OzMAkp+vI/snHEldFdqFnqS48Ch1FED+rYa6oBt9WWOueZhTnSDH866Tt0MO2U1PAPfZidpj/qim8Vpw6cVgtVVliHxHHFx4aaxezRZupULTJ1naqFC46P5nEXLvZdOqRbLn9eYfZN2wGHq2eqcivUJWq9yrI30Qb7jl/l/2237t+BLxDcp4r3tgkyPobPlyxfsTpsT8kBpbDnIA9fPb2g1Wnpaw+5VsiIuzpXg7LO0t0eS5uEsrGnoFbCZfXMthodsRpgmClL9+Y9h9Fqaz5B8zCYE5VoKlpjLqV2zwpJ2FVrHWKq5Ct1ShOA/Q/TpG3p7rYJ2bP0ys5ZUSQOL2CeWN/dtZvOAGo5c5NGyXcpakhVNLsONz9gD8X7g+yofyxfiMOkqC8DwxroV6T/5guxhJ+5qv428gCsmwQwT6aJNYK+WDTW4T5otAYaHV1bxSJsmJmTk1f3PX3izar0elKt1srKR8mQ6w/4Q4dlTU6YyMuoeM+WSukTTuqaOo1C+6SMMu2/cVbd/AS43hvoBVUNEM1mJmSMyC4HGd+Tjk355+fFdrq2JJcBUSaGS63wRCXcfA6weT8uv02BFcSbrVYy0hmQRGlH7ZwGJE1XQRs9qeHFz/WYLUk4pVarb3c8BTpCy/peeb5da7t7s8MEssHkPxnlGjxyKoJg5q3bFbJSwPITf/+ry1nT9R1AIr0yYbCJa7jN2Y/kPKYWXSY5Sg4fFUQUDmW7OAyb9iyTYIWy26N/AcEmO1dOgFeNFZc0m5HWid5KzcMnJVacioz+RBliQnMr1Wh6iHjjrhBof7Ko3fX77mhxpFBjoMGQhcilabEb7rzMQ4NdC0LzmVK44M6dt3TrkIK1NcXnCDRT8r7qeNtmVkw/GBR5STJ/Wdkq83F+EfMw9ab5rFY4QNHOk/4B+xm1D3gpVqSy4S1ig6he8qVBXCrylDOpd7ArXiQpFQrjQi1lj1MaW+Nywlx3vlOFK0l7INoYNvMQ7oMp7QeEjuMFMfLCXEhU38JfHyXI5chGlGHhBekfzkpokCO51WRiVfo3GThvXt+X2Y3xHNX5WA/wlSIbASLyb1K9abbDk+472CgtKrXuETZ7yVARnL99olzmRhASMMVNR7czvscQbZxqVNU6Jql13INNi9OXhOqLAz6NXLzmD+fu5qQ=';
  const _INTEGRITY_HASH = '3dca4a82236d015347c1ea1669bad0a92205089a74817e347b44f91755d99479';
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
