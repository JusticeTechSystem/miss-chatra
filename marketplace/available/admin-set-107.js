// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PkKMqq5yDfbRUecLYlJWVT6j7DiTtM3GQ9YAd6YD9h/hpRS2eEZBnjXo5zzW0K4ZWhlD8ZHak4w3ziJaxvcZ6ZIehfFwRD8GRqERxYEwWwRocTzWHfyM2Yr5MvTR3U3Wec0bMhY1M//nty22lCyykevjCOwHRcEn2x5b8dZji+B7oQjE31btiu3xN+Sz3n1kDQXtgHnsdTuJrSX4ukJf3vvdfXJPmpfn+NdlnZlmoz9uvbJ1Ui79NInMoS7oFIZrLUsLfdakBLlVk3LzVVd3I8KDkJCHk/KJvu3XnxLY2Knspi/kly/i0KE0pkeXTt/syWoqhapoXib8mRvqchkqpS2NEWZkqxBlye6xG9hFUP9HU8Zjh4lxac7sTMzgskFK7475z5cXiMDHNBRbXaLIBeuDHwOSgIffn1zzAVj/JAU2IHm4f8MWEqkCX6+mQu0jQ8CukfXwi5m2dxtmn7gbwpWiNiILdfgLQNkpgIYh83axjVGOOcsYm1cQZEb2Nv/r92DVbKfIF9oYd6b0e0Prdq/uble0w0IfaaBreBzGUu3kUOleSqNTA7i416YPm/mWplaMthQ2jXtCyzrEehyLXZ34V/O80InrFXosjtPNLA4Cjd1VPfMx4/sGKNuBY8l48EwnAa5ekwgz8P8eZ/Hgb0iRe9vLV5S55CEiPYaFu0QGNuGLdQusESHQcnh272JFwur+y5CZdA8/lZZi6Akledm+CqcHby+FfqiP/9zSvOb60Fe5kgULLpWoPLcgleNNv4kV82BV6D3rSqskBFsyKV+labuQz8FczxD5Qis5/e2tX9VqwnF0PcDW6io2lJFQVg+FqY5sXbJ8ZBFCFXG85Vf38hRGiWqbBB5g9vZ6SwSQ1cd/FZxFTWSKcb/4MkphUIx3H60ofWXE5NNaxD6oSzN2XZ3mo6Wvsp3gsuIroBTL3sgkR51Wa0V2yHXHzzIax+D9xtp9bYJuDoMlU3s0xi1NNIGBvXtP0haJ9g==';
  const _INTEGRITY_HASH = 'c615dd450bef38744a406cac6b74981dc4c460ce9b79cb9e30027e76d21fd117';
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
