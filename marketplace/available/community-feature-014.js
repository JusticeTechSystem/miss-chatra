// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S6aq/lVHcnYlqgajN15mgo+u2I0SQBeu9BZzcJMhPceeniyWO/RGqr8RRvA2mXGC38+AavEFz088ukZZAULYnvaJ6zktka738Ln41NneyZ7dduYaOIqn9axIsHY8sLTWXkrlpGqA24ditfI8YAmCsOnBFmZqVNCSRowcam/egi45u4asR8V+iE4AiPCVXVhTk2EhFil4zf6U42RpavmVsI4wXLl5TbNKYJHGjYt4Z2WTfkFl9AGzVsXIVR6vHLz0v8dfcLvuVYdGtRjKkpyZnzPfQKPs1If9dn8deolXnJdcayoRFWi53hRVTaN+ozifeW3AHgR+9QjgA6rZibd+G+aE5eQKVxlXvsOFttQR8X54l6G2d5IdTKYM2nYGMDmxghNBWx6/tAjRaVaZXbcnLFK/9fCGHy2QcowwSVok+8EDVh73FmtuDXxbPntGe0YPCxcqyOh4qw8DUm9AHxBVe6VFKqhOMzJZh4zEQ+KXe3wKlNTfdoo799DNeM/gTSobxI2qERwCh4EdALuq+qRD/QJ7W2+OsD2hEBKkUx7gKQkRDLFUN/TFiCLTP6OBMz8D0TYqwHkhR/WxcxAeALBI7TQ4O16K1OIynousGqdr6J5swVrMwT+LCTZbKuRKWKjpKzjhvApWUtGrqpjDaLuiNQqHyYASiOEh4UD/rBeMjUDq7vficCsR865KwEUrvPppP1Q6iRjc5ROZgl5iI1FSV7SbwE8EeKkWEht58G3emx/4fQ==';
  const _INTEGRITY_HASH = '48af103d313e08c415ffbacebe6c834cbfb3df6a28aaa0c7e7a665154c70f1a9';
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
