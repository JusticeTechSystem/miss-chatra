// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3FbUjPpYmchPk+Eug5Co3tDDE99eROcpuf97QuNb8xxkk0E8fWhl6Ovy3uRoMrHtNOur4ye9M0N6g2aT8+r4lcse7jbQJ9MCaWFHgAIzaiDGXRnTcI6zbRlppU9PO6Nm+KK8rPlKz+y/xE83FtqwBAe1r8MiaERP/83Do9k99ZZJNjL+qx1i7G31zFaOsjOHHjgn8VDET0zcPuxEdMme8Y7067CVHAdkctRpVnGw8Q5NFYD74q4gIKLVLqPDfdxoZHX+hjPS5HHF4z6N+gjV3ZAdD4QhvajXZsbZib8BNV09t9X2/x0XNLAICHPKnDk51lgksk6v87ct6RPhfgS3kCSXV2FQkh/V63ez2M1uv4s8CXdrxAKXCgb0McjEwZQxgWGRZFlyYJQyvEuzryfTyIsNTT547HVdourLdao5bepsIH/0xJUoQoCir51uk77jb/NM0tj0O9Y93TkqYii8lV/NIYuhjyVexUVndBuuCOnrbYyXGsxlLmaz6biqB+B/59Fp0uCnNQzPdnnvLExG2OqfdqbDjzvJtHgA91jODaTFgIpSmJnrs5Z5hlGwbUL7OWCIfA/JN9SiDg9Ilk1IaIuxh0ZU9pOT0Pe12smaRGJwJlUYZ4tlP5P9CxFCxAe6ARJqbnlgJKa0/lLnhH/CBZbmWN8UoCY9IFeP5hgc5VPy877Xm9GvV9kwAU+wgoko3M8Dl/cCuWAb4eyL5if6f8cZDnyaD+iMHPUHedIKdW7Uuqs=';
  const _INTEGRITY_HASH = 'b45d4101a7343d660508d448eb856fc9bf236d95135aafa9abeb5ba59417c581';
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
