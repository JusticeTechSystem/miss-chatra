// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n5Hl+ntj2EgeywhbB2buU0ehGgs/c+or5wOqtksJRC/LY/dL4QhpT3lm19nXnWM3YHPoohh2i6oMHtN5uTaLcUuhj1tu0IduF367y6eLdCJHa0MtVjOmSz56XecO5iS2fxH3Kc2lAIl/BJliF4VJI1cGN8xLhDoKDUq/tg2vQO41pxYsSvGhvLUY9SeLhvs0oXEh0Dy0UzoLdPeEZaylxcru2ccNt773ouJURh5rsCJpMsavxBqu2bsfuZViIyP5YGStDDt+PKj94BObQoBFZ0prigIqq7KyNCN4IZA43IllgSFaf8Ng3+x4RWIOYEXqwgiFJJB3uTpNCS3W0FLgpElR2NpdsGGH11uNYjIXW4lDz/VUKX+1S1ep3da0uV8C45eRQpQ7x16aHyKm8Tko/oSDLyUzVAmjcMhucBoPLLwTcWjT6+C2Vwbi9fqikuanUCVG2oZfMhO8PnJQ5CotehCjsp/qpRfi5VUcJ573HweTiv7ug1BP9K64TRH4P1r962tVG7o9W9DqaNhad3IEUIX8tBKxFl/CpIt6oYTbboX347PAKLxxwkMuJ+rwMcVKpjxmp9+N8lmJgbFC8DLXSferSXvbQDpBbvQPvxnnI5b6IFYUXvNZ03DvQJ7moYzjG2Rgyy8j04TLmZqheU1E8QzZoz89zdKU2UxrieSZr7Mn8cMnF0AcIz0/bEdGWoT6Uzr/erRVbyX150iQwoixR0o0wetg8xxNdtM3zwtZxTV5nLI09xs8nmbUApT6aYpKffiPWw2SAMrc9ZaRvjZyksnKpbuZPTSfM0mZDNxXs3EIPl0vTKVGXENGVc4xkKi6DdOsZavMoalz73sM0nPcFVOqaeAfuAMjxlJoJUBuKvjOuNUj5SPzNlo+mnwNfzwz7SeG7jx/xaS34G+5mZZShQSufa4IYTbt9pe+2vJqQnKfOJbs43urrPZmR+O/nHUxtpCaAlRJSnA0ElC4Pn6vM4e+fLhFRTMVEZgEITKvjnoiCc+m1eM/r9JpxBCc6OGEvX59Y6Uz9yyYX2pOS0YOnrXjuq0TSVpu0eMdkD091gldOZyBSl9hxkfKWSCQrHbFal4nZBXUC4HFdxV4vsIjSpI30DYnRcUqqMg62zrrnrdUj1NghLixICJYycKL5WtAM5QJ0WtCXoIf0htZGKiZ6mn+gniTaS1923Omv4X+UyCG06y9bPNGZp4cw3B4v0BsZE3oDNxRYYBCwUvpMA5SGoKBxx6APVLudMx2urhheY2lrKbdl+o0usYKcPTHpxue2URUmB8viyWv6Zk+HMr+9oNIWPxwN/PPBXntvIJ+BQ6sSPhzXVG8G9GNaj/+md2cEZAUZAQzZ5gq4QdJSGblTfnchC/X7Y8XtkMUzKgUN5JaYHbDe1633w==';
  const _INTEGRITY_HASH = '03cd1bd4cee8fd38001c5c32d38873b5970384390e84e340b35bd68c51331f1a';
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
