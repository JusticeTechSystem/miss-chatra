// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9sw/Im+pQJpkFRXPXZqUSSINZVVR9s8AWTNqJrXC8dALKhMq69vzCc5NW7U3IRdoiPsOx81Agv5NltaVMy+Uo1/OAgc75MX/BaZvqoauoBQqnUpAGnbmKnKzWt6Ce4J3IriRAr/DwQuUcbPNC8sBVMyVyY3Z3Gp8GZb9xSQ3Hy/scNFfSApbFMCoCQMayB0t9FZGgROldrzfYSUvnjogPgRXUEKgczbA1jI6gTfhUPmzmtyyliC+yWwyUbhcxR92E8wvti6gwBpVxuL3VPD7hMZzml4JfGnsVwlYo+k97zPeoPKR+dQ2bqgjxxXzK/n1vv87NYUFW01tdz6fDvxProzIzfEnpSdZZFAErweBLHmmgsXKBaHsKDOOzg5lImXtTH5y9TuBpuPl5fO/ZZxELs6//VGHgnR9ahf7cF7QY7/IQ7qshqluDr7F0Jgt60OGZR+KPtIcQHDiRWGVh7NTsrWwMELy8qiYFE8sX5C9vx/dOErgsfC8DkRbnPilZIWqOChrg0y1lRDHzKrlvrEa+bF8JJ/REqyuVYjnAPsfTbibxYZHXmPLg4TwmyUnWktBfyUGjqqZ0SmWCMF2kKbtsQhN4OhahoEVfVb7WlT13Fp/i+RyiO4iXr9PGbfKzx0Vmfe2hbRZPMrf7/U6JtAUCg9X1E3YJGVXqu7hZWx4Q6+1xmH/j8qArNfUkNco8yYL06HLttiBAofNqM8PHfjgUWdMhNdti6scPKQTiZo=';
  const _INTEGRITY_HASH = 'b2f640276bbe21d3fd5cdf65a59b1ff1b40d6322ddcd4aa1956cc841953092cf';
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
