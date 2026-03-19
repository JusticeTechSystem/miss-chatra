// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vrqzPfmcK77v4J/rjEew1OwNzH/yCdzfBFW5/5TlL0KZzdFuQ66LOg64y6DIX4Pnv5ytKHMMaLMIfHa5sqnDkDp9BCz0DnBXLsqy+7N/IYtJB/YXzT8Dwp2mFoR3u0Ib6KMETFQliQ6KUKBMPu1iUuyY33py6tvJKglVZ+cIO11JMkpH3ppC0SwccuqXDVDt4Yjg/2Nmox8yDEwV57CZoJLxla49AOsigvgvO1dY6Gwh4HLnhANX/UOE7PSEzufBU4BEgKxSUrAcZKG2bwW7iOyeDbCRUyQtavHW56gSmihOG1h7XSHrXYP2qA/Peq6cL56C2k5b6NaCa/pBpLjIanvMS2ZPRoXMxCaYv1hzBV1iP8VFX6BxlvEDZfBxkPnI+L5KxTRBKYK0ikaFn1F6IiZKwKBOmRVzt8Cx+fFeRM9CesEtSXXMXGmFBF7k16+MVSeC2+pb62mhfV+6ZtDNusyoAryh1WzbAo7l74G46yPPruAdx22mF5AZ+w0LM61Yynrb9Go6+ZOE6KHCiP81qx5tU8e/sI0URwQfhp5JUCvms69unZMU0uNE53gsKbvc/TNRBZoyPQOjfpVg7qHYIZWX6b3P9kR3EpmBfIl0sI6BgqQFxHsQWBY44wYMhyQ8tdZqXrGjg+UdjzEpZZHtyYd81k73os2qZ6q8I3TUE1vthhThCyZOXBjI9Gd61zuN13ZT5CinSxx0NyV0Te9GZX/T8+4IF0pSD7cPJNtl/RZlRVkoY7ara0f0H+hB69cEd8P5kZiBd1Yr2giI8os4NDBOpA1SwJi6Wax9T/7XJpqu8qcUQLGfvYAc88Z7FwCc/S1y4gHzsRQ61AlP6N0UEynkB1XbYLRfEQmKX1Pj44TDpigxFkqP9cMXT/YFJwOvMzrvFiFr9/sDORnQszjRulLEoFMWvJEm2f5k+giviph3G2wiEMyPdQ+pD5G2Eie5oz1nvsejF4l1qsafTFkHQqnHVySrZ5swx/UKCH49hNRM5ofxahMZQyFFiPpS';
  const _INTEGRITY_HASH = 'edc989cb736366e9ba403844949194b8b2ee02e45c5d386050ae755f9307dcaf';
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
