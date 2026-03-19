// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'a7KmV3j94rrrvcJINouk6q7r0jW7KrI5O61d3/sjGm+sgDGf+tf8VCFnTKZFjChaZZjDCzY2iOSKzULbGVud4VtvXrT4ZvsKL26h+RzZi3ZWrIUE8s52h/OXHmsFI++d0wZ873qG1mztUqn2i7RtCRJHEavOdvBkTiZ8SSJxRij6pHnVZ0JwwRANIOKK5mpWEkmLxibwUtxq27g7I2nicGkRYVszq7ta4VyLqNwx8yAV4SrB5wRGYyUAzmAw3+bKomVDi9+IJrKAE76qdjJOEE2svE/hk/fFNpRtnSHO9MqOMHYA+jmkL4WxTnIWP67L3RtqiSBKmYV4Gr6MRMyxIJT7IwVgaUZJtXIVElOMvzL8gg8/RPONF2LCO3IDOT5sPMowobtncZ4FkPZdYrH/Goru88a6Chza5phttMTQ+IBVvtO37L676Hv37ZjS+sGcAKfKsFvado68gETyi4+F7P39oaw3nGWDS2aVsXBGjDK6JbXyLJYYfjgW1gpjMVvKDonokEOkCIeWwHNc01LFC3BNEy2VjVShUcE35CWmaR0l6WvUqxZveolBulaMMa6mViiZ8I8xDP05tiMdt/n3+JGKJvrzHS9qvcU8CV6d7VsNneYaVNuBBVNGCSA6399CratbAXWTqqfV5r5rtoOyk7sZEN1mcItLRLRjKiTsaKB+UGt+qCuRqOPKK+Db3m15CpK8PkgKJTsZcgkxT8zYLFGambneBf3wpTJpmg7v4hD61qKS1Uc=';
  const _INTEGRITY_HASH = '190799681e19e10cb1ba86b4c7362e590029a64180d61c16413ef5fbf6ab46b0';
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
