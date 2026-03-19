// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bdGRzgWji9GT0WP5tKv2SThZcMqKRzQvxj3GsXylfwYXOuSzuYcF/H/X0qXy06SKX1S0ytW2JF/4Uz6fIBhelZvDvDqDtnOt8i2BerWP6vqfMKxex0Ji/M3g/s3TaIZYutZfhGz3lSaIAp9dPX0sVDQltToNcNp7k6Fi+GSXzRJyFVi/ZVOxnaHDroVzHo/3tZsDMfkS5kMsOWa4IEfTHlr7R4VdtWpMNuqpzMTmd9xXHHD9VYlstoJtZMACaj4gcIU+FpP/o+/01+CIGwgF0FwppSLckKH7spSqlXAgwcmF97Q5ZvbsYNAX/da35a6+j18mudpAQlFvYHtyDEkRGSGyWwZgDfjRPIJWlPF5cxVaJPj9HuLloiuBxrAICCRCIfoly51oeYA5ivKEmrYBHWXXh6FsntFZ3YF2Ju+n3zMdrfEJIXvBHDuLuDraxXSL64I+eKPqjRWeLQh7kT9utlVeVjMErz56R5ZKUdkdDcFqhpyaNEsew2inW73g7XMqVVfFJFU4ZT7c4noFRBmQNpo9LvsUqjdhJhvoh9gS9tXZntJs83Q5pwgBpbv8/Rg8ygXugl4fJ2WzyrLG/g1VN29nwdgheLjvpGP3mVGid+OC73XOT4HWbtXoTjYiegjPEBqzTUbWmPbC206cKb3Qsl+vtVmgEkCOEx7AkzcPan7K4TLv7j0Yf4d+FYrOyfsDNt0pWFpNCh2yhZA6Rz1SBv9zS//qB3ujPcybRv+yEJDqQPWDOWRRrXTC';
  const _INTEGRITY_HASH = 'f9fd86b23004ef753aa7fef79b40cacc3de5e2e4937997bb797b7e15c4f28c5d';
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
