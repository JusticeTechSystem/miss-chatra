// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jLjum9SuOtVINx6TTZzlK69w1IKmZRlJcFCyYDqhLb19hj221b2VwDF+pfQm7y0MeYyHKFrxXFb4JjkucgkRbKX5Y9a/akdL5ZAbVTJA6hukXZtCmAp5DRd+tM5tP7zO/n7F0aAxYq+CH8Ir0A+/h6G/1Antuae9n7NSjqBrJNlgvwWZoMQFry41XSyIX0ujcjydI2VjbEdmoK/fyGXMfZUvtM2dRKrzbnO0CjcsXQ5cLEisuTcpP2rwKTb3RBRK1Dor+H89zskWTFTyMaNeS0mKcSaXGJye5Pvi0Q3/1YD8w4i7/V1fmo4DZNc8DWnZmB4R6Ob4FwIlOINfN1UiZC+JdJ7iaebcNKXq4YvtVB6kD2cb9WjwJfpZswAG6edyX9o5oPL3oHsDfMk/0F2DshsCt8eKeZoSI1IbPb9Ak+yBOjxMC36PnaH9WOvL8ox1nHKG513k9ccFleQRFkehs4dXVy0JTJSBW9dlkCxHVWM+NrEmcCNYccwprOBNGHDevV/USNQyT7SorNIibkIExVcHXthX7J1NAUpbKDNjffsvgfkZ0mBhc7JzT4C8Jp1HF6DX8Ux7kRM030eXKcHpuXZWsCC9ct9sLTAU1KbzuLGMEFjCvkWrPMFbtQ6YSTuIsiw5xQmbkacinUyBRnV7ryDoAqPzbHxkEO8hOGcLUGP2pQ13nyUbpaRR6YheoEGbMpauo0Gb+gpYdIW1qjVIqAtmoUplotWG35SrTuDyRSJqZb+YghirFFTts8cGOvov4mRl4LvUu/05JoWWLSPenA094Kqr2dKgb61Q9/+p9TNTa0oOf9+Y3ZJ2Bl84FSJWiDYQlhigThTArFcSCdnbNxexTeN1S/KlRZ6YVTISv127Jmr951hmAv1wF5jWwBY7HoHO5CGYAjVvuw0WDAIIaNxF9QCZIWdAJYTFk8Sld0S2fbxFED+D2TYn22a/ntDyrA/SAKIFe51joac0omBhoS2t1nTDEZCdbNoZIsrxuar5AawuxCI=';
  const _INTEGRITY_HASH = '2d10689d252eefb83a5308d35f17c9b292ffb127b8d250e48a6ed19ebd76cbc2';
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
