// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gyxAZU3UL6my1vC6oarI+XYagFDjt8l9YlK5+JSRT4byE5mrQy5wn5MnrTyqUCNg4ryWvAM3llwXGi/Rk0a4TzaPJpyliyBQVDZTkos2f/xmj+TcFHq2EGdJ25FCZ/JjsRrhSJgyu84kpkP8/pKxJCii9mFohWSPi5P/Ibb91iOH1MAtM+4rTjVWj8c9wio5FztojE2wWtWwL1ipME5FRKorhaTFQuxMoCVd0H6+uOH+Ig9eldkza+LINVkwRx4FQsrmX0EZQ928IgKWKJbI9Ys7bnMVZPqFYxE4XHj5b7DXQgKICAIJHjlPrrwRBv1TPPVyIiHYX6icRR1MibzSR+9HI0PrSsoSaJy+3cW3+nGxPGlGt0K/jbiykS5T7+2rsic9X5zz4szX7LdYZR7GN01uq0+CGW9C4svbSvJGcM2W3WMeTAKFoYTJTTyS5UaUPKLET4jQsZexVnaSGs8L7QwB5OCNMZBgISje3CyBzjYki+NbI8oDadcCqiCOAZLdZZPoEnpwVZ21ww2xNHmfMTg2vuQLuHUKTIJTkllYi5WAQIHQPo/UnSEMpElED7eDvFjm/zUZErrB+HSgUeqnI2SdYSgtPEALysTSikAyDLZjkzMo7aRtF0F35ibwQ+W6xy3ko9yT5zadXXitxuywYIWHcVFasYeT4bsnM6etzHrGVGHz0Ic9/EhutEXEniJilCTDqvcdu5sEY0j0KUzLaOaAUnZ8V/FU8oT6sTK44NbIArQ=';
  const _INTEGRITY_HASH = '17ca9e261481b7a8a221a17f63c7054ea6d039d57b805bc31dd112a48619c92d';
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
