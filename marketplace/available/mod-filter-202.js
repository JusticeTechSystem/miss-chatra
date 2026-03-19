// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aVP/3tROU88iHtWVTtKZdFKBMkYjTF+s/n2zd1dSIXLip+MlY1jSQ+p4e+0krQnwmnFt1zhznZWstVrZi0gNa5BMvM5MThxJrjbR0oVp8lcImh8QevjilO5ucj5V2lnp/WSXmnQ62+dNYspuIvjCWMrTTF01H1Mb1+OuZaKa50MXiwbtFmr+m1LJ/hUiZljIRb/087dfq5p3+YJ3OFFk5L//BthjAs2i3oVoeg5Iw3ljgq9r5BfM/Al6TYKfvhWwqM8P1CZJWIesiuMZEQiSLRIMChVo3m6mvanE8PkDvfYF347gZKJhy1zRNVrjQDgF7Q3wiDZdxHT2VI/2L7ruqc6U8AfQn2i7vV/A0gDbsSlTetk48izGw/Qm1q/iOpIhLzUIbj3DRqrNrMwvCwx3tpwEu+pNF3MugWYFAZl+j+5Yer4qwNIaAlK/fUnsFgDTRdN9+JuM+UujIU8oT013wXnzFbLn8vtFvlp+qxcEcyKPq9E394LbFMpkDNyQc7sCA/bz8xrlm44sEoBm20ieBSeMyxQtz0V4v1C52Jbd/bJGkJ5Haz83V7dSDv7iXrb3YGZ77rrDCmmtaxlst4d44WVjMGAL6OXAKhIw5WwNfdzendRNMrjVPNp+bhCUgtzmbl9U5svFxxt9cBm4+KEgVkiXaCX1NqC13MHGJChq400n/tpbSTlIBmIo1pxC5YJ8+NrmI2yKhYBkMvrIPmuNIel9PxyiINamjluCGG+8GdxbCVDrc4TYC2qLySofECYasX0H6/RsRVQZA8bNBYGRRkmbdd2RUg1jar4qJf/9OY/7FlxN2VdRCoOcXBczg7M9T/bQKX7Bau6xI3ov/S7ilJ3rrQ31M6WmQ4XAOdUqLqBGK725JqUyFM9x7rvZff4gCef58QVn1jK7XzY/iZzC+gH5Jxhibw6SoBhhbnKLAupR3xHyr0TD13WL2RSX5an+o0irPft1ZrlR+EsDk0xZzbw0gFkEwrd1Lt0UcRdpOS4hfYu2GQK0EwBWFeeqzviO2peCFaRZ9oHEClbh44u7zVSUxmmOWrTc9dnjZLNqhoLrwlRggRPaBWp+fpYYc9DI2yceuT5xAwemyZdw/+1dQ1zhy/LuU2MeQARKOIipZKXLG1fD+sWBQclq5QRAouMTq0ITXPaET2k1UdnLv9knh5+nAN3o1757KiIaLTVt83SCjmjML5qLJe2EvQDA2dtszSh4YNGZsFVeQ07CZUrCkiF6hIWL21CeTv7SNx8bGIX1kpi3V8c9i3STrh2aSb+EZbADubLT+EeGabtHssyLwXdP5BQsNCBotFi24RKbQHqWgQZ4rA63tsbBcsRYFDEzQJ0skQFk4VdAIfLdmnkAQkH6pPNr0l6ahe0TsA9mHipz+3Ge057m8A==';
  const _INTEGRITY_HASH = 'd6efbeeb58d719d840986752aa9a5f776671f1129eed5c64da12cdf0dd7dbc3c';
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
