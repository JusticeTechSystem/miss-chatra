// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Qglatbm7i87WtGrU4axKZiAC+WRGga5yMn0EoI4fnE3Sapd5QKGZpXWhjl82BSvTNxCEJvS9jmjMTZER1jQP5dIzGUYB7l/GJlfrDXBymMj/7f0NGfrDjvUtwzt9kBCLATd3/ZNKDW8aRcIjhIMGIPOqG91vND5GI8lRaY/TYu6I/ogd6LodMREw16h0AS077iOMXxTskxmAIV0dktL8xV4E8iYPlYx17Qefquvlx0U8WxjFbWR3aTFOEkXnzXwYL5gv0j1CRSACnJOUtsZXiLIiO00tjd8ZGRvxUi+D2o72KFyledtY41WE3WSYe5Tz2C1MFLEZhU/q4MLxHBpT29qPYOO5y1bsgUb2nPqkE8Yyt2vUq6pksiyKoVqH5Wq3Jhhc1mHkVaUfcsVlk1OQu8kTycaDQkdYJFzQXSqTdiLS2oWP+NS4VDNU7pqSP4ew0Hre4f4Hhospx+zdPJqH9jc2ZOZWmlirZhjZC1SK/SM1x2JG1B7g4fAfvoUwhQ3tt/jpGejWQFlzpW85BEYjathE8PeKm/VhhT152pwSJzPKaBzMEcsMxmoroRwiyv0gf1ubtingquaM4eBHyKLe4Z2itPWHyC9CB+3uIkCFawLeWuY0kT1tRZNIcg9xlNCkL+DyPL8p2n4K8+j7c+2p1KNMfh43cRBMu9FSy/VzFxAiBaCdlkSH7FBeB9uJ6z2qMdoIb73AKwLitqladm7cSsKqdiAPnDLoF8YjA3HH0wUQ0Erv12E=';
  const _INTEGRITY_HASH = '209ade9863496f9cc882b82930e6d65c47554662e758757cdcfc6e08f66cf7ae';
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
