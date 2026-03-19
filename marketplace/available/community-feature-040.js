// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F2u9RxVQRTno6h3FJsqkJYmGTa9f5BLgP8IoGWlr+K7LPEbga0Q7799BtFf6Du9R3vUEForcT6lUp7uu56bfYJeWeNVgYKL/MvJa4qZc8r77ZJqjJURvXzz22aAq7LFMzNO1URLwDLUh+G99RKfHLLA7enXRq4WYZfJS8fA4T1ThN0LKacvN3/fO297AgodYIL+oIdiOWpckSHc0BgZdqYAOhFHvsxFuA+IavISiQZsjzgFY3WmQPYgx0obE9Br3JsrpL/3fp2oILW+rkdjiAhxeg1HjpbU3u7tNpv41myu6iCDulhzgRkdrT/mXGJiAQRFYVJECxXcGeQunZDTJaNHisPQfr2NV0UQT4jgNWC9eb6L4gHR8uTCWoIYIoyfRyNkBuyIOX6NWOyAKWlHAx30wvtv/K2v1I2BIku84xTzbZ8ceFrXJpBzchAVD3NdIkkZ8UHbHSvOn+g/BqRh1+NL9HTDEMuMcClUPK2aD15HA+F1DkXzDg6AmkmHvF4+VD+8Gd7uB+kdWRaBiwboObZqDKn1aQrqPZ8Ji9veCeQ9uTS6aXVlqgMkeG+4gOmW4rLa3M6xdT5yBYFADcyRIup4zPh8UQh+z02nPjRXxRzUJ1VHRe6Dq4dbJ7GGTpL5RDOf/bCu5XBeIla4Nmvo7Zyf/PquTGR4/Le8lGoZn1rinX1EEIfI+yzZ0gugNrIPTdBoEIFat4N8irQg5gBAuQzqXudd7UndO+YAPaTR5EGeAB433e7E=';
  const _INTEGRITY_HASH = 'ebc0825f8542a95ab75df9b5a8046b02b1b2d5edb5ec1ba5de5db18639f310b8';
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
