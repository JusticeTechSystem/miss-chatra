// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KopNuG6bXUMBrBX4W3d3cQJSvO1LLq3XT05jDIv+XbVMMFJaJrOvZAHE3KYtnqL9w7TNmsAW80Jwq68qbAuFxjLpp6IXaTcGfJLSQK5bNJFuOhjyHJM1FeUKIjkyXNB90mhDwC7FwwrSOKIHacpmC8xSQCxSfY2IGXv7CknYkdRlzG+9iXWlZqapF0VKY8DopJB8lsiUc28w4WWW62LzSFLhQQLG9nlHXM6HHJO6XbIy574GRxdlTfwXahNWpe6PH3yTy3Wm9eTsjNY1dTjsNKDYg5G+7RobQVRirlC0LNkTPGR9C59vhl+rxnqHlSU4gik2V+jnftKblXujoH/r1j3AHMonIwXvzXll1AiUYKUSDqHvnlWfX92q6ZBBW22eycTTgQBt4pi4ccrsfjeAlojkU/Jg35my1+lC0m5O14uiNw0ZYSMzJbxAbsdtRe/T3dwsN6dlwGB5Wi8L1KoXBhagIq9/vw3aujho1H2546BJfYBIPJh0qpSfSDcrX1FSCCk9VlFWcyyI+bdcG2qgSjvBXyQEZlFApzIO74Ivx2sp+47m3ayAF25cm8akuLM0ZHwYmWZGeBtrmNlg+/XLSts4fZFcvAFjcRZ1pX3oAGFuTC3swUgEuMYjvjJn4Vt2nWN88SrhRgJwWluOasEYFPN2hBJ9tdZYBfXL5w3In489ww6G1H8PCMttoimoCCk4gtHYedU7UK5vSRAj1ZMWKKxgAVFkXLSc+w==';
  const _INTEGRITY_HASH = 'c7e14cd76894a50d8cb2ebb4cccf2067f4be357035a2d3a4555cd51f5e395533';
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
