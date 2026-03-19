// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dzbpTjga57rIzOuuww2bhMZUZXucoYZ4AsvTizR1ar3n+zhasORdXZY5FVYPDgn47TERghHHtnpbeiKYnXLbcIMuxfwvx9r9rr3a3zaD0jzhHtSx81bcwX3WD8vUwP6Pbc70Uzz8mSBMG5NlUIboSK9DLShStKKoxIiIwn8SouESOsHNHUhqZxcuABF6ap1Bu3FrX3fO6Ot1E50XtJ+xQ97DXpn3UU3DnBQOGbbmBrkKqy6rMGpdA9jBSbtB2Vavqf6V+6PZQ68INTapOsZ6eXN2Nsn2kJrKXSFVwjIeIVHitYi08FSAo57U4sr8ZSZosoB1pce+0g7LxvgjnBdTsOy9nQ8YaTRcCnNW1yPEs5LEryz4pADCXAp47sF0h52gUJG1eEj0eK6L5DN2L5w1796TIzjsMu7rZhOiJhJkq3d/LkduZXB8WSAPq3IuyjcYt54xTNPJPadDOUD0qM6LTCyd+UMuU3GWCKZHErnvuz876bN5pbBKwULjh5hbuHdiHOpZtvvZZw0kce83EVBmfKKplGbrVFRvheUfG+rmobOM2pA04576swYQuvE2Vj+/g56CJ38/63RD6yiLPm+qZc0yqLK3cUZZYSAFxBrvXQokS4k31VjhYg5OXenzftz2T1gmhpxDWbgmgeL7c3HVC4MLdhJ3TBwJcSLZLf+1OLGoGkJNGrH45zCuKnQQq/SJ2iPU71WuZAfa0N1cQvVzTOrUv4LPVeC0LtUvuoltexpp0VP3+di5XX30AJttxKSEBGz4ed0EWyy7Osq4Zw1wOHSGGZm79+Mv/FQ7SXoI0Kc2w1OE9PVi1wVW4K68ChFio87HSKBTAtZix4GTM9Up7n5wYgOIBgoJIIjv3NvaO36WTrxqtGFaT1rg3iUQvBhQOzoMo/bUWf1NffnGVW0JxjJMHxAVc+LC+QKiimjm4KT+f4I7+rxtGPW3l3VpYkq0eGb4Bkk0Y92MTx4mMoCbGf/yRCkX0NVwTtp/LipNI9cOdriglSUWKrsO1NRctZqaQw==';
  const _INTEGRITY_HASH = '972de3678f7783e9ea5c71c3d01a307bba03703e9a90f4829d0e9550068acc4d';
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
