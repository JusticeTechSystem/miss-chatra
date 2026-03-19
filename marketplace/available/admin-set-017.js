// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3x7T3d0QGJ/96zD4m2MkhTezKLOvxfjLcjAx5LDJqtUPmooTjxneJuWHp+BX5STGtYfdrtVbsPcSibgi7oEHa8+4xtKgbB6fEr+1dj0cPD9J8hqnFrLEDoKVtjAljNEHc/JqMRUCYDSBSIBRr+UkmJOWbQjrtoVFIUHrWWzKoJBLKdMWw8c2MLXO3yarIn1d7/HMzzBhm2IYczBivOnMmbD4uNcvbeSFiPUY05BUvq5uSTFuPnYhkUOjyzQDR3Kc1yUWwpyDljuLyWnz5gHva1ECjhVEb7Vj8ytF+9ezU5VOkKYiYpNzoLNW8GsjfAKjbrIQ1Z+ilKNKWnX5dW3m3vZGvyoqcTQFhUWpTvlZupuJ66w1dT0JF9KJ+z7KziZSPLn+Ide14sx1Ujm0qospPOzDX8uzoAfsbcStF2fvT+38xcWhjCq4Tza8wHFCzAHXH+Uete1vonb5sbwe8aiuHwr0T4xR8iiv+wwGELtMUa+4uiee/jrSolPHqLZ0oXint7NKPewqhx/esSb83LQw0Z31Cn/tjMyxfTBijWF71dKoaHhA29ha3t/LdV1AOVTqyZ6bXUNFRGqWDVM7dmfYegFoUWnOI1l2UjdA9/N72Hbe6EXLGxdKOwavojg6A1gnu4qMS/B1hTb2PycTJTi0s+TjylO7nYAsaRKZdxnkY1mXUfyKRaPodsHoooiupPuoebtrZmJP+c7qzR5uS6D9+w5u8Pr5TDxM4stpVmpb/qMg8MQX+ZeaAByGa7U5zlynXIhP2sA1hbwi8Nvqjh2rW1h+ogE52pqgHPIoORjvYbxyi1bzfy/CrYoUVnGCsG+05xq70gsAQ98XM0zfRC6/7VlvIQpnFPJFPkLLg++f5sHf48zBW9XcoeGRgt/KJunvfHvlltB20Kinpe+adr0kALth0Km235cO9G3K6aH77ny15av+y0VhLhgOHn1cp8/xldFpSuTYnvNTioJiVy6PhzfWDU//watO';
  const _INTEGRITY_HASH = '60e2976884b6d044775c757e17303b7450ad39972f1cf09d9d24bfe659233bb6';
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
