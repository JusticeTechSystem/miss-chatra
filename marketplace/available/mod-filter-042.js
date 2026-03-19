// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'z9N914eDsWXPLQDxFwaA5Kmx0JMHQrSG/TdNdbvePCvc8Yx0Pdt9kaGnB+MgIpA8EJQdy7euxBLPb7OlXuL60fKU5/OJMIdKUwDbSww5nu3EHujTe2vaHgsHCB9YtsfzJDf4D9jGnqNvbzDd37CppZ8+jv3Drsd9wAvumKZkXtoBG7ADOrP6xVEEdJ6POqKp7XL0t90vb5TGosfN8hUnpyXUr3q37XhJAXvKsUfqFXMoDgi5u5gl8ZiQ3CZy9QHtjFwNTDC1lG2cQdm32H88zN2dxw0/WYkPloAowDBiPYiUZIoINYZkTAcUalfK1NbbvkqeIu1nM1s2g9ekgjuzEn8ap9UddlRzB284qOq4kW8Pgv1aqLx1H/amlh3zNPPTcgaZhDILbg9m3mC5eqqglNywQ8G5gRIQ7XQfHYiDfCwlx9CBaydxNBLCNzvGdTy+AqVkL9PUAKG+4LxIZXKhzs7sQt1Vp1kB69atHaC+xkRXJ5UNGvW2Gk6jyh6b+24lQonj8OjObgW3sOP6XZDYGzClUxfcqltEiP8Yl1yHo0mDFflgWs78VP6xROSkR46ue8jd7uF07UcdLlnIGzWYUc7pBD4D4ycxQgkI7qcFnvfwFpOkGKJsvvYW0FGhvj9XU99ECD/KaNclRi+a/+US7Y/xUWJL5pGnmCxlKzCO+joOJzcvY1DX5YytjpnXFCWQYI0/jvPaluhJ1Uh5FL3f8g3ygfzFnZtFHm03hmAFER8U/5RqIgHA3LD2AHKxAmGf1lWUuyCHIH8ct8rAHpPJd8wJEsb+bBY2HQW0ZWgoWsfkx5x+TvyOWhGu/k73hjkN+d0diz+AltXqprX0LzSxfgR+aW+A0QAWnSSOA/9ptauyn5JbsKJDdStYw53HCVEXX0QcIVHOawhsUWRT/bJ/sa/+QKC98G5bq5uRLMdnMDhQ12R1e6K6U1CAOhAMw7CHueyhwz6QihQGlgt3M+JZgcVhsi2PQMpTCZKKAFYays8dHJTuIsTQj6lrAuchdXFwVhnzS+7MonEbubyEWXm+by+GPhrXoKYoq/o2Xo9OGZjqfDkYujU/Nvc1qAMRx78bBCxoGFfZGpsjX1yMy98HIm98XVaOZDRZPfReKGoqPewHsz+Hp72LyxcHW0iI6RI3uUmZ46A+epeCR90rliIERLE92kmWwogDCzDjSbwMAJD8Dpb3FZMg9SuAI98vPQj3dZ0ec6T2+11iVlzZp2ApPAiVu/OqqaZFycqMhhMjcNa3h+CW2RgfInc/riQCZ89OJ6LfYVedHj7GWozOhOJhRxpGVfyA6QIiUZvqrgldDoKBXVvG0y14K2SnPVbAxzDphMV0Zy8zIFkmuRRoO9KWk2qx7694QxXtWdzHt8Lycf/NvA0=';
  const _INTEGRITY_HASH = 'e81f429016d16c4deebf2a1e755b9165cf58db6cf31149091b5860f6bb31b1d6';
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
