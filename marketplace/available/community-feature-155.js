// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wI4HkN5Qwo+wx2kSxfPLQF9v5Kr8v2ZutIZdeixRqR3aQpR0AaB3DhdKewHcGYmDhVOByKbPKoc4zn0futLomMREFVEdWSdMHL5lZu8L9Q5iolC0SqU0yruIrIdq8I66g0Q7LrlMpnayQMfrPjIrk/ZGmCZaDjEh6W2qJmEMuf2LK48OXYQsc9xViWeFfhPVXrekmaG2dY7p5374MMeVqhbEShV8fTaRpAcfkdtf6/JN1FGXYbGU+5FXMJQAz6pXLptAXDogIGc+hzOF7NU2QchbjFS59Mzeqlj1FBvAboaf2sgv9SRMi5i0j6toZgP9iwgh4tDjNb122ySz6eZCwlcUdbinI3Py7DyL0CIdaG+qmtv5CH/BGQRhKANhs5MrLf9vR6EHWyS6ZERtJoa+1CxQ4FDJuTJEeybt5Rg06OIJF8TFDYG6rfO70MIOhFugxLOTjbgUwc16o0tgWbjy40EYnCtnIj225BRByUHKNm4Dicvl9/Q1rIqNdrsaB4PH3EGfTu7uldDjZJXucYz4onPr4kviLrskTSpM6uhrsl0dVArzCBaZL9OSxcFL5Kk0qkwFy1m7cSUX/01sa6KRO8S1J+GmgTdR2VJoPu4rMtmvYm+jLM/bcYk7yCDhqD2THWLqHP6diy2zJaSe2YHXqyC3TO7gJKPQFeibk7n8zZ5uF6gJevy7DPFN8cFroKASG3E2wxwELyIdgOR9lz46yIYJWC/AiHaYsPpAeHzmiyfRQJrTz/7zGVH9';
  const _INTEGRITY_HASH = '364a0780cf9f60a13e1b673fe5f322ce0b5a5ec0d1f8be51e0d6afa2ed2cc74c';
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
