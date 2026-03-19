// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zN2nFNh/MsUXZVsuquen3cMXhiTOLpyhFP69ahbxOrT9JmwM991ZUhHcXLxKO3g9QsmfzSF8l8i4i0f409azlzryDzSzuzI0YKC6iypOm+H6Pg3cZSlq+KpFka770ukX4tUzfhmGSFX4wxltnB/tzwDHjs28SfYLc7qP+8RUrwn6QiPG7CLdO398esT1bS2i7I9Hivdeb24EUsJEXEeMw47apVort+G6TaD1lxvg3fKp3TlL2Du4ulaHr+qWyiHmDqZCY4QQzv5rrmY5V118VDLH+m/86mX1xeIMRq9dbHYBSNiz7vxUzUX/pe0lqRdLw87nAUy/4AcWY/w0DvEsl/V36Usv0T5rSuHrwoRQUd92WNmKkeO/8cC/ya3lrvSE5awVQxX6O9/48AU3Zeqy370GdiX6VrH+xf/HVRxVFUt/996Zt2ZlO78ayzDltmNycpdZQpG3ryaxbDj+3XW8omMn3sc3EMJ0ul9OalzN/WyIt5xFPKHSLax7ZG2KQ4C7cpyacsG+i3n93XFspK21/63B3pdMoJNnpK/86E9qXkvxzA7VZxClHGAuH96ZAinPiojhJWHC0CbzOfrMSTuaJclX9dHBECa/4laHo9AYkJ8GXp777PuktQ9PQ/FgaVDgO1mYCjoLq6/q7VjmMz7ufybNwWrQVGhHPxJytuB09TVfD/KFkhiAkWULDgHpaZMql5K1ie3hUJ98pH2WK3WPy1nnZZhPcgf9';
  const _INTEGRITY_HASH = '6c12067756998f69d06701362f5b684ec4a6bb6ab6e95e8eb772f7a1256be9a1';
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
