// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6p7q3c1VWbfJJLrG5jXV5t6hZ5AaJ6QPbgloDxYD8aEsyXd5VSkhmngqTikIcEcytTa92iO7VtMgJGE6+B4fo+HJR3sTy0kO+29qUL4CPH2vx3ALWrgQLIJMsqHQff5xLDkrBMpb7sGL8mGZ4tjrONKDyxocsAW8TH5ucw62FprvHlFGGvsHvXOsYzQsuw3Afg4J6eywsjrBbQB8g0CfMqOGeKLn0e6+KNrSoVCyI3uWx/8OfRAJkKwo1evdhGKSTtzhCIJlWZxzOa4983Uv/ne6EbSC3qzl/Qy+TtQ4oNphgJL2UziiKZNnH1KSkWSRyE4VPEtTpUQa+O7lgwW1aO2pQSBHtI4wqkAKKtwSgQOFZO5xyej4B4TZgd2zTzhHS0pN8HTNST3EX1eqBpJYISXTSZtqzr+vQBazLJMiC/lVDrsknV+ajUF9qG8ivj5nbQm8dqUIx+N22zPAnl2oyK+jpUhtodG6397bEO65zAfe2TpuSsV6fYtnSsMFxIZfPWJXS4HX6E24zlyu1DycdWLaCzpqMSo+F13QJqcPos0vlpY5G1kgHieMriMogTsl1X4Qe+jgm8P88bEmXhYdJIxipN4tCC0SWaNJamJJ5Qbc+zxi2BdsUwJyLbtvh/5JkluI71t8KSF/cFzL2HTv4WKOIzyKzzBc02CX4DidTKNx1i+XkYntKEa1ZENaJT6NKaLKeMlhj3MQK/efqecK6pw2mHd+9Gn+C1HJ0AGV8FJI3Q==';
  const _INTEGRITY_HASH = '01ad0d9b296e22a1850c6fea1fb1f1ba1f2d37af259478acb89315d99374b1d5';
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
