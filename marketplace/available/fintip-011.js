// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8tGa/QEGaaw8VXeJwrKR90KKutn1rlNPLvG8EOwVQ8PGyLgMRyRExvJha3HyzYUZN4jqLEXNefsMT3Gl5BfBQxsPq7g49248RVXY59akL1y1Ti+4EsQITHDN3BN6Jf0nvad09K30WDBtDLWBhABrTyqO6LClKo+M9UgAL0FcGAj0+Kc3tWFTH0JrR4A/FiiDDPUkVq0nU/tIB0ORlq736zz3BjmEK7TPQURbBNaahj7IHVe03jTcIlKIR2YCYroNuQemJ02x1pT7qoOPGjfYlcOiJWwPH8cWTVao+MZ/iSkYJSuZYY0dDkkehxSJrbOGQunzexGQ7afUHJfdgaYEFWmEpbmw6Jdi+u3wkFBHrZWBrT6BMQDSc6CvEDt3VFRcIfpSzdxtkygj792Xpb293icUMo9QTjEt82H/1peoORTDZDn6hm41xXikac0GTXtVvflCEIzZ1mgS4F/ciWY3mY/AjWucjsJv5Rl1q/I/utlyQhU+I1WG2gHCZ6YvasNZZcSnGjPdAKHmXhOD+dtMb8x9skhGcRQBBGRP0kP7jyFg7nbBNM6C6oEVES6h7Ndq1VjGR1jQqu4Jdzr4g07HnyEkKSt1yCjqnwYY9dLyTwypW8gbyZ9n2houaMmKSNp64nlR5A/cadRp87LgSFIR7cp25RWpGdGFMWWgJS17YR2ZUWi2G9Vsenyscj1gfJ6KK0GuyepqZnI2El6s1ML4NarHdCYAptYYcKl9cRrFfZPzxcdbyp9RZYOTx2KnEMptlGHxEhBCYn0XPnMaNGwgqAzQSWIN0XMKB2hsg10f1eDvaFc5+tAvOpzukaMQIz3WF12IsSh2FkMPYKBAYh0U+FndMn08zpLLNSDR7JiVDomKVcHHlqL/EgPPwQGn93LKbKq7H64QeoMH1pQP/gSGycqRJb+1gXfUlCLnEcfLq+lmXEy+9+/YViqs7aJsJpTl7ZH6JcVIUBPammIcZW67MgzrGQMpjNajRlnCV9dzKJDOnq7mCwS2pbvyDTr/c6I0y8vdC3/lJvaUE8qFH6QU83NJRCw6eK5tnGrgtggVyqNaZw==';
  const _INTEGRITY_HASH = 'bd51d6a9b43cd40de7fb6e0e2a27f7e29e2397e0f9a837b0727d14c97c91a4c0';
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
